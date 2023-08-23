"use strict";
class Vertex {
    constructor(id, adjacency) {
        this.hopDist = Number.MAX_VALUE;
        this.weightDist = Number.MAX_VALUE;
        this._ID = id;
        this._ADJACENCY = [...new Set(adjacency)];
        this.parent = id; // technically empty, but unsure how to do so
    }
    ;
    get ID() {
        return this._ID;
    }
    ;
    get adjacency() {
        return this._ADJACENCY;
    }
    ;
    get hopDistance() {
        return this.hopDist;
    }
    ;
    get weightedDistance() {
        return this.weightDist;
    }
    ;
    get parentVertex() {
        return this.parent;
    }
    ;
}
;
