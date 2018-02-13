import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Movie = ({ movie }) => (
  <li>
    <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
  </li>
);

Movie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
};

export default Movie;
