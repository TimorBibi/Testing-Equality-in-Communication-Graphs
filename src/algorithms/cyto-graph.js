import cytoscape from 'cytoscape';
import math from 'mathjs';

export class Graph {
  constructor() {
    this.graph = cytoscape({
      elements: [
        { group: 'nodes', data: { id: 'n1' } },
        { group: 'nodes', data: { id: 'n2' } },
        { group: 'nodes', data: { id: 'n3' } },
        { group: 'edges', data: { id: 'e1', source: 'n1', target: 'n2' } },
        { group: 'edges', data: { id: 'e1', source: 'n2', target: 'n1' } },
        { group: 'edges', data: { id: 'e2', source: 'n2', target: 'n3' } },
        { group: 'edges', data: { id: 'e2', source: 'n3', target: 'n2' } },
        { group: 'edges', data: { id: 'e2', source: 'n1', target: 'n3' } },
        { group: 'edges', data: { id: 'e3', source: 'n3', target: 'n1' } },
      ],
      layout: {
        name: 'preset',
      },
    });
  }

  main = (debug) => {
    if (debug) {
      debugger;
    }
  };
}
