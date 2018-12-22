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
}
