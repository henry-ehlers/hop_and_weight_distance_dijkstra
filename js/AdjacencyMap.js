export class AdjacencyMap {
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
            throw "Attemped to Map Non-Unique Edge. Please ensure all edges in input edge list are unique.";
        }
        this.map.get(a).set(b, w);
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
}
