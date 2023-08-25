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
    };

    public get ID() {
        return this._ID;
    };

    public get weightedDistance(): number {
        // todo write better logic to handle the undefined case 
        return (Number(this.weighted));
    };

    public get hopDistance(): number {
        // todo write better logic to handle the undefined case 
        return (Number(this.hop));
    };

    public get egocenter(): string {
        return (String(this.ego));
    };

};