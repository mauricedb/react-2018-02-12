import React, { Component } from 'react';

import './MovieDetails.css';

class MovieDetails extends Component {
  state = { movie: null };

  async componentDidMount() {
    const { match } = this.props;
    const id = +match.params.movieId;

    const response = await fetch('/movies.json');
    const movies = await response.json();
    const movie = movies.find(m => m.id === id);

    this.setState({ movie });
  }

  render() {
    const { movie } = this.state;

    if (!movie) {
      return 'Loading...';
    }

    return (
      <div>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <div className="vote-wrapper">
          <div
            className="vote"
            style={{
              width: movie.vote_average * 10
            }}
          >
            Vote: {movie.vote_average}
          </div>
        </div>
        <img
          src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
    );
  }
}

export default MovieDetails;
