import React, { Component } from 'react';

import Movies from './comonents/Movies';
import MovieDetails from './comonents/MovieDetails';

class App extends Component {
  state = {
    currentId: null
  };

  selectMovie = movie => {
    this.setState({ currentId: movie.id });
  };

  render() {
    const { currentId } = this.state;

    return (
      <div>
        {currentId ? (
          <MovieDetails id={currentId} />
        ) : (
          <Movies selectMovie={this.selectMovie} />
        )}
      </div>
    );
  }
}

export default App;
