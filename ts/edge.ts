class Edge <T extends String | Number> {

    private readonly _SOURCE: T;
    private readonly _TARGET: T;
    private readonly _WEIGHT: Number;

    constructor (source: T, target: T, weight: Number) {
        this._SOURCE = source;
        this._TARGET = target;
        this._WEIGHT = weight;
    };

};