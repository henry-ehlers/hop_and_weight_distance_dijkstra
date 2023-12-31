"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdjacencyMap = void 0;
class AdjacencyMap {
    ;
    constructor(edgeList) {
        this.map = new Map();
        edgeList.forEach(e => this.addEdge(e));
    }
    ;
    addEdge(edge) {
        this.addVertexPair(edge.source, edge.target, edge.weight);
        this.addVertexPair(edge.target, edge.source, edge.weight);
    }
    ;
    addVertexPair(a, b, w) {
        if (!this.map.has(a)) {
            this.map.set(a, new Map());
        }
        ;
        if (this.map.get(a).has(b)) {
            this.map.get(a).set(b, this.map.get(a).get(b) + w);
        }
        else {
            this.map.get(a).set(b, w);
        }
    }
    getVertexAdjacency(vertex) {
        return (this.map.has(vertex) ? [...this.map.get(vertex).keys()] : []);
    }
    getVertexAdjacencyWeights(vertex) {
        return (this.map.has(vertex) ? this.map.get(vertex) : new Map());
    }
    getNodes() {
        return ([...this.map.keys()]);
    }
    getEdgeWeight(source, target) {
        var _a;
        return (_a = this.map.get(source)) === null || _a === void 0 ? void 0 : _a.get(target);
    }
}
exports.AdjacencyMap = AdjacencyMap;
