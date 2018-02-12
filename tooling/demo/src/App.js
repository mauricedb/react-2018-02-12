import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Hello from "./Hello";

class App extends Component {

getStuff()
{
  return 
  {
    x:1
  }
}
  render() {


    var x = 1;
    if (x === '1'){

    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Hello name="world"/>
      </div>
    );
  }
}

export default App;
