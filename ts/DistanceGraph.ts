import { AdjacencyMap } from "./AdjacencyMap";
import { DistanceNode } from "./DistanceNode";
import { Djikstra } from "./Dijkstra";
import { Graph } from "./Graph";

export class DistanceGraph {

    private distances: Map<string, Array<DistanceNode>>;
    private readonly adjacency: AdjacencyMap;
    private readonly graph: Graph;

    public constructor(graph: Graph) {
       this.adjacency = new AdjacencyMap(graph.Edges);
       this.distances = new Map();
       this.graph = graph;
    }

    public getDijkstraDistances(ego: string): void {
        const dijkstra = new Djikstra(ego, this.graph.Nodes.map(n => n.ID));
        this.distances.set(ego, dijkstra.computeShortestDistances(this.adjacency));
    }

    public getDistances(ego: string): Array<DistanceNode> {
        return this.distances.has(ego) ? this.distances.get(ego)! : [];
    }
}