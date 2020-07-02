/**
 * Math related classes and functions.
 * As this is a 2D game engine, there
 * is only two properties --- x and y;
 * and the matrix form is 3*3.
 */
/**
 * The vector times the matrix.
 * Which means taking the coordinate (vector)
 * of a point and apply it to a space
 * transformation (matrix) to get a new coordinate (vector).
 */
function pointTimesMatrix(point, matrix) {
    var x = matrix.a * point.x + matrix.c * point.y + matrix.tx;
    var y = matrix.b * point.x + matrix.d * point.y + matrix.ty;
    return new Point(x, y);
}
/**
 * Use the adjoint matrix method to find the inverse matrix.
 * Reference url: http://wenku.baidu.com/view/b0a9fed8ce2f0066f53322a9
 */
function invertMatrix(matrix) {
    var a = matrix.a;
    var b = matrix.b;
    var c = matrix.c;
    var d = matrix.d;
    var tx = matrix.tx;
    var ty = matrix.ty;
    var determinant = a * d - b * c;
    var result = new Matrix(1, 0, 0, 1, 0, 0);
    if (determinant == 0) {
        throw new Error("Not invertable!");
    }
    determinant = 1 / determinant;
    var k = result.a = d * determinant;
    b = result.b = -b * determinant;
    c = result.c = -c * determinant;
    d = result.d = a * determinant;
    result.tx = -(k * tx + c * ty);
    result.ty = -(b * tx + d * ty);
    return result;
}
/**
 * The geometric meaning of matrix multiplication:
 * reference can be found at https://www.zhihu.com/question/21351965/answer/204058188.
 * @param {first matrix to be postmultiplied} matrix1st
 * @param {second matrix to be postmultiplied} matrix2nd
 */
function matrixMultipication(matrix1st, matrix2nd) {
    var result = new Matrix();
    result.a = matrix1st.a * matrix2nd.a + matrix1st.b * matrix2nd.c;
    result.b = matrix1st.a * matrix2nd.b + matrix1st.b * matrix2nd.d;
    result.c = matrix2nd.a * matrix1st.c + matrix2nd.c * matrix1st.d;
    result.d = matrix2nd.b * matrix1st.c + matrix1st.d * matrix2nd.d;
    result.tx = matrix2nd.a * matrix1st.tx + matrix2nd.c * matrix1st.ty + matrix2nd.tx;
    result.ty = matrix2nd.b * matrix1st.tx + matrix2nd.d * matrix1st.ty + matrix2nd.ty;
    return result;
}
/**
 * Check whether the mouse cusor or a point is inside a rectangle.
 * @param {the cursor position on the screen } point
 * @param {container which is to be detected} rectangle
 */
function isPointInRectangle(point, rectangle) {
    return (point.x >= rectangle.x &&
        point.x <= rectangle.x + rectangle.width &&
        point.y >= rectangle.y &&
        point.y <= rectangle.y + rectangle.height);
}
/**
 * A point on canvas, also represents a vector
 */
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
/**
 * The matrix for geometric transformation use.
 */
class Matrix {
    constructor(a = 1, b = 0, c = 0, d = 1, tx = 0, ty = 0) {
        this.a = 1;
        this.b = 0;
        this.c = 0;
        this.d = 1;
        this.tx = 0;
        this.ty = 0;
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.tx = tx;
        this.ty = ty;
    }
    /**
     * Determines the current matrix based on the properties of the object displayed.
     */
    updateFromDisplayObject(x, y, scaleX, scaleY, rotation) {
        this.tx = x;
        this.ty = y;
        var skewX, skewY;
        skewX = skewY = rotation / 180 * Math.PI;
        ;
        var u = Math.cos(skewX);
        var v = Math.sin(skewX);
        this.a = Math.cos(skewY) * scaleX;
        this.b = Math.sin(skewY) * scaleX;
        this.c = -v * scaleY;
        this.d = u * scaleY;
    }
}
