import React from 'react';
import PropTypes from 'prop-types';
import moviesStateHOC from './moviesStateHOC';
import Movie from './Movie';

const MoviePresentation = ({ title, movies }) => {
  console.log('Rendering MoviePresentation');
  return (
    <div>
      <h2>{title}</h2>

      <ul>{movies.map(movie => <Movie key={movie.id} movie={movie} />)}</ul>
    </div>
  );
};

MoviePresentation.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    })
  ).isRequired
};

export default moviesStateHOC(MoviePresentation);
