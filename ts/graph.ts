class AdjacencyMap {

    private map: Map<string, Array<string>>;

    constructor () {
        this.map = new Map();
    };

    public addEdge(edge: Edge): void {
        this.addVertexPair(edge.source, edge.target);
        this.addVertexPair(edge.target, edge.source);
    };

    private addVertexPair(vertex_a: string, vertex_b: string): void {
        if (this.map.has(vertex_a)) {
            this.map.get(vertex_a)!.push(vertex_b);
        } else {
            this.map.set(vertex_a, [vertex_b]);
        };
    }

    public getVertexAdjacency(vertex: string): Array<string> {
        return(this.map.has(vertex) ? this.map.get(vertex)! : []);
    }
}

class Edge {

    private readonly _SOURCE: string;
    private readonly _TARGET: string;
    private readonly _WEIGHT: number;

    constructor (source: string, target: string, weight: number) {
        this._SOURCE = source;
        this._TARGET = target;
        this._WEIGHT = weight;
    };

    public get source() {
        return this._SOURCE;
    };

    public get target() {
        return this._TARGET;
    };

};

class Vertex { 

    private readonly _ID: string;
    private readonly _ADJACENCY: Array<string>;
    private parent: string;
    private hopDist: number = Number.MAX_VALUE;
    private weightDist: number = Number.MAX_VALUE;

    constructor(id: string, adjacency: Array<string>) {
        this._ID = id;
        this._ADJACENCY = [... new Set(adjacency)];
        this.parent = id; // technically empty, but unsure how to do so
    };

    public get ID() {
        return this._ID;
    };

    public get adjacency() {
        return this._ADJACENCY;
    };

    public get hopDistance() {
        return this.hopDist;
    };

    public get weightedDistance() {
        return this.weightDist;
    };

    public get parentVertex() {
        return this.parent;
    };

};

class Graph{

    private vertices: Map<string, Vertex> = new Map();
    private edges: Array<Edge> = [];
    // private alters: Map< Number, Array<T> >;

    constructor () {
        let edges = [
            {"source": "0", "target": "1", "weight": 1}, 
            {"source": "0", "target": "5", "weight": 1}, 
            {"source": "0", "target": "3", "weight": 1}, 
            {"source": "1", "target": "2", "weight": 1}, 
            {"source": "2", "target": "3", "weight": 1},
            {"source": "3", "target": "4", "weight": 1}, 
            {"source": "4", "target": "5", "weight": 1}
        ];
        let unfilteredNodes: Array<string> = []
        let adjacency: AdjacencyMap = new AdjacencyMap();
        for (const e of edges) {
            const edge: Edge = new Edge(e.source, e.target, e.weight);
            unfilteredNodes.push(edge.source, edge.target);
            adjacency.addEdge(edge);
            this.edges.push(edge);
        }
        console.log(this.edges);
        let nodeList = new Set(unfilteredNodes);
        console.log(nodeList);
        for (const n of nodeList) {
            console.log(n);
            let vertex: Vertex = new Vertex(n, adjacency.getVertexAdjacency(n));
            console.log(vertex);
            this.vertices.set(n, vertex);
        }
        console.log(this.vertices);
    
    };

};

let graph: Graph = new Graph();