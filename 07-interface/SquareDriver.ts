import {Square} from "./Square";

class SquareDriver extends Square {
    constructor(private _theXs: number, private _theYs: number) {
        super(_theXs,_theYs);
    }
}

let test1 = new SquareDriver(5,10);

test1.displayValues();
console.log(test1.returnSum());
