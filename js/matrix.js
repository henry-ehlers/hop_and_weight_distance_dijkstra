"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EgoMatrix = void 0;
const d3_1 = __importDefault(require("d3"));
// todo: extend prototype / abstract class with key properties across visualization approaches
class EgoMatrix {
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
        let x = d3_1.default.scaleBand()
            .range([0, this.width])
            .domain(this.nodes.map(d => d.id))
            .padding(0.05);
        let y = d3_1.default.scaleBand()
            .range([0, this.height])
            .domain(this.nodes.map(d => d.id))
            .padding(0.05);
        d3_1.default.select(id)
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
exports.EgoMatrix = EgoMatrix;
