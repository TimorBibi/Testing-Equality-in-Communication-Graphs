import jsgraphs from 'js-graph-algorithms';
import math from 'mathjs';

export class Graph {
  constructor() {
    this.graph = new jsgraphs.Graph(3);
  }

  main = (debug, noOfNodes = 3) => {
    this.init(noOfNodes);
    const g = this.graph;
    if (debug) {
      debugger;
    }
  };

  init = (noOfNodes) => {
    const g = this.graph;

    // init edges
    for (let i = 0; i < noOfNodes; i++) {
      for (let j = 0; j < noOfNodes; j++) {
        if (i !== j && !g.edge(i, j)) {
          g.addEdge(i, j);
        }
      }
    }
    // label nodes
    for (let i = 0; i < noOfNodes; i++) {
      g.node(i).label = `n${i}`;
    }
  };
}
