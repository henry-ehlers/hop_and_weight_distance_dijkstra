import { AdjacencyMap } from "./AdjacencyMap";
import { DijkstraNode } from "./DijktraNode";
import { Graph } from "./graph";

export class DijkstraGraph {

    private distances: Map<string, Array<DijkstraNode>>;
    private readonly adjacency: AdjacencyMap;
    private readonly graph: Graph;

    public constructor(graph: Graph) {
       this.adjacency = new AdjacencyMap(graph.Edges);
       this.distances = new Map();
       this.graph = graph;
    }

    public getDijkstraDistances(ego: string): void {
        // run DIJKSTRA for a specific ego
        // store produced list of dijkstra nodes in dictionary for egos
    }
}