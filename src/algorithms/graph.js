import jsgraphs from 'js-graph-algorithms';
import math from 'mathjs';

export class Graph {
  constructor() {
    this.graph = new jsgraphs.Graph(3);
  }

  main = (debug) => {
    this.init();
    const g = this.graph;
    if (debug) {
      debugger;
    }
  };

  init = () => {
    const g = this.graph;
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 2);
    g.node(0).label = 'n0';
    g.node(1).label = 'n1';
    g.node(2).label = 'n2';
    console.log(g.V);
  };

    connected = (debug) => {
        const g = this.graph;
        let componnets = new jsgraphs.ConnectedComponents(g);
        if (debug) debugger;
        return (componnets.count === 1);
    };
    isBipartite = (graph, src, debug) => {
        if (debug)
            debugger;
        // Create a color array to store  colors assigned to all veritces.
        // Vertex number is used as index  in this array.
        // The value '-1' of colorArr[i] is used to indicate  that no color is assigned to vertex 'i'.
        // The value 1 is  used to indicate first color is assigned and value 0 indicates  second color is assigned.
        var colorArr = [];
        graph.adjList.map(function (v) {
            colorArr.push(-1);
        });

        // Assign first color to source
        colorArr[src] = 1;

        // Create a queue (FIFO) of vertex numbers
        // and enqueue source vertex for BFS traversal
        var q = [];
        q.push(src);

        while (q.length !== 0) {
            // Dequeue a vertex from queue

            var u = q[0];
            q.splice(0, 1);

            // Find all non-colored adjacent vertices
            for (var vIndex = 0; vIndex < graph.adjList.length; vIndex++) {
                // An edge from u to v exists
                // and destination v is not colored
                if (graph.adjList[u].includes(vIndex) && colorArr[vIndex] === -1) {
                    // Assign alternate color to this adjacent v of u
                    colorArr[vIndex] = 1 - colorArr[u];
                    if (!q.includes(vIndex))
                        q.push(vIndex);
                }

                // An edge from u to v exists and destination
                //  v is colored with same color as u
                else {
                    if ((graph.adjList[u].includes(vIndex)) && (colorArr[vIndex] === colorArr[u])) {
                        return -1;
                    }
                }
            }
        }
        var color0Arr = colorArr.filter(color => color === 0);
        var color1Arr = colorArr.filter(color => color === 1);
        return Math.max(color0Arr.length, color1Arr.length);
    }
}
