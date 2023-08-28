export class Edge {
    constructor(source, target, weight) {
        this._SOURCE = String(source);
        this._TARGET = String(target);
        this._WEIGHT = Number(weight);
    }
    ;
    get source() {
        return this._SOURCE;
    }
    ;
    get target() {
        return this._TARGET;
    }
    ;
    get weight() {
        return this._WEIGHT;
    }
}
;
