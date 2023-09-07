"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistanceNode = void 0;
class DistanceNode {
    constructor(id, index, ego, hop, weight, parent) {
        this.id = id;
        this.index = index;
        this.ego = ego;
        this.hop = hop;
        this.weighted = weight;
        this.parent = parent;
    }
    ;
    get Weighted() {
        return this.weighted;
    }
    ;
    get Hop() {
        return this.hop;
    }
    ;
    get ID() {
        return this.id;
    }
    ;
    get Ego() {
        return this.ego;
    }
    ;
    get Index() {
        return this.index;
    }
}
exports.DistanceNode = DistanceNode;
