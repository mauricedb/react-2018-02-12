import React, { Component } from 'react';

class Counter extends Component {
  state = { counter: 0 };

  onClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  render() {
    const { counter } = this.state;
    return (
      <div>
        <p>The count = {counter}</p>
        <button onClick={this.onClick}>Increment</button>
      </div>
    );
  }
}

export default Counter;
