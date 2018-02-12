import React, { Component } from "react";

class Clock extends Component {
  state = {
    now: new Date()
  };
  componentDidMount(){
    setInterval(() => {
      this.setState({
        now: new Date()
      })
    }, 5000)
  }
  render() {
    console.log('Clock rendering')
    const { now } = this.state;
    return <div>The time is: {now.toLocaleTimeString()}</div>;
  }
}

export default Clock;
