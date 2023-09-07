"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistanceEdge = void 0;
class DistanceEdge {
    constructor(source, target, sourceIndex, targetIndex, weight, ego, hop) {
        this.source = source;
        this.target = target;
        this.sourceIndex = sourceIndex;
        this.targetIndex = targetIndex;
        this.weight = weight;
        this.ego = ego;
        this.hop = hop;
    }
}
exports.DistanceEdge = DistanceEdge;
