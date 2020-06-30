var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class ClickDebugBehaviour extends Behaviour {
    onStart() {
        this.gameObject.onClick = function () {
            console.log('Button clicked');
        };
    }
}
class ClickContainerBehaviour extends Behaviour {
    onStart() {
        this.gameObject.onClick = function () {
            const imageRenderer = core.getObjectById('image');
            const greenRect = core.getObjectById("greenRect");
            const button = core.getObjectById("button");
            const movtionA = new MovtionBehaviour();
            movtionA.time = 1000;
            movtionA.targetX = 100;
            imageRenderer.addBehaviour(movtionA);
            const movtionB = new MovtionBehaviour();
            movtionB.time = 1000;
            movtionB.targetX = 0;
            greenRect.addBehaviour(movtionB);
            const movtionC = new MovtionBehaviour();
            movtionC.time = 1000;
            movtionC.targetX = 0;
            button.addBehaviour(movtionC);
        };
    }
}
class KeyContainerBehaviour extends Behaviour {
    onStart() {
        const Hero = core.getObjectById("hero");
        const Monster = core.getObjectById("monster");
        const Tool = core.getObjectById("tool");
        const Stairs1 = core.getObjectById("stairs1");
        const Stairs2 = core.getObjectById("stairs2");
        window.onkeydown = function (e) {
            switch (e.keyCode) {
                case 38:
                    Hero.getBehaviour(Transform).y -= 50;
                    console.log(Hero.getBehaviour(Transform).y + 670);
                    console.log(Monster.getBehaviour(Transform).y + 360);
                    break;
                case 40:
                    Hero.getBehaviour(Transform).y += 50;
                    console.log(Hero.getBehaviour(Transform).x + 280);
                    console.log(Monster.getBehaviour(Transform).x + 390);
                    break;
                case 37:
                    Hero.getBehaviour(Transform).x -= 50;
                    break;
                case 39:
                    Hero.getBehaviour(Transform).x += 50;
                    break;
            }
            //判定是否触碰
            if (Hero.getBehaviour(Transform).x + 280 <= (Monster.getBehaviour(Transform).x + 390 + 50)
                && Monster.getBehaviour(Transform).x + 390 <= (Hero.getBehaviour(Transform).x + 280 + 50)
                && Hero.getBehaviour(Transform).y + 670 <= (Monster.getBehaviour(Transform).y + 360 + 50)
                && Monster.getBehaviour(Transform).y + 360 <= (Hero.getBehaviour(Transform).y + 670 + 50)) {
                //"弹窗，遭遇怪物"
                alert("遭遇怪物！");
                //"怪物消失"
            }
            if (Hero.getBehaviour(Transform).x + 280 <= (Tool.getBehaviour(Transform).x + 600 + 50)
                && Tool.getBehaviour(Transform).x + 600 <= (Hero.getBehaviour(Transform).x + 280 + 50)
                && Hero.getBehaviour(Transform).y + 670 <= (Tool.getBehaviour(Transform).y + 410 + 50)
                && Tool.getBehaviour(Transform).y + 410 <= (Hero.getBehaviour(Transform).y + 670 + 50)) {
                //"弹窗，拾取道具"  
                alert("拾取道具！");
            }
        };
    }
}
core.registerBehaviourClass(KeyContainerBehaviour);
class MovtionBehaviour extends Behaviour {
    constructor() {
        super(...arguments);
        this.currentTime = 0;
        this.initX = 0;
        this.initY = 0;
    }
    onStart() {
        this.initX = this.$getTransform().x;
    }
    $getTransform() {
        return this.gameObject.getBehaviour(Transform);
    }
    onUpdate(durate) {
        /**
         * Apprent shake can be seen while moving using codes below
         */
        const transform = this.$getTransform();
        this.currentTime += durate;
        let timeRatio = this.currentTime / this.time;
        (timeRatio > 1) && (timeRatio = 1);
        const need2MovX = this.targetX - this.initX;
        transform.x = this.initX + timeRatio * need2MovX;
        if (timeRatio == 1) {
            this.gameObject.removeBehaviour(this);
        }
    }
    onDestroy() { }
}
__decorate([
    SerializedField(1000)
], MovtionBehaviour.prototype, "time", void 0);
__decorate([
    SerializedField(0)
], MovtionBehaviour.prototype, "targetX", void 0);
class GameStartupBehaviour extends Behaviour {
    onStart() {
        // console.log('gamestartupbehaviour');
        //const button = core.createPrefab('button.json');
        //this.gameObject.addChild(button);
    }
}
core.registerBehaviourClass(ClickDebugBehaviour);
core.registerBehaviourClass(ClickContainerBehaviour);
core.registerBehaviourClass(MovtionBehaviour);
core.registerBehaviourClass(GameStartupBehaviour);
