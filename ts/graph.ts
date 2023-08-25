import fs from 'fs';
import { Node } from "./Node";
import { Edge } from "./edge";

export class Graph{

    private edges: Array<Edge> = [];
    private nodes: Array<Node> = [];

    constructor () {

        // Temporary Hardcoding of edge list because file and module loading is such a pain in the ass
        let edgeList = [
            {"source": "0", "target": "1", "weight": 1}, 
            {"source": "0", "target": "5", "weight": 1}, 
            {"source": "0", "target": "3", "weight": 1}, 
            {"source": "1", "target": "2", "weight": 1}, 
            {"source": "2", "target": "3", "weight": 1},
            {"source": "3", "target": "4", "weight": 1}, 
            {"source": "4", "target": "5", "weight": 1}
        ];

        // Create Adjacency Map, i.e. symmetrical adjacency matrix in nested hashmap form 
        edgeList.forEach(e => this.edges.push(new Edge(e.source, e.target, e.weight)));
        const nodeList = Array.from(new Set(this.edges.map(e => (e.source, e.target))));
        nodeList.forEach(n => this.nodes.push(new Node(n)));
    
    };

    public get Nodes(): Array<Node> {
        return this.nodes;
    }

    public get Edges(): Array<Edge> {
        return this.edges;
    }

};
