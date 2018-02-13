import React, { Component } from 'react';

import Movie from './Movie';
import movies from './movies.json';

export default ({ selectMovie }) => {
  return (
    <div>
      <h2>Movies</h2>

      <ul>
        {movies.map(movie => (
          <Movie key={movie.id} movie={movie} selectMovie={selectMovie} />
        ))}
      </ul>
    </div>
  );
};
