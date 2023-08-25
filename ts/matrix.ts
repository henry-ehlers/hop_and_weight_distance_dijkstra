import d3 from 'd3';
import { Vertex } from "./vertex";
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
        
    }


}