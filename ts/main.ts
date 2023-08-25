import { JSONIO } from "./JSONIO";
import { Graph } from "./Graph";
import { DistanceGraph } from "./DistanceGraph";
import { type } from "os";

const data = JSONIO.readObjectsFromJSON("simple.json", "data");
const graph = new Graph(data);
const distanceGraph = new DistanceGraph(graph);
distanceGraph.getDijkstraDistances("0");
console.log(distanceGraph.getDistances("0"));