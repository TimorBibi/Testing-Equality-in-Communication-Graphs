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
  };

  init = (debug) => {
    const g = this.graph;
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 2);
    g.node(0).label = 'n0';
    g.node(1).label = 'n1';
    g.node(2).label = 'n2';
    this.isConnected =  this.connected(debug);  
    console.log(g.V);
  };

  connected = (debug) => {
    const g = this.graph;
    let componnets = new jsgraphs.ConnectedComponents(g);
    if(debug) debugger;
    return (componnets.count == 1 ? true : false);
  }
}
