"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistantNode = void 0;
class DistantNode {
    constructor(id, ego, hop, weight) {
        this._ID = id;
        this._EGO = ego;
        this._HOP = hop;
        this._WEIGHTED = weight;
    }
    ;
}
exports.DistantNode = DistantNode;
