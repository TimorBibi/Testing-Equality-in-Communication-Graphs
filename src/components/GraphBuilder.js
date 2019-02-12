import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { graphTypes } from '../App';

class GraphBuilder extends Component {
  constructor(props) {
    super();

    this.state = {
      noOfVertices: 1,
      probability: 1,
    };
  }
  // handleSetGraph = (type, )

  handleNoOfVertices = (e) => {
    const inputValue = e.target.value;
    const value = inputValue === '' ? 0 : parseInt(inputValue);
    this.setState({ noOfVertices: value });
  };

  handleProbability = (e) => {
    const inputValue = e.target.value;
    const value =
      inputValue === '' ? 0 : inputValue > 1 ? 1 : parseFloat(inputValue);
    this.setState({ probability: value });
  };

  render() {
    const { onSubmit } = this.props;
    const { probability, noOfVertices } = this.state;

    return (
      <Form>
        <h2>Generate random graph</h2>
        <Form.Field>
          <label>Enter number of vertices:</label>
          <input
            id="noOfVerticesRandom"
            type="text"
            range="0-9"
            name="noOfVertices"
            value={noOfVertices}
            className="col-2"
            onChange={(e) => this.handleNoOfVertices(e)}
          />
        </Form.Field>
        <Form.Field>
          <label>Enter probability [0,1]:</label>
          <input
            id="probabilityRandom"
            type="number"
            step="0.01"
            name="probabilityRandom"
            value={probability}
            className="col-2"
            onChange={(e) => this.handleProbability(e)}
          />
        </Form.Field>
        <Button
          onClick={() => {
            onSubmit(graphTypes.RANDOM, noOfVertices, probability);
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
            value={noOfVertices}
            className="col-2"
            onChange={(e) => this.handleNoOfVertices(e)}
          />
        </Form.Field>
        <Button
          onClick={() => {
            onSubmit(graphTypes.CUSTOM, noOfVertices, undefined);
          }}
          type="submit">
          Set
        </Button>
      </Form>
    );
  }
}

export default GraphBuilder;
