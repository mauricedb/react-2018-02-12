import React, { Component } from "react";

class CounterUI extends Component {
    element = null;

  onClick = (e) => {
      console.log(e)
    this.props.increment(5);
  };
  componentDidMount(){
      console.log('The element is:', this.element)
      this.element.style.color = 'red'
  }
  render() {
    console.log("Counter  rendering");
    const { counter } = this.props;
    return (
      <div ref={e => this.element= e}>
        The count = {counter}
        <button onClick={this.onClick}>Increment</button>
      </div>
    );
  }
}

class Counter extends Component {
  state = { counter: 0, date: new Date() };

  increment = (value = 1) => {
    const { counter } = this.state;

    this.setState({
      counter: counter + value,
      date: new Date(),
      x: 12
    });
  };

  render() {
    return (
      <CounterUI counter={this.state.counter} increment={this.increment} />
    );
  }
}

export default Counter;
