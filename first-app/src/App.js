import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Hello, { maurice } from "./components/Hello";
import Counter from "./components/Counter";
import Clock from "./components/Clock";

// console.log(Hello, maurice);

const movies = [{ id: 1, title: "Star wars" }, { id: 2, title: "Star trek" }];

const Movie = ({ movie }) => <li>{movie.title}</li>;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hello there</p>
        <p>The date is: {new Date().toString()}</p>
        <p>2 + 3 = {2 + 3}</p>
        <Hello name="Cubus" time={new Date()} />
        <Counter />
        <Clock />
        <ul>
          {movies.map((movie, index) => <Movie key={movie.id} movie={movie} />)}
        </ul>
      </div>
    );
  }
}

// const element = React.createElement(
//   'div',
//   { className: 'App' },
//   React.createElement(
//     'header',
//     { className: 'App-header' },
//     React.createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
//     React.createElement(
//       'h1',
//       { className: 'App-title' },
//       'Welcome to React'
//     )
//   ),
//   React.createElement(
//     'p',
//     { className: 'App-intro' },
//     'To get started, edit ',
//     React.createElement(
//       'code',
//       null,
//       'src/App.js'
//     ),
//     ' and save to reload.'
//   ),
//   React.createElement(
//     'p',
//     null,
//     'Hello there'
//   ),
//   React.createElement(
//     'p',
//     null,
//     'The date is: ',
//     new Date().toString()
//   ),
//   React.createElement(
//     'p',
//     null,
//     '2 + 3 = ',
//     2 + 3
//   )
// );
// console.log(element)

export default App;
