import { JSONIO } from "./JSONIO";
import { Graph } from "./Graph";
import { DistanceGraph } from "./DistanceGraph";

const inputFileName: string = 'miserables';
const ego: string = 'Valjean';
const data = JSONIO.rescaleEdges(JSONIO.readObjectsFromJSON(inputFileName + ".edges.json", "data"));
console.log(data)

const graph = new Graph(data);
const distanceGraph = new DistanceGraph(graph);
distanceGraph.computeDijkstraDistances(ego);
const egoNodes = distanceGraph.getEgocentricDistances(ego);
const edgeList = distanceGraph.EdgeList;
const annotatedEdges = distanceGraph.getAnnotatedEdges(ego);
JSONIO.writeObjectsToJSON(egoNodes, inputFileName + ".nodes.json", "./data");
JSONIO.writeObjectsToJSON(annotatedEdges, inputFileName + ".annotated.edges.json", "./data");
console.log(egoNodes);
console.log(edgeList);
console.log(annotatedEdges);