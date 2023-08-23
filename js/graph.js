"use strict";
class AdjacencyMap {
    constructor() {
        this.map = new Map();
    }
    ;
    addEdge(edge) {
        this.addVertexPair(edge.source, edge.target);
        this.addVertexPair(edge.target, edge.source);
    }
    ;
    addVertexPair(vertex_a, vertex_b) {
        if (this.map.has(vertex_a)) {
            this.map.get(vertex_a).push(vertex_b);
        }
        else {
            this.map.set(vertex_a, [vertex_b]);
        }
        ;
    }
    getVertexAdjacency(vertex) {
        return (this.map.has(vertex) ? this.map.get(vertex) : []);
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
        let edges = [
            { "source": "0", "target": "1", "weight": 1 },
            { "source": "0", "target": "5", "weight": 1 },
            { "source": "0", "target": "3", "weight": 1 },
            { "source": "1", "target": "2", "weight": 1 },
            { "source": "2", "target": "3", "weight": 1 },
            { "source": "3", "target": "4", "weight": 1 },
            { "source": "4", "target": "5", "weight": 1 }
        ];
        let unfilteredNodes = [];
        let adjacency = new AdjacencyMap();
        for (const e of edges) {
            const edge = new Edge(e.source, e.target, e.weight);
            unfilteredNodes.push(edge.source, edge.target);
            adjacency.addEdge(edge);
            this.edges.push(edge);
        }
        console.log(this.edges);
        let nodeList = new Set(unfilteredNodes);
        console.log(nodeList);
        for (const n of nodeList) {
            console.log(n);
            let vertex = new Vertex(n, adjacency.getVertexAdjacency(n));
            console.log(vertex);
            this.vertices.set(n, vertex);
        }
        console.log(this.vertices);
    }
    ;
}
;
let graph = new Graph();
