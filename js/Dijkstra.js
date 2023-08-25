"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Djikstra = void 0;
const DistanceNode_1 = require("./DistanceNode");
class Djikstra {
    constructor(ego, nodes) {
        this.weighted = new Map();
        this.hop = new Map();
        this.parents = new Map;
        nodes.forEach(d => d == ego ? this.hop.set(d, 0) : this.hop.set(d, Number.MAX_SAFE_INTEGER));
        nodes.forEach(d => d == ego ? this.weighted.set(d, 0) : this.weighted.set(d, Number.MAX_VALUE));
        nodes.forEach(d => d == ego ? this.parents.set(d, d) : this.parents.set(d, undefined));
        this.unvisited = new Set(this.hop.keys());
        this.ego = ego;
    }
    ;
    visitVertex(vertex) {
        this.unvisited.delete(vertex);
    }
    ;
    computeShortestDistances(adjacency) {
        // Calculcate minimum distances to ego using dijkstra
        let current = this.returnClosestVertex();
        while (current) {
            const neighbors = adjacency.getVertexAdjacencyWeights(current);
            for (const [neighbor, weight] of neighbors.entries()) {
                this.addDistance(current, neighbor, weight);
            }
            ;
            current = this.returnClosestVertex();
        }
        ;
        return ([...this.hop.keys()].map(n => new DistanceNode_1.DistanceNode(n, this.ego, this.hop.get(n), this.weighted.get(n))));
    }
    ;
    returnClosestVertex() {
        // TODO: allow for ties and break them with shortest weighted distance
        let closest;
        if (this.unvisited.size > 0) {
            closest = Array.from(this.unvisited).reduce((curr, min) => this.hop.get(min) < this.hop.get(curr) ? min : curr);
            this.visitVertex(closest);
        }
        else {
            closest = undefined;
        }
        return (closest);
    }
    ;
    addDistance(current, neighbor, weight) {
        const newWeighted = this.weighted.get(current) + weight;
        const newHop = this.hop.get(current) + 1;
        if ((newHop > this.hop.get(neighbor))) {
            return;
        }
        else if ((newHop < this.hop.get(neighbor))) {
            this.hop.set(neighbor, newHop);
            this.weighted.set(neighbor, newWeighted);
            this.parents.set(neighbor, current);
        }
        else if (newWeighted < this.weighted.get(current)) {
            this.hop.set(neighbor, newHop);
            this.weighted.set(neighbor, newWeighted);
            this.parents.set(neighbor, current);
        }
    }
    ;
}
exports.Djikstra = Djikstra;
