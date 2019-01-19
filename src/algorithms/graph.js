import jsgraphs from 'js-graph-algorithms';
import math from 'mathjs';
import _ from 'lodash';

export class Graph {
  constructor(noOfNodes = 3) {
    this.graph = new jsgraphs.Graph(noOfNodes);
  }

  main = (debug) => {
    const g = this.graph;
    this.init(g);
    if (debug) {
      debugger;
    }
  };

  init = (g) => {
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 2);
    g.node(0).label = 'n0';
    g.node(1).label = 'n1';
    g.node(2).label = 'n2';
  };

  isC222 = (g) => {
    // if g is NOT Two Edge Connected return false
    if (!this.isTwoEdgeConnected(g)) return false;
    const adjList = g.adjList;
    // Validate that there are not two adjacent vertices with deg > 2
    for (let i = 0; i < g.V; i++) {
      let isNotValid = adjList[i].reduce(
        (acc, curr) => acc || adjList[curr].length > 2,
        false,
      );
      if (isNotValid) return false;
    }
    return true;
  };

  isTwoEdgeConnected = (g) => {
    const cc = new jsgraphs.ConnectedComponents(g);
    if (cc.componentCount() > 1) return false;
    for (let i = 0; i < g.V; i++) {
      for (let j = 0; j < g.V; j++) {
        if (g.edge(i, j)) {
          let newG = this.cloneGraph(g);
          this.removeEdge(newG, i, j);
          let newCC = new jsgraphs.ConnectedComponents(newG);
          if (newCC.componentCount() > 1) return false;
        }
      }
    }
    return true;
  };

  cloneGraph = (g) => _.cloneDeep(g);

  removeEdge = (g, l, r) => {
    const rIndex = g.adjList[l].indexOf(r);
    const lIndex = g.adjList[r].indexOf(l);
    g.adjList[l].splice(rIndex, 1);
    g.adjList[r].splice(lIndex, 1);
  };

  isConnected = (g) => {
    let componnets = new jsgraphs.ConnectedComponents(g);
    return componnets.count === 1;
  };

  isBipartite = (graph, src, debug) => {
    if (debug) debugger;
    // Create a color array to store  colors assigned to all veritces.
    // Vertex number is used as index  in this array.
    // The value '-1' of colorArr[i] is used to indicate  that no color is assigned to vertex 'i'.
    // The value 1 is  used to indicate first color is assigned and value 0 indicates  second color is assigned.
    var colorArr = [];
    graph.adjList.map(function(v) {
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
          if (!q.includes(vIndex)) q.push(vIndex);
        }

        // An edge from u to v exists and destination
        //  v is colored with same color as u
        else {
          if (
            graph.adjList[u].includes(vIndex) &&
            colorArr[vIndex] === colorArr[u]
          ) {
            return -1;
          }
        }
      }
    }
    var color0Arr = colorArr.filter((color) => color === 0);
    var color1Arr = colorArr.filter((color) => color === 1);
    return Math.max(color0Arr.length, color1Arr.length);
  };
}
