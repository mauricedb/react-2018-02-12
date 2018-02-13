import React, { Component } from 'react';
import moviesStateHOC from './moviesStateHOC';
import './MovieDetails.css';

class MovieDetails extends Component {
  render() {
    const { movies } = this.props;
    const { match } = this.props;
    const id = +match.params.movieId;
    const movie = movies.find(m => m.id === id);

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

export default moviesStateHOC(MovieDetails);
