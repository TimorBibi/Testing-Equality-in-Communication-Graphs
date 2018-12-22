import React, { Component } from 'react';
import logo from './logo.svg';
import { Graph } from './algorithms/graph';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.Graph = new Graph();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Testing Equality in Communication Graphs</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="main">
          <button onClick={() => this.Graph.main()}>Run App</button>
          <button
            onClick={() => {
              this.Graph.main(true);
            }}>
            Debug App
          </button>
        </div>
      </div>
    );
  }
}

export default App;
