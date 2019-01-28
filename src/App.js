import React, { Component } from "react";
import GraphComponent from "./components/GraphComponent";
import { Graph } from "./algorithms/graph";
import "./App.css";
import GraphBuilder from "./components/GraphBuilder";
import MatrixBuilder from "./components/MatrixBuilder";

class App extends Component {
  constructor() {
    super();
    this.Graph = new Graph();
    this.state = {
      noOfVertices: 0,
      isGraphReady: false
    };
  }

  crateTable = noOfVertices => this.setState({ noOfVertices });

  createGraph = adjTable => {
    this.Graph.main(adjTable);
    this.setState({ isGraphReady: true });
  };

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
              handleNoOfVertices={e => this.handleNoOfVertices(e)}
              onSubmit={noOfVertices => this.crateTable(noOfVertices)}
            />
            <MatrixBuilder
              noOfVertices={noOfVertices}
              onSubmit={adj => this.createGraph(adj)}
            />
          </React.Fragment>
        )}
        {isGraphReady && <GraphComponent graph={this.Graph.getGraph()} />}
      </div>
    );
  }
}

export default App;
