"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// todo: extend prototype / abstract class with key properties across visualization approaches
class EgoMatrix {
    constructor(edgeList, nodeList) {
        this.edges = edgeList;
        this.nodes = nodeList;
    }
    ;
    // REPLACE WITH DIJKSTRA NODES
    // sortNodes() {
    //     this.nodes.sort(function(a, b) {
    //         return (( a.weightedDistance+a.hopDistance ) - (b.weightedDistance+b.hopDistance  ));
    //     });
    // };
    get nodeList() {
        return (this.nodes);
    }
    plot() { }
    ;
}
