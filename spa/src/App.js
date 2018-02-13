import React, { Component } from 'react';

import { BrowserRouter, HashRouter, Route, Redirect, Switch } from 'react-router-dom';

import Movies from './comonents/Movies';
import MovieDetails from './comonents/MovieDetails';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            {/* <Route path="/movies" component={Movies} /> */}
            <Route path="/movies" render={() => <Movies title="The movies" />} />
            <Route path="/movie/:movieId" component={MovieDetails} />
            <Redirect to="/movies" />
            {/* {currentId ? (
            <MovieDetails id={currentId} />
          ) : (
            <Movies selectMovie={this.selectMovie} />
          )} */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
