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
            if (e.source == "Thenardier" || e.target == "Thenardier") {
                console.log(e.source + " - " + e.target);
                console.log("hop: " + hop);
            }
            annotatedEdges.push(new DistanceEdge_1.DistanceEdge(e.source, e.target, e.weight, ego, hop), new DistanceEdge_1.DistanceEdge(e.target, e.source, e.weight, ego, hop));
        });
        return annotatedEdges;
    }
    getHopDistance(ego, source, target) {
        // TODO: clean this up. currently makes a lot of assumptions
        const sourceHop = this.distances.get(ego).filter(v => v.ID == source)[0].Hop;
        const targetHop = this.distances.get(ego).filter(v => v.ID == target)[0].Hop;
        if (ego == "Thenardier" || source == "Thenardier") {
            console.log(source + " - " + target);
            console.log("source hop: " + sourceHop);
            console.log("target hop: " + targetHop);
        }
        console.log("HERE");
        return sourceHop == targetHop ? sourceHop : -1;
    }
    get EdgeList() {
        return this.graph.Edges;
    }
}
exports.DistanceGraph = DistanceGraph;
