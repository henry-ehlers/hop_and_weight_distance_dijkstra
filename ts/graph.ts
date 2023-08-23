class Vertex <T extends String | Number> { 

    private readonly _ID: T;
    private readonly _ADJACENCY: Array<T>;
    private parent: T;
    private hopDist: Number = Number.MAX_VALUE;
    private weightDist: Number = Number.MAX_VALUE;

    constructor (id: T, adjacency: Array<T>) {
        this._ID = id;
        this._ADJACENCY = [... new Set(adjacency)];
        this.parent = id; // technically empty, but unsure how to do so
    }

    public get ID() {
        return this._ID;
    }

    public get adjacency() {
        return this._ADJACENCY;
    }

};

class Edge <T extends String | Number> {

    private readonly _SOURCE: T;
    private readonly _TARGET: T;
    private readonly _WEIGHT: Number;

    constructor (source: T, target: T, weight: Number) {
        this._SOURCE = source;
        this._TARGET = target;
        this._WEIGHT = weight;
    }
}

// class Graph {
//     nodes: {}
// };