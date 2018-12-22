import cytoscape from 'cytoscape';
import math from 'mathjs';

export class Graph {
  constructor() {
    this.graph = cytoscape({
      /* options */
    });
  }

  main = (debug) => {
    if (debug) {
      debugger;
    }
  };
}
