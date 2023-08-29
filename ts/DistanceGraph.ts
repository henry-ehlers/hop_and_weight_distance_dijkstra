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

    public getAnnotatedEdges(ego: string): Array<DistanceEdge> {
        let annotatedEdges:Array<DistanceEdge> = [];
        this.graph.Edges.forEach(e => {
            const hop = this.getHopDistance(ego, e.source, e.target);
            annotatedEdges.push(
                new DistanceEdge( e.source, e.target, e.weight, hop),
                new DistanceEdge( e.target, e.source, e.weight, hop)
            );
        });
        return annotatedEdges;
    }

    private getHopDistance(ego: string, source: string, target: string): number {
        // TODO: clean this up. currently makes a lot of assumptions
        const sourceHop = this.distances.get(ego)!.filter(v => v.id == source)[0].hop;
        const targetHop = this.distances.get(ego)!.filter(v => v.id == target)[0].hop;
        return sourceHop == targetHop ? sourceHop : -1
    }

    public get EdgeList() {
        return this.graph.Edges
    }
}