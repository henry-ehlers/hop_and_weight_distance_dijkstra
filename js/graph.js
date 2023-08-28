import { Node } from "./Node";
import { Edge } from "./Edge";
export class Graph {
    constructor(edgeList) {
        this.edges = [];
        this.nodes = [];
        edgeList.forEach(e => this.edges.push(new Edge(e.source, e.target, e.weight)));
        const nodeList = new Set(this.edges.map(e => [e.source, e.target]).flat());
        nodeList.forEach(n => this.nodes.push(new Node(n)));
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
;
