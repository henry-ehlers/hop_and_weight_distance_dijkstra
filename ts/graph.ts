class Vertex <T> { 
    private readonly _ID: T;
    private readonly _ADJACENCY: Array<T>;
    private hopDist: Number = Number.MAX_VALUE;
    private weightDist: Number = Number.MAX_VALUE;

    constructor (id: T, adjacency: Array<T>) {
        this._ID = id;
        this._ADJACENCY = adjacency;

    }

    public get ID() {
        return this._ID;
    }

    public get adjacency() {
        return this._ADJACENCY;
    }
};

// class Graph {
//     nodes: {}
// };