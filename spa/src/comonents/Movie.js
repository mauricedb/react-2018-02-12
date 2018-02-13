import React from 'react';

export default ({ movie, selectMovie }) => (
  <li onClick={() => selectMovie(movie)}>{movie.title}</li>
);
