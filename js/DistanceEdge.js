"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistanceEdge = void 0;
class DistanceEdge {
    constructor(source, target, weight, hop) {
        this._SOURCE = source;
        this._TARGET = target;
        this._WEIGHT = weight;
        this._HOP = hop;
    }
}
exports.DistanceEdge = DistanceEdge;
