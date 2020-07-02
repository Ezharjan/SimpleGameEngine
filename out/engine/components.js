var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class Behaviour {
    constructor() {
        this.uuid = 0;
        this.$isDestroyed = false;
        this.$isExecutedOnStart = false;
        this.gameObject = null;
        this.uuid = Behaviour.behaviourUuidIndex++;
        Behaviour.allBehaviours[this.uuid] = this;
    }
    static getBehaviour(uuid) {
        return this.allBehaviours[uuid];
    }
    onAddToGameObject() { }
    onStart() { }
    onUpdate(duration) { }
    onDestroy() { }
}
Behaviour.allBehaviours = {};
Behaviour.behaviourUuidIndex = 1;
//Use Decorator
const SerializedField = (defaultValue) => {
    return (target, key) => {
        const clz = target.constructor;
        if (!clz['properties']) {
            clz['properties'] = [];
        }
        clz['properties'].push({ key: key, defaultValue: defaultValue });
    };
};
class Transform extends Behaviour {
    constructor() {
        super();
        this.x = 0;
        this.y = 0;
        this.scaleX = 1;
        this.scaleY = 1;
        this.rotation = 0;
        this.alpha = 1;
        this.$globalAlpha = 1;
        this.$localMatrix = new Matrix();
        this.$globalMatrix = new Matrix();
    }
    calculateGlobalProperties() {
        if (!this.gameObject.parent) {
            return;
        }
        const parentTransform = this.gameObject.parent.getBehaviour(Transform);
        this.$localMatrix.updateFromDisplayObject(this.x, this.y, this.scaleX, this.scaleY, this.rotation);
        this.$globalMatrix = matrixMultipication(this.$localMatrix, parentTransform.$globalMatrix);
        this.$globalAlpha = parentTransform.$globalAlpha * this.alpha; //place here temporarily
    }
}
__decorate([
    SerializedField(0)
], Transform.prototype, "x", void 0);
__decorate([
    SerializedField(0)
], Transform.prototype, "y", void 0);
__decorate([
    SerializedField(1)
], Transform.prototype, "scaleX", void 0);
__decorate([
    SerializedField(1)
], Transform.prototype, "scaleY", void 0);
__decorate([
    SerializedField(0)
], Transform.prototype, "rotation", void 0);
__decorate([
    SerializedField(1)
], Transform.prototype, "alpha", void 0);
class ImageRenderer extends Behaviour {
    constructor() {
        super(...arguments);
        this.image = null;
    }
    onAddToGameObject() {
        this.gameObject.renderer = this;
    }
    onDraw(context) {
        const texture = getImage(this.image);
        if (texture) {
            context.drawImage(texture, 0, 0);
        }
    }
    hitCheck(point) {
        const texture = getImage(this.image);
        if (!texture) {
            return null;
        }
        const rectangle = { x: 0, y: 0, width: texture.width, height: texture.height };
        const result = isPointInRectangle(point, rectangle);
        if (result) {
            return this.gameObject;
        }
        else {
            return null;
        }
    }
}
__decorate([
    SerializedField()
], ImageRenderer.prototype, "image", void 0);
class TextRenderer extends Behaviour {
    constructor() {
        super(...arguments);
        this.size = 20;
        this.$textPosX = 0;
        this.$textPosY = 17;
    }
    onAddToGameObject() {
        this.gameObject.renderer = this;
    }
    onDraw(context) {
        context.fillStyle = this.color;
        context.font = this.size + 'px Arial';
        context.fillText(this.text, this.$textPosX, this.$textPosY, 400);
    }
    hitCheck(point) {
        const rectangle = { x: 0, y: 0, width: 100, height: 20 };
        const result = isPointInRectangle(point, rectangle);
        if (result) {
            return this.gameObject;
        }
        else {
            return null;
        }
    }
}
__decorate([
    SerializedField('black')
], TextRenderer.prototype, "color", void 0);
__decorate([
    SerializedField('game engine')
], TextRenderer.prototype, "text", void 0);
class RectRenderer extends Behaviour {
    onAddToGameObject() {
        this.gameObject.renderer = this;
    }
    onDraw(context) {
        context.beginPath();
        context.fillStyle = this.color;
        context.moveTo(0, 0);
        context.lineTo(this.width, 0);
        context.lineTo(this.width, this.height);
        context.lineTo(0, this.height);
        context.lineTo(0, 0);
        context.fill();
        context.closePath();
    }
    hitCheck(point) {
        const rectangle = { x: 0, y: 0, width: this.width, height: this.height };
        const result = isPointInRectangle(point, rectangle);
        if (result) {
            return this.gameObject;
        }
        else {
            return null;
        }
    }
}
__decorate([
    SerializedField(100)
], RectRenderer.prototype, "width", void 0);
__decorate([
    SerializedField(100)
], RectRenderer.prototype, "height", void 0);
__decorate([
    SerializedField('black')
], RectRenderer.prototype, "color", void 0);
class Trigger {
    constructor(objectA, objectB) {
        this.objectA = objectA;
        this.objectB = objectB;
        this.isTriggered();
    }
    isTriggered() {
        if ((this.objectA.x == this.objectB.x) && (this.objectA.y == this.objectB)) {
            return true;
        }
        else {
            return false;
        }
    }
}
