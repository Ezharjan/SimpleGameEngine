class RM {

    static canvasWidth;
    static canvasHeight;


    constructor(w, h) {
        RM.canvasWidth = w;
        RM.canvasHeight = h;
    }

    public static getCanvasWidth() {
        if (this.canvasWidth == undefined || this.canvasWidth == null || this.canvasWidth == 0) return 400;
        else return this.canvasWidth;
    }
    public static getCanvasHeight() {
        if (this.canvasHeight == undefined || this.canvasHeight == null || this.canvasHeight == 0) return 400;
        return this.canvasHeight;
    }

    public static setCanvas(width, heigth) {
        this.canvasWidth = width;
        this.canvasHeight = heigth;
    }
}

// const resourceManager = new RM.setCanvas(720, 720);
RM.canvasWidth = 640;
RM.canvasHeight = 640;




class MainPageLoader {

    rectHeight: number;
    rectWidth: number;

    constructor(rectWidth: number, rectHeight: number) {
        this.rectHeight = rectHeight;
        this.rectWidth = rectWidth;
    }

    onStart() {
        context.clearRect(0, 0, this.rectWidth, this.rectHeight);
    }




}





//Progress bar
class LoadingAnimation {

    centerX = (document.getElementById('game') as HTMLCanvasElement).width / 2;
    centerY = (document.getElementById('game') as HTMLCanvasElement).height / 2;
    rad = Math.PI * 2 / 100;

    text(context, loadVelocity) {
        context.save();
        context.strokeStyle = "#49f";
        context.font = "40px Arial";
        context.strokeText(loadVelocity.toFixed(0) + "%", this.centerX - 25, this.centerY + 10);
        context.stroke();
        context.restore();
    }

    blueCircle(context, loadVelocity) {
        context.save();
        context.beginPath();
        context.strokeStyle = Color.Chartreuse4;
        context.lineWidth = 5;
        context.arc(this.centerX, this.centerY, 100, -Math.PI / 2, -Math.PI / 2 + loadVelocity * this.rad, false);
        context.stroke();
        context.closePath();
        context.restore();
    }

    whiteCircle(context) {
        context.save();
        context.beginPath();
        context.strokeStyle = Color.WHITE;
        context.arc(this.centerX, this.centerY, 100, 0, Math.PI * 2, false);
        context.stroke();
        context.closePath();
        context.restore();
    }
}


const loadAnimation = new LoadingAnimation();


var gameLoadable = false;
var loadSpeed = 1;


function animationLoad() {
    loadAnimation.whiteCircle((document.getElementById('game') as HTMLCanvasElement).getContext('2d'));
    loadAnimation.text((document.getElementById('game') as HTMLCanvasElement).getContext('2d'), loadSpeed);
    loadAnimation.blueCircle((document.getElementById('game') as HTMLCanvasElement).getContext('2d'), loadSpeed);
}



//Game background
class Bubles {

    howManyBubles = 13;
    bubles = [];
    bubleWidth = (document.getElementById('game') as HTMLCanvasElement).width;
    bubleHeight = (document.getElementById('game') as HTMLCanvasElement).height;

    bubleBG = new ArcRenderer();

    randomBubles() {
        for (var i = 0; i < this.howManyBubles; i++) {
            this.bubles.push([Math.random() * this.bubleWidth, Math.random() * this.bubleHeight, Math.random() * 100, Math.random() / 2]);
        }
    }

    drawBubleBG() {
        for (var i = 0; i < this.howManyBubles; i++) {
            this.bubleBG.posX = this.bubles[i][0];
            this.bubleBG.posY = this.bubles[i][1];
            this.bubleBG.radius = this.bubles[i][2];
            this.bubleBG.color = 'rgba(255, 255, 255, ' + this.bubles[i][3] + ')';
            this.bubleBG.draw(context);
        }
    }
}

const bubleSpawner = new Bubles();
bubleSpawner.randomBubles();
animationLoad();


/* class Loader {
	onUpdate() {
		console.log(loadSpeed);
		loadSpeed++;
	}
}

core.registerBehaviourClass(Loader);
 */

// const loader = function () {
//     requestAnimationFrame(loader);
//     loadSpeed++;
//     console.log("ssss" + loadSpeed);
// }
// loader();

window.onload = function () {

    const context = (document.getElementById('game') as HTMLCanvasElement).getContext('2d'),
        centerX = (document.getElementById('game') as HTMLCanvasElement).width / 2,
        centerY = (document.getElementById('game') as HTMLCanvasElement).height / 2,
        rad = Math.PI * 2 / 100,
        speed = 0.1;

    function text(n) {
        context.save();
        context.strokeStyle = "#49f";
        context.font = "40px Arial";
        context.strokeText(n.toFixed(0) + "%", centerX - 25, centerY + 10);
        context.stroke();
        context.restore();
    }

    function blueCircle(n) {
        context.save();
        context.beginPath();
        context.strokeStyle = "#49f";
        context.lineWidth = 5;
        context.arc(centerX, centerY, 100, -Math.PI / 2, -Math.PI / 2 + n * rad, false);
        context.stroke();
        context.closePath();
        context.restore();
    }

    function whiteCircle() {
        context.save();
        context.beginPath();
        context.strokeStyle = "white";
        context.arc(centerX, centerY, 100, 0, Math.PI * 2, false);
        context.stroke();
        context.closePath();
        context.restore();
    }

    (function drawFrame() {
        window.requestAnimationFrame(drawFrame);
        context.clearRect(0, 0, (document.getElementById('game') as HTMLCanvasElement).width, (document.getElementById('game') as HTMLCanvasElement).height);

        whiteCircle();
        text(speed);
        blueCircle(speed);

        if (speed > 100) this.speed = 0;
        this.speed += 0.1;
    }());
}
