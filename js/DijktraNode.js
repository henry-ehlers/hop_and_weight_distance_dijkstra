"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DijkstraNode = void 0;
class DijkstraNode {
    constructor(id, ego, hop, weight) {
        this._ID = id;
        this._EGO = ego;
        this._HOP = hop;
        this._WEIGHTED = weight;
    }
    ;
}
exports.DijkstraNode = DijkstraNode;
