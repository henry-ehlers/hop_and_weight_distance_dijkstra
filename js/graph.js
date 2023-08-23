"use strict";
class Vertex {
    constructor(id, adjacency) {
        this.hopDist = Number.MAX_VALUE;
        this.weightDist = Number.MAX_VALUE;
        this._ID = id;
        this._ADJACENCY = [...new Set(adjacency)];
        this.parent = id; // technically empty, but unsure how to do so
    }
    get ID() {
        return this._ID;
    }
    get adjacency() {
        return this._ADJACENCY;
    }
}
;
class Edge {
    constructor(source, target, weight) {
        this._SOURCE = source;
        this._TARGET = target;
        this._WEIGHT = weight;
    }
}
// class Graph {
//     nodes: {}
// };
