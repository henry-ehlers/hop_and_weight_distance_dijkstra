import { Edge } from "./Edge";

export class AdjacencyMap {

    private map = new Map<string, Map<string, number>>();;

    constructor (edgeList: Array<Edge>) {
        edgeList.forEach(e => this.addEdge(e));    
    };

    private addEdge(edge: Edge): void {
        this.addVertexPair(edge.source, edge.target, edge.weight);
        this.addVertexPair(edge.target, edge.source, edge.weight);
    };

    private addVertexPair(a: string, b: string, w: number): void {
        if (!this.map.has(a)) {
            this.map.set(a, new Map());
        };
        if (this.map.get(a)!.has(b)) {
            this.map.get(a)!.set(b, this.map.get(a)!.get(b)! + w);
        } else {
            this.map.get(a)!.set(b, w);
        }
        
    }

    public getVertexAdjacency(vertex: string): Array<string> {
        return( this.map.has(vertex) ? [...this.map.get(vertex)!.keys()] : [] );
    }

    public getVertexAdjacencyWeights(vertex: string): Map<string, number> {
        return( this.map.has(vertex) ? this.map.get(vertex)! : new Map() );
    }

    public getNodes(): Array<string> {
        return( [...this.map.keys()] );
    }

    public getEdgeWeight(source: string, target: string): number | undefined {
        return this.map.get(source)?.get(target);
    }
}