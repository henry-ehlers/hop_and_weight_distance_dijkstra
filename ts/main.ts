import { JSONIO } from "./JSONIO";
import { Graph } from "./Graph";
import { DistanceGraph } from "./DistanceGraph";

const inputFileName: string = 'soc-firm-hi-tech';
const ego: string = '10';
const data = JSONIO.rescaleEdges(JSONIO.readObjectsFromJSON(inputFileName + ".edges.json", "data"));

const graph = new Graph(data);
const distanceGraph = new DistanceGraph(graph);
distanceGraph.computeDijkstraDistances(ego);
const egoNodes = distanceGraph.getEgocentricDistances(ego);
const annotatedEdges = distanceGraph.getAnnotatedEdges(ego);
JSONIO.writeObjectsToJSON(egoNodes, inputFileName + "." + ego + ".nodes.json", "./data");
JSONIO.writeObjectsToJSON(annotatedEdges, inputFileName + "." + ego + ".edges.json", "./data");