export abstract class Shape{

    constructor(private _x:number, private _y:number){

    }

    public getInfo() : string{
        return `X=${this._x} Y=${this._y}`;
    }

    public abstract displayShapeType() : string;

}
