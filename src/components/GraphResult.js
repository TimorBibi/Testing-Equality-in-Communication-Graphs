import React, { Component } from 'react';
import { Button, List } from 'semantic-ui-react';

class GraphResult extends Component {
  constructor(props) {
    super(props);

    this.Graph = props.graph;
    this.state = {
      graph: this.Graph.getGraph(),
      bounds: this.Graph.getBounds(),
    };
  }

  createBoundsList = () => {
    const { bounds } = this.state;
    let labels = Object.keys(bounds).map((label) => label + ' graph:');
    let values = Object.values(bounds).map((val) =>
      val === 'false' ? val : 'f(G) <= ' + val,
    );
    if (bounds['Final limit'] === Infinity)
      values[values.lenght - 1] = 'The graph is not connected';
    return values.map((val, indx) => {
      return (
        <List.Content key={`Lcontent ${indx}`} className="listCon">
          <List.Header key={`Lhead ${indx}`} className="listHead">
            <h3>{labels[indx]}</h3>
          </List.Header>
          <List.Description key={`Ldes ${indx}`} className="listDesc">
            {val}
          </List.Description>
        </List.Content>
      );
    });
  };

  render() {
    const { onReset } = this.props;
    let listItems = this.createBoundsList();
    return (
      <div className="results">
        <List divided relaxed>
          {listItems}
        </List>
        <Button
          onClick={() => {
            onReset();
          }}
          type="submit">
          Reset Graph
        </Button>
      </div>
    );
  }
}

export default GraphResult;
