import { Node } from "./Node";
import { Edge } from "./Edge";

export class Graph{

    private edges: Array<Edge> = [];
    private nodes: Array<Node> = [];

    constructor (edgeList: Array<any>) {
        edgeList.forEach(e => this.edges.push(new Edge(e.source, e.target, e.weight)));
        const nodeList = new Set(this.edges.map(e => [e.source, e.target]).flat());
        nodeList.forEach(n => this.nodes.push(new Node(n)));
    };

    public get Nodes(): Array<Node> {
        return this.nodes;
    };

    public get Edges(): Array<Edge> {
        return this.edges;
    };

};
