import React, { Component } from 'react';
import { Network, Node, Edge } from '@lifeomic/react-vis-network';

class GraphComponent extends Component {
  createGraph = (graph) => {
    let markup = [];
    for (var i = 0; i < graph.V; i++) {
      markup.push(<Node key={`node ${i}`} id={`${i}`} label={`${i}`} />);
    }
    for (var v = 0; v < graph.V; v++) {
      let adj_v = graph.adj(v);

      for (var j = 0; j < adj_v.length; ++j) {
        let w = adj_v[j];
        if (w > v) continue; // make sure only one edge between w and v since the graph is undirected
        markup.push(
          <Edge key={`edge ${v},${w}`} id={`${v},${w}`} from={v} to={w} />,
        );
      }
    }
    return markup;
  };

  render() {
    const { graph } = this.props;
    return (
      <Network
        style={{
          height: window.innerHeight - 100,
          width: window.innerWidth - 100,
        }}>
        {this.createGraph(graph)}
      </Network>
    );
  }
}

export default GraphComponent;
