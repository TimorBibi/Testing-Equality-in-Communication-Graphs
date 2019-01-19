import React, { Component } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";

class GraphBuilder extends Component {
  constructor(props) {
    super();

    this.state = {
      noOfVertices: 0
    };
  }

  handleNoOfVertices = e => {
    const value = NaN ? 0 : parseInt(e.target.value);
    this.setState({ noOfVertices: value });
  };

  render() {
    const { onSubmit } = this.props;
    return (
      <Form>
        <Form.Field>
          <label>Enter number of vertices:</label>
          <input
            id="noOfVertices"
            type="number"
            name="noOfVertices"
            className="col-2"
            onChange={e => this.handleNoOfVertices(e)}
          />
        </Form.Field>
        <Button
          onClick={() => {
            onSubmit(this.state.noOfVertices);
          }}
          type="submit"
        >
          Set
        </Button>
      </Form>
    );
  }
}

export default GraphBuilder;
