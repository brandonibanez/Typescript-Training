"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
class Shape {
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    getInfo() {
        return `X=${this._x} Y=${this._y}`;
    }
}
exports.Shape = Shape;
