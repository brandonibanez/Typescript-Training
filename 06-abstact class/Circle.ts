import { Shape } from "./Shape";

class Circle extends Shape{

    public displayShapeType(): string {
        return "Shape: Circle\n";
    }

    constructor(private theX: number,private theY: number, private _radius: number = 0) {
        super(theX,theY);
    }

    public getInfo() : string{
        return this._radius == 0 
        ? `${super.getInfo()} Radius=${this.calculateRadius()}` 
        : `${super.getInfo()} Radius=${this._radius}`;
    }

    public calculateRadius() : number{
        return this._radius == 0 
        ? this.theX + this.theY 
        : this._radius;
    }

}

let test1 = new Circle(3,5);
let test2 = new Circle(3,5,20);
let shapes : Shape[] = [];

shapes.push(test1);
shapes.push(test2);

console.log(test1.getInfo());
console.log(test1.calculateRadius());

console.log(test2.getInfo());
console.log(test2.calculateRadius());

console.log();

for(let obj of shapes) {
    console.log(obj.displayShapeType() + obj.getInfo());
}
