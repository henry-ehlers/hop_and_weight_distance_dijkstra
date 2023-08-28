"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistanceGraph = void 0;
const AdjacencyMap_1 = require("./AdjacencyMap");
const Dijkstra_1 = require("./Dijkstra");
class DistanceGraph {
    constructor(graph) {
        this.adjacency = new AdjacencyMap_1.AdjacencyMap(graph.Edges);
        this.distances = new Map();
        this.graph = graph;
    }
    getDijkstraDistances(ego) {
        const dijkstra = new Dijkstra_1.Djikstra(ego, this.graph.Nodes.map(n => n.ID));
        this.distances.set(ego, dijkstra.computeShortestDistances(this.adjacency));
    }
    getDistances(ego) {
        return this.distances.has(ego) ? this.distances.get(ego) : [];
    }
    get EdgeList() {
        return this.graph.Edges;
    }
}
exports.DistanceGraph = DistanceGraph;
