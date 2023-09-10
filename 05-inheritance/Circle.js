"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
class Circle extends Shape_1.Shape {
    constructor(theX, theY, _radius = 0) {
        super(theX, theY);
        this.theX = theX;
        this.theY = theY;
        this._radius = _radius;
    }
    getInfo() {
        return this._radius == 0
            ? `${super.getInfo()} Radius=${this.calculateRadius()}`
            : `${super.getInfo()} Radius=${this._radius}`;
    }
    calculateRadius() {
        return this._radius == 0
            ? this.theX + this.theY
            : this._radius;
    }
}
let test1 = new Circle(3, 5);
let test2 = new Circle(3, 5, 20);
let shapes = [];
shapes.push(test1);
shapes.push(test2);
console.log(test1.getInfo());
console.log(test1.calculateRadius());
console.log(test2.getInfo());
console.log(test2.calculateRadius());
console.log();
for (let obj of shapes) {
    console.log(obj.getInfo());
}
