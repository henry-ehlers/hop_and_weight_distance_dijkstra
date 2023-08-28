"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Graph = void 0;
const Node_1 = require("./Node");
const Edge_1 = require("./Edge");
class Graph {
    constructor(edgeList) {
        this.edges = [];
        this.nodes = [];
        edgeList.forEach(e => this.edges.push(new Edge_1.Edge(e.source, e.target, e.weight)));
        const nodeList = new Set(this.edges.map(e => [e.source, e.target]).flat());
        nodeList.forEach(n => this.nodes.push(new Node_1.Node(n)));
    }
    ;
    get Nodes() {
        return this.nodes;
    }
    ;
    get Edges() {
        return this.edges;
    }
    ;
}
exports.Graph = Graph;
;
