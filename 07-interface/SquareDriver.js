"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Square_1 = require("./Square");
class SquareDriver extends Square_1.Square {
    constructor(_theXs, _theYs) {
        super(_theXs, _theYs);
        this._theXs = _theXs;
        this._theYs = _theYs;
    }
}
let test1 = new SquareDriver(5, 10);
test1.displayValues();
console.log(test1.returnSum());
