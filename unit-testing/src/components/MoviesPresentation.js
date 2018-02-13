import React from 'react';
import PropTypes from 'prop-types';
import moviesStateHOC from './moviesStateHOC';
import Movie from './Movie';

const MoviesPresentation = ({ title, movies }) => (
  <div>
    <h2>{title}</h2>

    <ul>{movies.map(movie => <Movie key={movie.id} movie={movie} />)}</ul>
  </div>
);

MoviesPresentation.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    })
  ).isRequired
};

export default moviesStateHOC(MoviesPresentation);
