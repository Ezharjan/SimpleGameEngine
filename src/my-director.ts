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



class FloorController {
    static floorIndex = 0;
    static isAudioPlaying = false;
}


let clickPosX = 0;
let clickPosY = 0;



window.onmousedown = function (e) {
    // console.log(e);
    console.log("Rubina X: " + e.offsetX);
    console.log("Rubina Y: " + e.offsetY);
    clickPosX = e.offsetX;
    clickPosY = e.offsetY;

    checkClickPosition(() => {
        console.error("Button Clicked");
    });
}

window.onmouseup = function (e) {
    clickPosX = 0;
    clickPosY = 0;
}



function checkClickPosition(callback) {

    if (clickPosX >= 66 && (clickPosX <= 212) &&
        clickPosY >= 608 && (clickPosY <= 655)) {

        callback && callback();
        console.log("Back button clicked!");
        window.event.returnValue = false;
        //
        // loadPage("./firstPage.html");
        window.location.href = "./index.html";
    }


    if (clickPosX >= 66 && (clickPosX <= 212) &&
        clickPosY >= 546 && (clickPosY <= 594)) {

        callback && callback();
        console.log("Renew button clicked!");
        window.event.returnValue = false;
        //
        // loadPage("./firstPage.html");
        window.location.href = "./firstPage.html";
    }


    // if (clickPosX >= rectStartBTN.posX && clickPosX < rectStartBTN.posX + rectStartBTN.width &&
    //     clickPosY >= rectStartBTN.poxY && clickPosY < rectStartBTN.posY + rectStartBTN.height) {
    //     console.error("Start button Clicked");
    // }
    // if (clickPosX >= rectHelpBTN.posX && clickPosX <= rectHelpBTN.posX + rectHelpBTN.width &&
    //     clickPosY >= rectHelpBTN.poxY && clickPosY <= rectHelpBTN.posY + rectHelpBTN.height) {
    //     console.error("Help button Clicked");
    // }
}