import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class MatrixBuilder extends Component {
  state = {
    vertices: [],
    adj: [],
  };

  componentDidMount() {
    const { noOfVertices } = this.props;
    this.init(noOfVertices);
  }

  componentDidUpdate(prevProps) {
    const { noOfVertices } = this.props;
    if (prevProps.noOfVertices !== noOfVertices) {
      this.init(noOfVertices);
    }
  }

  init = (noOfVertices) => {
    let vertices = [],
      adj = [];
    for (var i = 0; i < noOfVertices; i++) {
      vertices.push(i);
    }
    vertices.map((el, i) => {
      adj.push([]);
      vertices.map((el, j) => (adj[i][j] = false));
      return i;
    });

    this.setState({ adj, vertices });
  };

  onChange = (i, j) => {
    let { adj } = this.state;
    adj[i][j] = !adj[i][j];
    adj[j][i] = !adj[j][i];

    this.setState({ adj });
  };

  render() {
    const { vertices, adj } = this.state;
    const { onSubmit } = this.props;
    const isActive = vertices.length > 0;

    return (
      <div className="matrix">
        <table className="table" style={{ width: '50%' }}>
          <thead>
            <tr>
              {isActive && <th>#</th>}
              {vertices.map((el, i) => (
                <th key={`th-${i}`}>{i}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {adj.map((el, i) => (
              <tr key={`tr-${i}`}>
                <th key={`th-1-${i}`}>{i}</th>
                {el.map((el2, j) => (
                  <td key={`td-checkbox-${i},${j}`}>
                    <input
                      type="checkbox"
                      checked={adj[i][j]}
                      disabled={i === j}
                      onChange={() => this.onChange(i, j)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {isActive && (
          <Button
            onClick={() => {
              onSubmit(this.state.adj);
            }}
            type="submit">
            Create Graph
          </Button>
        )}
      </div>
    );
  }
}

export default MatrixBuilder;
