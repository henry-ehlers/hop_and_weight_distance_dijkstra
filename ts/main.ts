import { JSONIO } from "./JSONIO";
import { Graph } from "./Graph";
import { DistanceGraph } from "./DistanceGraph";

const data = JSONIO.readObjectsFromJSON("simple.edges.json", "data");
const graph = new Graph(data);
const distanceGraph = new DistanceGraph(graph);
distanceGraph.getDijkstraDistances("0");
const egoNodes = distanceGraph.getDistances("0");
const edgeList = distanceGraph.EdgeList;
JSONIO.writeObjectsToJSON(egoNodes, "simple.nodes.json", "./data");
console.log(egoNodes);
console.log(edgeList);