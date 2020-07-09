/**数学相关类 */
/**
 * 数学工具
 */
class MathTool {
    constructor() {
        if (new.target === MathTool) {
            throw new Error("该类无法被实例化！");
        }
    }
    /**
     * 角度转弧度
     * @param degreeAngle 角度制下的角度
     * @returns 弧度制下的角度
     */
    static degreetoRadian(degreeAngle) {
        return (degreeAngle / 180) * Math.PI;
    }
    /**
     * 弧度转角度
     * @param radianAngle 弧度制下的角度
     * @returns 角度制下的角度
     */
    static radiantoDegree(radianAngle) {
        return (radianAngle / Math.PI) * 180;
    }
    /**
     * 点是否在圆内
     * @param position 点的位置
     * @param center 圆心位置
     * @param radius 圆半径
     */
    static isPointInRound(position, center, radius) {
        return Vector2.distance(position, center) <= radius;
    }
    /**
     * 点是否在矩形内
     * @param point 点的位置
     * @param offset 偏移
     * @param width 矩形宽
     * @param height 矩形高
     */
    static isPointInRect(point, offset, width, height, points) {
        if (points) {
            const width = MathTool.pointToLineLength(points[0], points[1], points[2]);
            const height = MathTool.pointToLineLength(points[0], points[2], points[3]);
            const total = MathTool.pointToLineLength(point, points[0], points[1]) + MathTool.pointToLineLength(point, points[1], points[2]) + MathTool.pointToLineLength(point, points[2], points[3]) + MathTool.pointToLineLength(point, points[0], points[3]);
            return total === width + height;
        }
        else {
            return point.x > offset.x && (point.x < offset.x + width) && point.y > offset.y && (point.y < offset.y + height);
        }
    }
    /**
     * 点是否在三角形内
     * @param point 点坐标
     * @param A 三角形A点
     * @param B 三角形B点
     * @param C 三角形C点
     */
    static isPointInTriangle(point, A, B, C) {
        const triangleArea = Math.abs(B.sub(A).cross(C.sub(A))); //三角形面积为(AB叉乘AC)/2[省去除法]
        const ABPArea = Math.abs(point.sub(A).cross(B.sub(A))); //ABP面积
        const BCPArea = Math.abs(point.sub(B).cross(C.sub(B))); //BCP面积
        const ACPArea = Math.abs(point.sub(A).cross(C.sub(A))); //ACP面积
        return (triangleArea === (ABPArea + BCPArea + ACPArea));
    }
    /**
     * 点到直线距离
     * @param point 点的位置
     * @param linePoint1 直线上的点1
     * @param linePoint2 直线上的点2
     */
    static pointToLineLength(point, linePoint1, linePoint2) {
        if (linePoint1 === linePoint2) {
            console.error("构成线段的两点不能相同！");
            return 0;
        }
        const A = linePoint2.y - linePoint1.y;
        const B = linePoint1.x - linePoint2.x;
        const C = (linePoint2.x * linePoint1.y) - (linePoint1.x * linePoint2.y);
        return Math.abs((A * point.x + B * point.y + C) / (Math.sqrt(A * A + B * B)));
    }
    /**
     * 线段是否穿过圆
     * @param start 线段起点
     * @param end 线段终点
     * @param center 圆心位置
     * @param radius 圆半径
     * @returns 线段是否穿过圆
     */
    static isSegmentThroughRound(start, end, center, radius) {
        const centerToLineDistance = MathTool.pointToLineLength(center, start, end);
        if (centerToLineDistance <= radius) //直线穿过圆
         {
            const halfLength = Vector2.distance(start, end) / 2; //线段一半长
            const halfPosition = start.add(end).mul(0.5); //线段终点
            const distance = Vector2.distance(center, halfPosition); //圆心到线段中点距离
            return (distance - radius) <= halfLength;
        }
        return false;
    }
    /**
     * 获取圆上一点的位置
     * @param center 圆心位置
     * @param radius 半径
     * @param angle 角度制下的角度
     * @returns 位置
     */
    static getPointOnRound(center, radius, angle) {
        angle = -MathTool.degreetoRadian(angle + 180);
        const x = Math.sin(angle) * radius + center.x;
        const y = Math.cos(angle) * radius + center.y;
        return new Vector2(x, y);
    }
    /**
     * 两个圆是否相交或包含
     * @param center1 圆心1
     * @param center2 圆心2
     * @param radius1 半径1
     * @param radius2 半径2
     */
    static isRoundsIntersectOrInclude(center1, center2, radius1, radius2) {
        return (Vector2.distance(center1, center2) <= radius1 + radius2);
    }
    /**
     * 圆是否与多边形相交
     * @param center 圆心
     * @param radius 半径
     * @param points 多边形点坐标
     */
    static isRoundIntersectWithPolygon(center, radius, points) {
        for (let i = 0; i < points.length; i++) {
            if (MathTool.isSegmentThroughRound(points[i], points[(i === points.length - 1) ? 0 : i + 1], center, radius)) {
                return true;
            }
        }
        return false;
    }
    /**
     * 点是否在多边形内
     * @param center 圆心
     * @param radius 半径
     * @param points 多边形点坐标
     */
    static isPointInPolygon(center, radius, points) {
        if (points.length === 3) //三角形
         {
            return MathTool.isPointInTriangle(center, points[0], points[1], points[2]);
        }
        if (points.length === 4) //矩形
         {
            return MathTool.isPointInRect(center, null, null, null, points);
        }
    }
}
/**
 * 缓动类型
 */
var EaseType;
(function (EaseType) {
    /** 线性 */
    EaseType[EaseType["Linear"] = 0] = "Linear";
    /** 缓入 */
    EaseType[EaseType["EaseIn"] = 1] = "EaseIn";
    /** 缓出 */
    EaseType[EaseType["EaseOut"] = 2] = "EaseOut";
    /** 缓入缓出 */
    EaseType[EaseType["EaseInOut"] = 3] = "EaseInOut";
})(EaseType || (EaseType = {}));
/**
 * 缓动函数
 */
class EasingFunction {
    /**
     * 设置缓动函数
     * @param name 名字，用于查找
     * @param start 起点值
     * @param end 终点值
     * @param easeType 缓动类型
     * @param isLoop 是否循环(默认不循环)
     */
    static setEasingFunction(name, start, end, easeType, isLoop = false) {
        this.easingDatas.push({ name, start, end, easeType, isLoop });
    }
    /**
     * 获取缓动函数上的点值
     * @param name 函数名
     * @param time 时间(不循环会钳制在0-1之间)
     * @returns 输入时刻的函数值
     */
    static getValue(name, time) {
        for (const data of this.easingDatas) {
            if (data.name === name) {
                if (!data.isLoop) {
                    time = (time < 0) ? 0 : ((time > 1) ? 1 : time);
                }
                else {
                    const float = time % 1; //取小数部分
                    const int = time - float; //取整数部分
                    time = (int % 2 === 0) ? float : (1 - float);
                }
                switch (data.easeType) {
                    case EaseType.Linear:
                        return (data.end - data.start) * time + data.start;
                    case EaseType.EaseIn:
                        return (data.end - data.start) * Math.pow(time, 3) + data.start;
                    case EaseType.EaseOut:
                        return data.end - Math.pow((1 - time), 3) * (data.end - data.start);
                    case EaseType.EaseInOut:
                        if (time <= 0.5) {
                            return (data.end - data.start) * Math.pow(time, 3) * 4 + data.start;
                        }
                        return data.end - Math.pow((1 - time), 3) * 4 * (data.end - data.start);
                }
            }
        }
        console.warn("函数" + name + "不存在！");
    }
}
/**
 * 缓动数据数组
 */
EasingFunction.easingDatas = [];
/**
 * 随机
 */
class Random {
    constructor() {
        if (new.target === Random) {
            throw new Error("该类无法被实例化！");
        }
    }
    /**
     * 生成最小值min(包含)和最大值max(不包含)之间的随机数
     * @param min 最小值
     * @param max 最大值
     * @param isInteger 是否为整数(默认是)
     */
    static generateNumber(min, max, isInteger = true) {
        const result = Math.random() * (max - min) + min;
        return isInteger ? Math.floor(result) : result;
    }
}
/**
 * 二维向量
 */
class Vector2 {
    /**
     * @param x 横坐标
     * @param y 纵坐标
     */
    constructor(x, y) {
        /**
         * 横坐标
         */
        this.x = 0;
        /**
         * 纵坐标
         */
        this.y = 0;
        this.x = x;
        this.y = y;
    }
    /**
     * @type 零向量
     * @readonly
     */
    static get zero() {
        return new Vector2(0, 0);
    }
    /**
     * @type 向量(1,1)
     * @readonly
     */
    static get one() {
        return new Vector2(1, 1);
    }
    /**
     * 向量长度
     * @readonly
     */
    get magnitude() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
    /**
     * 加
     * @param addend 加数
     * @returns 运算结果
     */
    add(addend) {
        return new Vector2(this.x + addend.x, this.y + addend.y);
    }
    /**
     * 减
     * @param reduction 减数
     * @returns 运算结果
     */
    sub(reduction) {
        return new Vector2(this.x - reduction.x, this.y - reduction.y);
    }
    /**
     * 乘(数乘或点乘)
     * @param multiplier 乘数
     * @returns 运算结果
     */
    mul(multiplier) {
        if (multiplier instanceof Vector2) //向量点乘
         {
            return (this.x * multiplier.x) + (this.y * multiplier.y);
        }
        return new Vector2(this.x * multiplier, this.y * multiplier); //数乘
    }
    /**
     * 叉乘
     * @param otherVector 另一个向量
     */
    cross(otherVector) {
        return this.x * otherVector.y - otherVector.x * this.y;
    }
    /**
     * 标准化
     */
    normalize() {
        if (this.magnitude) {
            return this.mul(1 / this.magnitude);
        }
        else {
            console.warn("零向量不能被标准化！");
            return this;
        }
    }
    /**
     * 两个点之间的距离
     * @param point1 点1
     * @param point2 点2
     * @returns 距离
     */
    static distance(point1, point2) {
        return Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
    }
    /**
     * 两个向量之间的夹角(小于180°)
     * @param vector1 向量1
     * @param vector2 向量2
     * @returns 角度制下的夹角度数
     */
    static angle(vector1, vector2) {
        if ((vector1.x === 0 && vector1.y === 0) || (vector2.x === 0 && vector2.y === 0)) {
            console.warn("其中一个向量为零向量，无法求得夹角");
            return 0;
        }
        const cosTheta = (vector1.mul(vector2) / (vector1.magnitude * vector2.magnitude));
        return MathTool.radiantoDegree(Math.acos(cosTheta));
    }
}
/**
 * 矩阵
 */
class CustomizedMatrix {
    /**
     * 构造的矩阵形式：
     *| a  b  dx |
     *| c  d  dy |
     *| 0  0  1  |
     */
    constructor(a = 1, b = 0, dx = 0, c = 0, d = 1, dy = 0) {
        this.a = 1;
        this.b = 0;
        this.dx = 0;
        this.c = 0;
        this.d = 1;
        this.dy = 0;
        this.a = a;
        this.b = b;
        this.dx = dx;
        this.c = c;
        this.d = d;
        this.dy = dy;
    }
    /**
     * 打印矩阵
     */
    print() {
        console.log(this.a + ", " + this.b + ", " + this.dx);
        console.log(this.c + ", " + this.d + ", " + this.dy);
        console.log("0, 0, 1");
    }
    /**
     * 平移矩阵
     * @param translation 平移方向及距离
     * @returns 平移矩阵
     */
    static translateMatrix(translation) {
        return new CustomizedMatrix(1, 0, translation.x, 0, 1, translation.y);
    }
    /**
     * 旋转矩阵
     * @param rotation 角度制下的旋转角度
     */
    static rotateMatrix(rotation) {
        const angle = MathTool.degreetoRadian(rotation);
        return new CustomizedMatrix(Math.cos(angle), -Math.sin(angle), 0, Math.sin(angle), Math.cos(angle), 0);
    }
    /**
     * 缩放矩阵
     * @param deltaScale 缩放增量
     */
    static scaleMatrix(deltaScale) {
        return new CustomizedMatrix(deltaScale.x, 0, 0, 0, deltaScale.y, 0);
    }
    /**
     * 设置为变换矩阵
     * @param deltaPosition 位置增量
     * @param rotation 旋转角度
     * @param deltaScale 缩放增量
     * @returns 变换矩阵
     */
    setAsTransformMatrix(deltaPosition = Vector2.zero, rotation = 0, deltaScale = Vector2.one) {
        this.dx = deltaPosition.x;
        this.dy = deltaPosition.y;
        const angle = MathTool.degreetoRadian(rotation);
        this.a = Math.cos(angle) * deltaScale.x;
        this.b = -Math.sin(angle) * deltaScale.y;
        this.c = Math.sin(angle) * deltaScale.x;
        this.d = Math.cos(angle) * deltaScale.y;
        return this;
    }
    /**
     * 乘
     * @param multiplier 乘数(向量/矩阵)
     * @returns 运算结果
     */
    mul(multiplier) {
        if (multiplier instanceof Vector2) //如果是矩阵与向量相乘
         {
            const x = this.a * multiplier.x + this.b * multiplier.y + this.dx;
            const y = this.c * multiplier.x + this.d * multiplier.y + this.dy;
            return new Vector2(x, y);
        }
        else if (multiplier instanceof CustomizedMatrix) //如果是矩阵与矩阵相乘
         {
            const a = this.a * multiplier.a + this.b * multiplier.c;
            const b = this.a * multiplier.b + this.b * multiplier.d;
            const dx = this.a * multiplier.dx + this.b * multiplier.dy + this.dx;
            const c = this.c * multiplier.a + this.d * multiplier.c;
            const d = this.c * multiplier.b + this.d * multiplier.d;
            const dy = this.c * multiplier.dx + this.d * multiplier.dy + this.dy;
            return new CustomizedMatrix(a, b, dx, c, d, dy);
        }
        throw new Error("乘数错误！");
    }
    /**
     * 求逆
     * @returns 运算结果
     */
    invert() {
        const determinant = this.a * this.d - this.b * this.c;
        if (determinant === 0) //行列式等于0
         {
            console.warn("该矩阵无法求逆！");
            return this;
        }
        const a = this.d / determinant;
        const b = -this.b / determinant;
        const dx = (this.b * this.dy - this.d * this.dx) / determinant;
        const c = -this.c / determinant;
        const d = this.a / determinant;
        const dy = (this.c * this.dx - this.a * this.dy) / determinant;
        return new CustomizedMatrix(a, b, dx, c, d, dy);
    }
}
