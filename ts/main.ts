import { JSONIO } from "./JSONIO";
import { Graph } from "./Graph";
import { DistanceGraph } from "./DistanceGraph";

const data = JSONIO.readObjectsFromJSON("simple.edges.json", "data");
const graph = new Graph(data);
const distanceGraph = new DistanceGraph(graph);
distanceGraph.computeDijkstraDistances("0");
const egoNodes = distanceGraph.getEgocentricDistances("0");
const edgeList = distanceGraph.EdgeList;
const annotatedEdges = distanceGraph.getAnnotatedEdges();
JSONIO.writeObjectsToJSON(egoNodes, "simple.nodes.json", "./data");
JSONIO.writeObjectsToJSON(annotatedEdges, "simple.annotated.edges.json", "./data");
console.log(egoNodes);
console.log(edgeList);
console.log(annotatedEdges);