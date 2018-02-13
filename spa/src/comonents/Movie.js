import React from 'react';
import { Link } from 'react-router-dom';

export default ({ movie }) => (
  <li>
    <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
  </li>
);
