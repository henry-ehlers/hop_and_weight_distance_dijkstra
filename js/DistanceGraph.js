import { AdjacencyMap } from "./AdjacencyMap";
import { Djikstra } from "./Dijkstra";
export class DistanceGraph {
    constructor(graph) {
        this.adjacency = new AdjacencyMap(graph.Edges);
        this.distances = new Map();
        this.graph = graph;
    }
    getDijkstraDistances(ego) {
        const dijkstra = new Djikstra(ego, this.graph.Nodes.map(n => n.ID));
        this.distances.set(ego, dijkstra.computeShortestDistances(this.adjacency));
    }
    getDistances(ego) {
        return this.distances.has(ego) ? this.distances.get(ego) : [];
    }
    get EdgeList() {
        return this.graph.Edges;
    }
}
