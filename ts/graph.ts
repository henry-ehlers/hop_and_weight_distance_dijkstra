class AdjacencyMap {

    private map: Map<string, Map<string, number>>;

    constructor () {
        this.map = new Map();
    };

    public addEdge(edge: Edge): void {
        this.addVertexPair(edge.source, edge.target, edge.weight);
        this.addVertexPair(edge.target, edge.source, edge.weight);
    };

    private addVertexPair(a: string, b: string, w: number): void {
        if (!this.map.has(a)) {
            this.map.set(a, new Map());
        };
        this.map.get(a)!.set(b, w);
    }

    public getVertexAdjacency(vertex: string): Array<string> {
        return( this.map.has(vertex) ? [...this.map.get(vertex)!.keys()] : [] );
    }

    public getNodes(): Array<string> {
        return( [...this.map.keys()] );
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

    public get weight() {
        return this._WEIGHT;
    }
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

        // Temporary Hardcoding of edge list because file and module loading is such a pain in the ass
        let edgeList = [
            {"source": "0", "target": "1", "weight": 1}, 
            {"source": "0", "target": "5", "weight": 1}, 
            {"source": "0", "target": "3", "weight": 1}, 
            {"source": "1", "target": "2", "weight": 1}, 
            {"source": "2", "target": "3", "weight": 1},
            {"source": "3", "target": "4", "weight": 1}, 
            {"source": "4", "target": "5", "weight": 1}
        ];
        let adjacency: AdjacencyMap = new AdjacencyMap();
        for (const e of edgeList) {
            const edge: Edge = new Edge(e.source, e.target, e.weight);
            adjacency.addEdge(edge);
        }
        console.log(adjacency);

        let nodeList = adjacency.getNodes();
        for (const n of nodeList) {
            console.log(n + " - " + adjacency.getVertexAdjacency(n))
            let vertex: Vertex = new Vertex(n, adjacency.getVertexAdjacency(n));
            this.vertices.set(n, vertex);
        }
    
    };

    public dijkstra(ego: string, maxHop: number = Number.MAX_VALUE): void {
        
        // initialize helper variables

        // 
    }

};

let graph: Graph = new Graph();