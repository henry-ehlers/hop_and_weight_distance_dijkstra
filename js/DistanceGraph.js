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
    getAnnotatedEdges(ego) {
        let annotatedEdges = [];
        this.graph.Edges.forEach(e => {
            const hop = this.getHopDistance(ego, e.source, e.target);
            const sourceIndex = this.getVertexIndex(ego, e.source);
            const targetIndex = this.getVertexIndex(ego, e.target);
            annotatedEdges.push(new DistanceEdge_1.DistanceEdge(e.source, e.target, sourceIndex, targetIndex, e.weight, ego, hop), new DistanceEdge_1.DistanceEdge(e.target, e.source, targetIndex, sourceIndex, e.weight, ego, hop));
        });
        return annotatedEdges;
    }
    getHopDistance(ego, source, target) {
        // TODO: clean this up. currently makes a lot of assumptions
        const sourceHop = this.distances.get(ego).filter(v => v.ID == source)[0].Hop;
        const targetHop = this.distances.get(ego).filter(v => v.ID == target)[0].Hop;
        return sourceHop == targetHop ? sourceHop : -1;
    }
    getVertexIndex(ego, vertex) {
        return this.distances.get(ego).filter(v => v.ID == vertex)[0].Index;
    }
    get EdgeList() {
        return this.graph.Edges;
    }
}
exports.DistanceGraph = DistanceGraph;
