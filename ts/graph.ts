class Graph<T extends String | Number> {

    // private nodes: Map< T, Vertex<T> > = {};
    // private edges: Array< Edge<T> > = [];

    constructor (edges: Array<object>) {
    
        for (const edge in edges) {
            console.log(edge);
        }
    
    };

};