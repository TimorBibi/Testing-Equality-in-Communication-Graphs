import jsgraphs from 'js-graph-algorithms';
import math from 'mathjs';

export class Graph {
  constructor() {
    this.graph = new jsgraphs.Graph(3);
    this.isConnected = false;
  }

  main = (debug) => {
    this.init(debug);
    const g = this.graph;
    let isHemiltonian = this.isHemilton(this.graph);
  };

  init = (debug) => {
    const g = this.graph;
    g.addEdge(0, 1);
    g.addEdge(1, 2);
    g.addEdge(2, 0);
    g.node(0).label = 'n0';
    g.node(1).label = 'n1';
    g.node(2).label = 'n2';
    this.isConnected = this.connected(debug);
  };

  connected = (debug) => {
    const g = this.graph;
    let componnets = new jsgraphs.ConnectedComponents(g);
  };

  deepFirstSearch = (
    v,
    adjOfV,
    label,
    inStackCount,
    numOfVertices,
    g,
    start,
  ) => {
    const NOT_IN_STACK = 0;
    const IN_STACK = 1;

    let reducer = (acc, vertex) => {
      if (!acc && label[vertex] === NOT_IN_STACK) {
        label[vertex] = IN_STACK;
        if (
          this.deepFirstSearch(
            vertex,
            g.adjList[vertex],
            label,
            inStackCount + 1,
            numOfVertices,
            g,
            start,
          )
        )
          return acc || true;
        label[vertex] = NOT_IN_STACK;
      }
      return acc || false;
    };
    return inStackCount === numOfVertices
      ? adjOfV.includes(start)
      : adjOfV.reduce(reducer, false);
  };

  isHemilton = (g) => {
    const NOT_IN_STACK = 0;
    const IN_STACK = 1;

    let label = g.adjList.map((val) => 0);
    let reducer = (acc, vertex, indx) => {
      label[indx] = IN_STACK;
      if (
        !acc &&
        this.deepFirstSearch(indx, g.adjList[indx], label, 1, g.V, g, indx)
      )
        return true;
      label[indx] = NOT_IN_STACK;
      return acc || false;
    };

    return g.adjList.reduce(reducer, false);
  };
}
