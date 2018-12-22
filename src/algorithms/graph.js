import jsgraphs from 'js-graph-algorithms';
import math from 'mathjs';
import _ from 'lodash';

export class Graph {
  constructor(noOfNodes = 3) {
    this.graph = new jsgraphs.Graph(noOfNodes);
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
  };

  isTwoEdgeConnected = () => {
    const g = this.graph;
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
}
