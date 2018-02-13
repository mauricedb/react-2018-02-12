import React, { Component } from 'react';

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Counter from './comonents/Counter';
import MoviesPresentation from './comonents/MoviesPresentation';
import MovieDetails from './comonents/MovieDetails';
import Logger from './comonents/Logger';

class App extends Component {
  state = {};

  componentDidMount() {
    setInterval(() => {
      this.setState({});
    }, 1000);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Counter />
          <Switch>
            <Route
              path="/movies"
              render={() => (
                <Logger>{title => <MoviesPresentation title={title} />}</Logger>
              )}
            />
            <Route path="/movie/:movieId" component={MovieDetails} />
            <Redirect to="/movies" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
