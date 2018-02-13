import React, { Component } from 'react';

class Counter extends Component {
  state = { counter: 0 };

  onClick = () => {
    this.setState(state => ({
      counter: state.counter + 1
    }), () => {
      console.log(this.state)
    });
    
    this.setState(state => ({
      counter: state.counter + 1
    }), () => {
      console.log(this.state)
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
