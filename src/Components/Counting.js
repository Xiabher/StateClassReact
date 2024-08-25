import React, { Component } from 'react';

class Counting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increament() {
    this.setState({
      count: this.setState.count + 1,
    });
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.increament()}>increament</button>
      </div>
    );
  }
}
export default Counting;
