import React, { Component } from 'react';
import { Message, Button } from 'semantic-ui-react';

class GraphResult extends Component {
  constructor(props) {
    super(props);

    this.Graph = props.graph;
    this.state = {
      graph: this.Graph.getGraph(),
      bounds: this.Graph.getBounds(),
    };
  }

  createMessage = (valid) => {
    const upperBound = this.state.bounds.upper;
    const lowerBound = this.state.bounds.lower;
    let content = valid
      ? lowerBound.toString() + ' <= f(G) <= ' + upperBound
      : 'This graph is not connected';
    return valid ? (
      <React.Fragment>
        <p>f(G) upper and lower bounds:</p>
        <p>{content}</p>{' '}
      </React.Fragment>
    ) : (
      <p>{content}</p>
    );
  };

  render() {
    const { onReset } = this.props;
    let valid = this.state.bounds.upper !== Infinity;
    let content = this.createMessage(valid);
    let style = valid ? 'blue' : 'red';
    return (
      <div className="result">
        <Button
          onClick={() => {
            onReset();
          }}
          type="submit">
          Reset Graph
        </Button>
        <Message color={style}>{content}</Message>
      </div>
    );
  }
}

export default GraphResult;
