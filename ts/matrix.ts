import d3 from 'd3';
import { Node } from "./Node";
import { Edge } from "./Edge";

// todo: extend prototype / abstract class with key properties across visualization approaches
class EgoMatrix {

    private readonly edges: Array<Edge>;
    private readonly nodes: Array<Node>;

    constructor(edgeList: Array<Edge>, nodeList: Array<Node>) {
        this.edges = edgeList;
        this.nodes = nodeList;
    };

    // REPLACE WITH DIJKSTRA NODES
    // sortNodes() {
    //     this.nodes.sort(function(a, b) {
    //         return (( a.weightedDistance+a.hopDistance ) - (b.weightedDistance+b.hopDistance  ));
    //     });
    // };

    public get nodeList(): Array<Node> {
        return(this.nodes);
    }

    plot() {};

}