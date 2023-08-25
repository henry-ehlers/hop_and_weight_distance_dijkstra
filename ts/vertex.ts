export class Vertex { 

    private readonly _ID: string;
    private ego: string | undefined = undefined;
    private hop: number | undefined = undefined;
    private weighted: number | undefined = undefined;

    constructor(id: string, adjacency: Array<string>) {
        this._ID = id;
    };

    public setEgocentricDistances(ego: string, hop: number, weighted: number) {
        this.ego = ego;
        this.hop = hop;
        this.weighted = weighted;
    }

    public get ID() {
        return this._ID;
    };

    public get weightedDistance(): number | undefined {
        return (this.weighted);
    }

    public get hopDistance(): number | undefined {
        return (this.hop);
    }

    public get egocenter(): string | undefined {
        return (this.ego);
    }

};