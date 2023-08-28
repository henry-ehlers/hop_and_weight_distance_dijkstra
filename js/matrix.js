import d3 from 'd3';
// todo: extend prototype / abstract class with key properties across visualization approaches
export class EgoMatrix {
    constructor(edgeList, nodeList) {
        this.width = 500;
        this.height = 500;
        this.edges = edgeList;
        this.nodes = nodeList;
        this.sortNodes();
    }
    ;
    sortNodes() {
        this.nodes.sort(function (a, b) {
            return ((a.weighted + a.hop) - (b.weighted + b.hop));
        });
    }
    ;
    get nodeList() {
        return this.nodes;
    }
    ;
    visualize(id) {
        let x = d3.scaleBand()
            .range([0, this.width])
            .domain(this.nodes.map(d => d.id))
            .padding(0.05);
        let y = d3.scaleBand()
            .range([0, this.height])
            .domain(this.nodes.map(d => d.id))
            .padding(0.05);
        d3.select(id)
            .append('svg')
            .attr('width', this.width)
            .attr('height', this.height)
            .selectAll('rect')
            .data(this.nodes)
            .enter()
            .append('rect')
            .attr('x', function (d) { return Number(x(d.id)); })
            .attr('y', function (d) { return Number(y(d.id)); })
            .attr('width', x.bandwidth)
            .attr('height', y.bandwidth)
            .attr('rx', 4)
            .attr('ry', 4)
            .attr('fill', 'black');
    }
    ;
    plot() { }
    ;
}
