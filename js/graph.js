"use strict";
class Vertex {
    constructor(id, adjacency) {
        this.hopDist = Number.MAX_VALUE;
        this.weightDist = Number.MAX_VALUE;
        this._ID = id;
        this._ADJACENCY = adjacency;
    }
    get ID() {
        return this._ID;
    }
    get adjacency() {
        return this._ADJACENCY;
    }
}
;
// class Graph {
//     nodes: {}
// };
