import React, { Component } from 'react';

import './MovieDetails.css';
import movies from './movies.json';

import { Prompt } from 'react-router-dom';

export default ({ match }) => {
  const id = +match.params.movieId;
  console.log(match, id);
  const movie = movies.find(m => m.id === id);

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
      <Prompt
        message={location => {
          console.log(location)
          return 'Are you sure?';
        }}
      />
    </div>
  );
};
