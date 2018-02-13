import React, { Component } from 'react';

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Counter from './comonents/Counter';
import Movies from './comonents/Movies';
import MovieDetails from './comonents/MovieDetails';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Counter />
          <Switch>
            <Route
              path="/movies"
              render={() => <Movies title="The movies" />}
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
