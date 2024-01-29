"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistanceEdge = void 0;
class DistanceEdge {
    constructor(source, target, weight, ego, hop) {
        this.source = source;
        this.target = target;
        this.weight = weight;
        this.ego = ego;
        this.hop = hop;
    }
}
exports.DistanceEdge = DistanceEdge;
