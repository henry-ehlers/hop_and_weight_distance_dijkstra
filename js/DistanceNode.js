export class DistanceNode {
    constructor(id, ego, hop, weight) {
        this._ID = id;
        this._EGO = ego;
        this._HOP = hop;
        this._WEIGHTED = weight;
    }
    ;
    get weighted() {
        return this._WEIGHTED;
    }
    ;
    get hop() {
        return this._HOP;
    }
    ;
    get id() {
        return this._ID;
    }
    ;
    get ego() {
        return this._EGO;
    }
    ;
}
