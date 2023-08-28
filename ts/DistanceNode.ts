export class DistanceNode {

    private readonly _ID: string;
    private readonly _EGO: string;
    private readonly _HOP: number;
    private readonly _WEIGHTED: number;

    public constructor(id: string, ego: string, hop: number, weight: number) {
        this._ID = id;
        this._EGO = ego;
        this._HOP = hop;
        this._WEIGHTED = weight;
    };

    public get weighted(): number {
        return this._WEIGHTED;
    };

    public get hop(): number {
        return this._HOP;
    };

    public get id(): string {
        return this._ID;
    };

    public get ego(): string {
        return this._EGO;
    };

}