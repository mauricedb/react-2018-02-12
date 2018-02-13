import React from 'react';

import Movie from './Movie';
import movies from './movies.json';

export default ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>

      <ul>{movies.map(movie => <Movie key={movie.id} movie={movie} />)}</ul>
    </div>
  );
};
