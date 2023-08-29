"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistanceGraph = void 0;
const AdjacencyMap_1 = require("./AdjacencyMap");
const DistanceEdge_1 = require("./DistanceEdge");
const Dijkstra_1 = require("./Dijkstra");
class DistanceGraph {
    constructor(graph) {
        this.adjacency = new AdjacencyMap_1.AdjacencyMap(graph.Edges);
        this.distances = new Map();
        this.labeledEdges = new Map();
        this.graph = graph;
    }
    computeDijkstraDistances(ego) {
        const dijkstra = new Dijkstra_1.Djikstra(ego, this.graph.Nodes.map(n => n.ID));
        this.distances.set(ego, dijkstra.computeShortestDistances(this.adjacency));
    }
    getEgocentricDistances(ego) {
        return this.distances.has(ego) ? this.distances.get(ego) : [];
    }
    getAnnotatedEdges() {
        let annotatedEdges = [];
        this.graph.Edges.forEach(e => annotatedEdges.push(new DistanceEdge_1.DistanceEdge(e.source, e.target, e.weight, Number(this.adjacency.getEdgeWeight(e.source, e.target)))));
        return annotatedEdges;
    }
    get EdgeList() {
        return this.graph.Edges;
    }
}
exports.DistanceGraph = DistanceGraph;
