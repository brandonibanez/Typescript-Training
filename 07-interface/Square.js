"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
class Square {
    constructor(_theX, _theY) {
        this._theX = _theX;
        this._theY = _theY;
    }
    get theY() {
        return this._theY;
    }
    set theY(value) {
        this._theY = value;
    }
    get theX() {
        return this._theX;
    }
    set theX(value) {
        this._theX = value;
    }
    displayValues() {
        console.log(`X: ${this._theX} Y: ${this._theY} `);
    }
    returnSum() {
        return this._theX + this._theY;
    }
}
exports.Square = Square;
