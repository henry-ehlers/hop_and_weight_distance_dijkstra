export class DijkstraNode {

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

}