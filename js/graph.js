"use strict";
class AdjacencyMap {
    constructor() {
        this.map = new Map();
    }
    ;
    addEdge(edge) {
        this.addVertexPair(edge.source, edge.target, edge.weight);
        this.addVertexPair(edge.target, edge.source, edge.weight);
    }
    ;
    addVertexPair(a, b, w) {
        if (!this.map.has(a)) {
            this.map.set(a, new Map());
        }
        ;
        this.map.get(a).set(b, w);
    }
    getVertexAdjacency(vertex) {
        return (this.map.has(vertex) ? [...this.map.get(vertex).keys()] : []);
    }
    getNodes() {
        return ([...this.map.keys()]);
    }
}
class Edge {
    constructor(source, target, weight) {
        this._SOURCE = source;
        this._TARGET = target;
        this._WEIGHT = weight;
    }
    ;
    get source() {
        return this._SOURCE;
    }
    ;
    get target() {
        return this._TARGET;
    }
    ;
    get weight() {
        return this._WEIGHT;
    }
}
;
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
class Graph {
    // private alters: Map< Number, Array<T> >;
    constructor() {
        this.vertices = new Map();
        this.edges = [];
        // Temporary Hardcoding of edge list because file and module loading is such a pain in the ass
        let edgeList = [
            { "source": "0", "target": "1", "weight": 1 },
            { "source": "0", "target": "5", "weight": 1 },
            { "source": "0", "target": "3", "weight": 1 },
            { "source": "1", "target": "2", "weight": 1 },
            { "source": "2", "target": "3", "weight": 1 },
            { "source": "3", "target": "4", "weight": 1 },
            { "source": "4", "target": "5", "weight": 1 }
        ];
        let adjacency = new AdjacencyMap();
        for (const e of edgeList) {
            const edge = new Edge(e.source, e.target, e.weight);
            adjacency.addEdge(edge);
        }
        console.log(adjacency);
        let nodeList = adjacency.getNodes();
        for (const n of nodeList) {
            console.log(n + " - " + adjacency.getVertexAdjacency(n));
            let vertex = new Vertex(n, adjacency.getVertexAdjacency(n));
            this.vertices.set(n, vertex);
        }
    }
    ;
    dijkstra(ego, maxHop = Number.MAX_VALUE) {
        // initialize helper variables
        // 
    }
}
;
let graph = new Graph();
