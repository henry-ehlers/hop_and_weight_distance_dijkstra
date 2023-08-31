"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JSONIO_1 = require("./JSONIO");
const Graph_1 = require("./Graph");
const DistanceGraph_1 = require("./DistanceGraph");
const inputFileName = 'miserables';
const ego = 'Javert';
const data = JSONIO_1.JSONIO.rescaleEdges(JSONIO_1.JSONIO.readObjectsFromJSON(inputFileName + ".edges.json", "data"));
const graph = new Graph_1.Graph(data);
const distanceGraph = new DistanceGraph_1.DistanceGraph(graph);
distanceGraph.computeDijkstraDistances(ego);
const egoNodes = distanceGraph.getEgocentricDistances(ego);
const annotatedEdges = distanceGraph.getAnnotatedEdges(ego);
JSONIO_1.JSONIO.writeObjectsToJSON(egoNodes, inputFileName + "." + ego + ".dnodes.json", "./data");
JSONIO_1.JSONIO.writeObjectsToJSON(annotatedEdges, inputFileName + "." + ego + ".dedges.json", "./data");
