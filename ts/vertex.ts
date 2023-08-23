class Vertex <T extends String | Number> { 

    private readonly _ID: T;
    private readonly _ADJACENCY: Array<T>;
    private parent: T;
    private hopDist: Number = Number.MAX_VALUE;
    private weightDist: Number = Number.MAX_VALUE;

    constructor(id: T, adjacency: Array<T>) {
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