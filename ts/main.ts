import { JSONIO } from "./JSONIO";
import { EgoMatrix } from "./Matrix";
import { Graph } from "./Graph";
import { DistanceGraph } from "./DistanceGraph";
import { type } from "os";

const data = JSONIO.readObjectsFromJSON("simple.json", "data");
const graph = new Graph(data);
const distanceGraph = new DistanceGraph(graph);
distanceGraph.getDijkstraDistances("0");
const egoNodes = distanceGraph.getDistances("0");
const edgeList = distanceGraph.EdgeList;
const matrix = new EgoMatrix(edgeList, egoNodes)
matrix.visualize('#graph')