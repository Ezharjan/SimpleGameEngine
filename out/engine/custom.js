class CustomBaseRenderer {
    constructor() {
        this.posX = 0;
        this.posY = 20;
        this.width = 0;
        this.height = 0;
        this.color = '#000000';
    }
    draw(context) {
        context.fillStyle = this.color;
        context.clearRect(0, 0, this.width, this.height);
        context.beginPath();
        context.rect(0, 0, this.width, this.height);
        context.closePath();
        context.fill();
        this.renderer();
    }
    renderer() { }
}
class CustomInfoRenderer extends CustomBaseRenderer {
    constructor() {
        super(...arguments);
        this.textFont = '16px Arial';
        this.text = 'Rusher';
    }
    draw(context) {
        context.font = this.textFont;
        context.fillStyle = this.color;
        context.fillText(this.text, this.posX, this.posY);
    }
}
class CustomRectRenderer extends CustomBaseRenderer {
    draw(context) {
        context.beginPath();
        context.rect(this.posX, this.posY, this.width, this.height);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }
}
class ArcRenderer extends CustomBaseRenderer {
    constructor() {
        super(...arguments);
        this.posX = canvas.width / 2;
        this.posY = canvas.height / 2;
        this.radius = 50;
        this.startAngel = 0;
        this.endAngel = Math.PI * 2;
        this.counterClockWise = false;
    }
    draw(context) {
        context.beginPath();
        context.arc(this.posX, this.posY, this.radius, this.startAngel, this.endAngel, this.counterClockWise);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }
}
class CustomImageRenderer extends CustomBaseRenderer {
    constructor() {
        super(...arguments);
        this.source = null;
        this.width = 100;
        this.height = 100;
    }
    draw(context) {
        var image = new Image();
        image.src = this.source;
        context.drawImage(image, this.posX, this.posY, this.width, this.height);
    }
}
//Limited
class Collider extends Behaviour {
    isBorder(targetPosX, targetPosY, targetWidth, targetHeight, colliderWidth, colliderHeight) {
        if (targetPosX == 0 || targetPosX == (colliderWidth - targetWidth + 1) ||
            targetPosY == (colliderHeight - targetHeight + 1) || targetPosY == 0) {
            console.log("You arrived at border!");
            return true;
        }
    }
    collidedWithSame(targetPosX, targetPosY, targetWidth, colliderX, colliderY, colliderWidth, colliderHeight) {
        if ((targetPosX >= (colliderX - targetWidth) &&
            targetPosX <= (colliderX + colliderWidth)) &&
            (targetPosY >= (colliderY - colliderHeight) &&
                (targetPosY <= colliderY + colliderHeight))) {
            return true;
        }
        else {
            return false;
        }
    }
    collidedWidthDiff(targetPosX, targetPosY, colliderWidth, colliderHeight, redLine) {
        if (Math.sqrt(((targetPosX - colliderWidth) * (targetPosX - colliderWidth) -
            (targetPosY - colliderHeight) * (targetPosY - colliderHeight))) < redLine) {
            return true;
        }
        else {
            return false;
        }
    }
    isInsideRect(point, rectangle) {
        return (point.x >= rectangle.x &&
            point.x <= rectangle.x + rectangle.width &&
            point.y >= rectangle.y &&
            point.y <= rectangle.y + rectangle.height);
    }
}
