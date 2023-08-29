export class DistanceEdge {
    private readonly _SOURCE: string;
    private readonly _TARGET: string;
    private readonly _WEIGHT: number;
    private readonly _HOP: number;

    public constructor(source: string, target: string, weight: number, hop: number) {
        this._SOURCE = source;
        this._TARGET = target;
        this._WEIGHT = weight;
        this._HOP = hop;
    }
}