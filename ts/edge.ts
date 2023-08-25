export class Edge {

    private readonly _SOURCE: string;
    private readonly _TARGET: string;
    private readonly _WEIGHT: number;

    constructor (source: string, target: string, weight: number) {
        this._SOURCE = String(source);
        this._TARGET = String(target);
        this._WEIGHT = Number(weight);
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