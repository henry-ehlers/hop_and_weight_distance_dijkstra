import { AdjacencyMap } from "./AdjacencyMap";
import { DijkstraNode } from "./DijkstraNode";

export class Djikstra {

    private ego: string;
    private weighted = new Map<string, number>();
    private hop = new Map<string, number>();
    private parents = new Map<string, string | undefined>;
    private unvisited: Set<string>;

    constructor(ego: string, nodes: Set<string>){
        nodes.forEach(d => d == ego ? this.hop.set(d, 0) : this.hop.set(d, Number.MAX_SAFE_INTEGER));
        nodes.forEach(d => d == ego ? this.weighted.set(d, 0) : this.weighted.set(d, Number.MAX_VALUE));
        nodes.forEach(d => d == ego ? this.parents.set(d, d) : this.parents.set(d, undefined));
        this.unvisited = new Set(this.hop.keys());
        this.ego = ego;
    };

    private visitVertex(vertex: string) {
        this.unvisited.delete(vertex);
    };

    public computeShortestDistances(ego: string, adjacency: AdjacencyMap): Array<DijkstraNode> {
        
        // Calculcate minimum distances to ego using dijkstra
        let current: string | undefined = this.returnClosestVertex();
        while (current) {
            const neighbors = adjacency.getVertexAdjacencyWeights(current);
            for ( const [neighbor, weight] of neighbors.entries() ) {
                this.addDistance(current, neighbor, weight);
            };
            current = this.returnClosestVertex();
        };
        return ( [...this.hop.keys()].map(n => new DijkstraNode(n, this.ego, this.hop.get(n)!, this.weighted.get(n)!)) );

    };

    public returnClosestVertex(): string | undefined {
        // TODO: allow for ties and break them with shortest weighted distance
        let closest: string | undefined;
        if (this.unvisited.size > 0) {
            closest = Array.from(this.unvisited).reduce((curr, min) => this.hop.get(min)! < this.hop.get(curr)! ? min : curr);
            this.visitVertex(closest);
        } else {
            closest = undefined;
        }
        return (closest);
    };

    public addDistance(current: string, neighbor: string, weight: number): void {
        const newWeighted = this.weighted.get(current)! + weight;
        const newHop = this.hop.get(current)! + 1;

        if ( (newHop > this.hop.get(neighbor)!) ) {
            return;
        } else if ( (newHop < this.hop.get(neighbor)!) ) {
            this.hop.set(neighbor, newHop);
            this.weighted.set(neighbor, newWeighted);
            this.parents.set(neighbor, current);
        } else if ( newWeighted < this.weighted.get(current)! ) {
            this.hop.set(neighbor, newHop);
            this.weighted.set(neighbor, newWeighted);
            this.parents.set(neighbor, current);
        }
    };

    public get unvistedVertices(): Set<string> {
        return (this.unvisited);
    };

    public get hopDistances(): Map<string, number> {
        return (this.hop);
    };

    public get weightedDistances(): Map<string, number> {
        return (this.weighted);
    };

    public returnVertexHopDistances(vertex: string): number {
        return (this.hop.get(vertex)!);
    };

    public returnVertexWeightedDistances(vertex: string): number {
        return (this.weighted.get(vertex)!);
    }

}