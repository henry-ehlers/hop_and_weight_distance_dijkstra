import d3 from 'd3';
import { Vertex } from "./Node";
import { Edge } from "./edge";

// todo: extend prototype / abstract class with key properties across visualization approaches
class EgoMatrix {

    private readonly edges: Array<Edge>;
    private readonly nodes: Array<Vertex>;

    constructor(edgeList: Array<Edge>, nodeList: Array<Vertex>) {
        this.edges = edgeList;
        this.nodes = nodeList;
    };

    sortNodes() {
        this.nodes.sort(function(a, b) {
            return (( a.weightedDistance+a.hopDistance ) - (b.weightedDistance+b.hopDistance  ));
        });
    };

    public get nodeList(): Array<Vertex> {
        return(this.nodes);
    }

    plot() {};

}