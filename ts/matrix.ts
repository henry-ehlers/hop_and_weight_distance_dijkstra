import d3 from 'd3';
import { DistanceNode } from "./DistanceNode";
import { Edge } from "./Edge";

// todo: extend prototype / abstract class with key properties across visualization approaches
export class EgoMatrix {

    private readonly edges: Array<Edge>;
    private readonly nodes: Array<DistanceNode>;
    private readonly width: number = 500;
    private readonly height: number = 500;

    constructor(edgeList: Array<Edge>, nodeList: Array<DistanceNode>) {
        this.edges = edgeList;
        this.nodes = nodeList;
        this.sortNodes();
    };

    private sortNodes(): void {
        this.nodes.sort(function(a, b) {
            return (( a.weighted+a.hop ) - ( b.weighted+b.hop ));
        });
    };

    public get nodeList(): Array<DistanceNode> {
        return this.nodes;
    };

    public visualize(id: string): void {

        let x = d3.scaleBand()
            .range([ 0, this.width ])
            .domain(this.nodes.map(d => d.id))
            .padding(0.05);

        let y = d3.scaleBand()
            .range( [0, this.height] )
            .domain(this.nodes.map(d => d.id))
            .padding(0.05)

        d3.select(id)
            .append('svg')
                .attr('width', this.width)
                .attr('height', this.height)
            .selectAll('rect')
            .data(this.nodes)
            .enter()
            .append('rect')
                .attr('x', function(d): number { return Number(x(d.id)) })
                .attr('y', function(d): number { return Number(y(d.id)) })
                .attr('width', x.bandwidth)
                .attr('height', y.bandwidth)
                .attr('rx', 4)
                .attr('ry', 4)
                .attr('fill', 'black')
    };


    plot() {};

}