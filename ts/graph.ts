class DijkstraDistances {

    private weighted = new Map<string, number>();
    private hop = new Map<string, number>();
    private parents = new Map<string, string | undefined>;
    private unvisited: Set<string>;

    constructor(source: string, nodes: Set<string>){
        nodes.forEach(d => d == source ? this.hop.set(d, 0) : this.hop.set(d, Number.MAX_SAFE_INTEGER));
        nodes.forEach(d => d == source ? this.weighted.set(d, 0) : this.weighted.set(d, Number.MAX_VALUE));
        nodes.forEach(d => d == source ? this.parents.set(d, d) : this.parents.set(d, undefined));
        this.unvisited = new Set(this.hop.keys());
    };

    private visitVertex(vertex: string) {
        this.unvisited.delete(vertex);
        console.log(this.unvisited)
    };

    public returnClosestVertex(): string | undefined {
        // TODO: allow for ties and break them with shortest weighted distance
        if (this.unvisited.size > 0) {
            const closest = Array.from(this.unvisited).reduce((key, v) => this.hop.get(v)! < this.hop.get(key)! ? v : key);
            this.visitVertex(closest);
            return (closest);
        }
        return (undefined);
        
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

    public get unvistedVertices() {
        return (this.unvisited);
    };

    public get hopDistances() {
        return (this.hop);
    }

    public get weightedDistances() {
        return (this.weighted);
    }
}

class AdjacencyMap {

    private map = new Map<string, Map<string, number>>();;

    constructor () {};

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

    public getVertexAdjacencyWights(vertex: string): Map<string, number> {
        return( this.map.has(vertex) ? this.map.get(vertex)! : new Map() );
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

    constructor(id: string, adjacency: Array<string>) {
        this._ID = id;
    };

    public get ID() {
        return this._ID;
    };

};

class Graph{

    private ego: string;
    private adjacency: AdjacencyMap;
    private vertices: Map<string, Vertex>;
    private distances: DijkstraDistances;
    private parents: Map<string, string> = new Map();

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

        //
        this.ego = "0";

        // Create Adjacency Map, i.e. symmetrical adjacency matrix in nested hashmap form 
        this.adjacency = new AdjacencyMap();
        for (const e of edgeList) {
            const edge: Edge = new Edge(e.source, e.target, e.weight);
            this.adjacency.addEdge(edge);
        }

        // Create NodeMap, i.e. a hasmap of vertex objects to contain dijkstra-data
        this.vertices = new Map();
        for (const n of this.adjacency.getNodes()) {
            let vertex: Vertex = new Vertex(n, this.adjacency.getVertexAdjacency(n));
            this.vertices.set(n, vertex);
        }

        // Initialize distances
        this.distances = new DijkstraDistances(this.ego, new Set(this.vertices.keys()));
        console.log(this.distances)
    
    };

    public dijkstra(maxHop: number = Number.MAX_VALUE): void {
        
        let current: string | undefined = this.distances.returnClosestVertex();

        // initialize helper variables
        while (current) {

            console.log(current)

            // get adjacency of closest node
            const neighbors = this.adjacency.getVertexAdjacencyWights(current);
            console.log(neighbors);

            //
            for ( const [neighbor, weight] of neighbors.entries() ) {
                this.distances.addDistance(current, neighbor, weight);
            }

            //
            console.log(this.distances.unvistedVertices)
            current = this.distances.returnClosestVertex();

        };

        console.log(this.distances.hopDistances);
    };

    public get egocenter() {
        return this.ego
    }

};

let graph: Graph = new Graph();
graph.dijkstra();