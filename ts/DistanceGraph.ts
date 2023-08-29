import { AdjacencyMap } from "./AdjacencyMap";
import { DistanceNode } from "./DistanceNode";
import { DistanceEdge } from "./DistanceEdge";
import { Djikstra } from "./Dijkstra";
import { Graph } from "./Graph";

export class DistanceGraph {

    private distances: Map<string, Array<DistanceNode>>;
    private labeledEdges: Map<string, Array<DistanceEdge>>;
    private readonly adjacency: AdjacencyMap;
    private readonly graph: Graph;

    public constructor(graph: Graph) {
       this.adjacency = new AdjacencyMap(graph.Edges);
       this.distances = new Map();
       this.labeledEdges = new Map();
       this.graph = graph;
    }

    public computeDijkstraDistances(ego: string): void {
        const dijkstra = new Djikstra(ego, this.graph.Nodes.map(n => n.ID));
        this.distances.set(ego, dijkstra.computeShortestDistances(this.adjacency));
    }

    public getEgocentricDistances(ego: string): Array<DistanceNode> {
        return this.distances.has(ego) ? this.distances.get(ego)! : [];
    }

    public getAnnotatedEdges(): Array<DistanceEdge> {
        let annotatedEdges:Array<DistanceEdge> = [];
        this.graph.Edges.forEach(e => annotatedEdges.push(
            new DistanceEdge( e.source, e.target, e.weight, Number(this.adjacency.getEdgeWeight(e.source, e.target)) )
        ))
        return annotatedEdges;
    }

    public get EdgeList() {
        return this.graph.Edges
    }
}