import React, { Component } from 'react';

import Movie from './Movie';

class Movies extends Component {
  state = { movies: [] };

  async componentDidMount() {
    const response = await fetch('/movies.json');
    const movies = await response.json();
    this.setState({ movies });
  }

  render() {
    const { title } = this.props;
    const { movies } = this.state;

    return (
      <div>
        <h2>{title}</h2>

        <ul>{movies.map(movie => <Movie key={movie.id} movie={movie} />)}</ul>
      </div>
    );
  }
}

export default Movies;
