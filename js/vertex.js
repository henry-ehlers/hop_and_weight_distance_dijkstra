"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vertex = void 0;
class Vertex {
    constructor(id, adjacency) {
        this.ego = undefined;
        this.hop = undefined;
        this.weighted = undefined;
        this._ID = id;
    }
    ;
    setEgocentricDistances(ego, hop, weighted) {
        this.ego = ego;
        this.hop = hop;
        this.weighted = weighted;
    }
    ;
    get ID() {
        return this._ID;
    }
    ;
    get weightedDistance() {
        // todo write better logic to handle the undefined case 
        return (Number(this.weighted));
    }
    ;
    get hopDistance() {
        // todo write better logic to handle the undefined case 
        return (Number(this.hop));
    }
    ;
    get egocenter() {
        return (String(this.ego));
    }
    ;
}
exports.Vertex = Vertex;
;
