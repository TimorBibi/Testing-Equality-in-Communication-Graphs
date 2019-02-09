import React, { Component } from 'react';
import GraphComponent from './components/GraphComponent';
import { Graph } from './algorithms/graph';
import './App.css';
import GraphBuilder from './components/GraphBuilder';
import MatrixBuilder from './components/MatrixBuilder';
import GraphResult from './components/GraphResult';

export const graphTypes = {
  CUSTOM: 'custom',
  RANDOM: 'random',
};

class App extends Component {
  constructor() {
    super();
    this.Graph = new Graph();
    this.state = {
      noOfVertices: 0,
      isGraphReady: false,
    };
    window.graph = this.Graph.getGraph();
  }

  setGraph = (payload) => {
    switch (payload.type) {
      case graphTypes.RANDOM:
        this.Graph.main(payload);
        this.setState({ isGraphReady: true });
        break;
      default:
        this.crateTable(payload.noOfVertices);
    }
  };
  crateTable = (noOfVertices) => this.setState({ noOfVertices });

  createGraph = (adjTable) => {
    this.Graph.main({ adjTable });
    this.setState({ isGraphReady: true });
  };

  resetGraph = () => this.setState({ isGraphReady: false });

  render() {
    const { noOfVertices, isGraphReady } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Testing Equality in Communication Graphs</h1>
        </header>
        {!isGraphReady && (
          <React.Fragment>
            <GraphBuilder
              handleNoOfVertices={(e) => this.handleNoOfVertices(e)}
              onSubmit={(type, noOfVertices, p) =>
                this.setGraph({ type, noOfVertices, p })
              }
            />
            <MatrixBuilder
              noOfVertices={noOfVertices}
              onSubmit={(adj) => this.createGraph(adj)}
            />
          </React.Fragment>
        )}
        {isGraphReady && <GraphComponent graph={this.Graph.getGraph()} />}
        {isGraphReady && (
          <GraphResult graph={this.Graph} onReset={this.resetGraph} />
        )}
      </div>
    );
  }
}

export default App;
