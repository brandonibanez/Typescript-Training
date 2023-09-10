export class Square implements AdvanceShape {

    public get theY(): number {
        return this._theY;
    }
    public set theY(value: number) {
        this._theY = value;
    }

    public get theX(): number {
        return this._theX;
    }
    public set theX(value: number) {
        this._theX = value;
    }
    
    constructor(private _theX: number, private _theY: number) {

    }

    public displayValues(): void {
        console.log(`X: ${this._theX} Y: ${this._theY} `);
    }

    public returnSum(): number {
        return this._theX + this._theY;
    }
}