"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vertex_1 = require("./vertex");
const edge_1 = require("./edge");
class DijkstraDistances {
    constructor(source, nodes) {
        this.weighted = new Map();
        this.hop = new Map();
        this.parents = new Map;
        nodes.forEach(d => d == source ? this.hop.set(d, 0) : this.hop.set(d, Number.MAX_SAFE_INTEGER));
        nodes.forEach(d => d == source ? this.weighted.set(d, 0) : this.weighted.set(d, Number.MAX_VALUE));
        nodes.forEach(d => d == source ? this.parents.set(d, d) : this.parents.set(d, undefined));
        this.unvisited = new Set(this.hop.keys());
    }
    ;
    visitVertex(vertex) {
        this.unvisited.delete(vertex);
    }
    ;
    returnClosestVertex() {
        // TODO: allow for ties and break them with shortest weighted distance
        let closest;
        if (this.unvisited.size > 0) {
            closest = Array.from(this.unvisited).reduce((curr, min) => this.hop.get(min) < this.hop.get(curr) ? min : curr);
            this.visitVertex(closest);
        }
        else {
            closest = undefined;
        }
        return (closest);
    }
    ;
    addDistance(current, neighbor, weight) {
        const newWeighted = this.weighted.get(current) + weight;
        const newHop = this.hop.get(current) + 1;
        if ((newHop > this.hop.get(neighbor))) {
            return;
        }
        else if ((newHop < this.hop.get(neighbor))) {
            this.hop.set(neighbor, newHop);
            this.weighted.set(neighbor, newWeighted);
            this.parents.set(neighbor, current);
        }
        else if (newWeighted < this.weighted.get(current)) {
            this.hop.set(neighbor, newHop);
            this.weighted.set(neighbor, newWeighted);
            this.parents.set(neighbor, current);
        }
    }
    ;
    get unvistedVertices() {
        return (this.unvisited);
    }
    ;
    get hopDistances() {
        return (this.hop);
    }
    ;
    get weightedDistances() {
        return (this.weighted);
    }
    ;
    returnVertexHopDistances(vertex) {
        return (this.hop.get(vertex));
    }
    ;
    returnVertexWeightedDistances(vertex) {
        return (this.weighted.get(vertex));
    }
}
class AdjacencyMap {
    ;
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
    getVertexAdjacencyWeights(vertex) {
        return (this.map.has(vertex) ? this.map.get(vertex) : new Map());
    }
    getNodes() {
        return ([...this.map.keys()]);
    }
}
class Graph {
    constructor() {
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
        // Hardcode egocenter
        this.ego = "0";
        // Create Adjacency Map, i.e. symmetrical adjacency matrix in nested hashmap form 
        this.adjacency = new AdjacencyMap();
        for (const e of edgeList) {
            const edge = new edge_1.Edge(e.source, e.target, e.weight);
            this.adjacency.addEdge(edge);
        }
        // Create NodeMap, i.e. a hasmap of vertex objects to contain dijkstra-data
        this.vertices = new Map();
        for (const n of this.adjacency.getNodes()) {
            let vertex = new vertex_1.Vertex(n, this.adjacency.getVertexAdjacency(n));
            this.vertices.set(n, vertex);
        }
        // Initialize distances
        this.distances = new DijkstraDistances(this.ego, new Set(this.vertices.keys()));
    }
    ;
    dijkstra() {
        // Calculcate minimum distances to ego using dijkstra
        let current = this.distances.returnClosestVertex();
        while (current) {
            const neighbors = this.adjacency.getVertexAdjacencyWeights(current);
            for (const [neighbor, weight] of neighbors.entries()) {
                this.distances.addDistance(current, neighbor, weight);
            }
            ;
            current = this.distances.returnClosestVertex();
        }
        ;
        // Save Hop and Weighted Distances to Ego in Vertices
        for (const [id, vertex] of this.vertices.entries()) {
            const hop = this.distances.returnVertexHopDistances(id);
            const weighted = this.distances.returnVertexWeightedDistances(id);
            vertex.setEgocentricDistances(this.ego, hop, weighted);
        }
        ;
    }
    ;
    get egocenter() {
        return this.ego;
    }
}
;
let graph = new Graph();
graph.dijkstra();
