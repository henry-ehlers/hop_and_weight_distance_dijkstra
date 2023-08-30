"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistanceEdge = void 0;
class DistanceEdge {
    constructor(source, target, weight, hop) {
        this.source = source;
        this.target = target;
        this.weight = weight;
        this.hop = hop;
    }
}
exports.DistanceEdge = DistanceEdge;
