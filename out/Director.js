class RM {
    constructor(w, h) {
        RM.canvasWidth = w;
        RM.canvasHeight = h;
    }
    static getCanvasWidth() {
        if (this.canvasWidth == undefined || this.canvasWidth == null || this.canvasWidth == 0)
            return 400;
        else
            return this.canvasWidth;
    }
    static getCanvasHeight() {
        if (this.canvasHeight == undefined || this.canvasHeight == null || this.canvasHeight == 0)
            return 400;
        return this.canvasHeight;
    }
    static setCanvas(width, heigth) {
        this.canvasWidth = width;
        this.canvasHeight = heigth;
    }
}
// const resourceManager = new RM.setCanvas(720, 720);
RM.canvasWidth = 720;
RM.canvasHeight = 720;
