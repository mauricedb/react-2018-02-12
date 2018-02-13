import React, { Component } from 'react';

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Counter from './components/Counter';
import MoviesPresentation from './components/MoviesPresentation';
import MovieDetails from './components/MovieDetails';
import Logger from './components/Logger';

class App extends Component {
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
