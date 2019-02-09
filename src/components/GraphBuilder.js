import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { graphTypes } from '../App';

class GraphBuilder extends Component {
  constructor(props) {
    super();

    this.state = {
      noOfVertices: 0,
      probability: 1,
    };
  }
  // handleSetGraph = (type, )

  handleNoOfVertices = (e) => {
    const value = NaN ? 0 : parseInt(e.target.value);
    this.setState({ noOfVertices: value });
  };

  handleProbability = (e) => {
    const value = NaN ? 0 : parseFloat(e.target.value);
    this.setState({ probability: value });
  };

  render() {
    const { onSubmit } = this.props;
    return (
      <Form>
        <h2>Generate random graph</h2>
        <Form.Field>
          <label>Enter number of vertices:</label>
          <input
            id="noOfVerticesRandom"
            type="number"
            name="noOfVertices"
            className="col-2"
            onChange={(e) => this.handleNoOfVertices(e)}
          />
        </Form.Field>
        <Form.Field>
          <label>Enter probability:</label>
          <input
            id="probabilityRandom"
            type="number"
            step="0.01"
            name="probabilityRandom"
            className="col-2"
            onChange={(e) => this.handleProbability(e)}
          />
        </Form.Field>
        <Button
          onClick={() => {
            onSubmit(
              graphTypes.RANDOM,
              this.state.noOfVertices,
              this.state.probability,
            );
          }}
          type="submit">
          Set
        </Button>
        <h2>Generate custom graph</h2>
        <Form.Field>
          <label>Enter number of vertices:</label>
          <input
            id="noOfVertices"
            type="number"
            name="noOfVertices"
            className="col-2"
            onChange={(e) => this.handleNoOfVertices(e)}
          />
        </Form.Field>
        <Button
          onClick={() => {
            onSubmit(graphTypes.CUSTOM, this.state.noOfVertices, undefined);
          }}
          type="submit">
          Set
        </Button>
      </Form>
    );
  }
}

export default GraphBuilder;
