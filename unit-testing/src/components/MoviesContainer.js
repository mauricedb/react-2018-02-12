// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// import MoviesPresentation from './MoviesPresentation'

// class MoviesContainer extends Component {
//   isUnmounted = false;

//   static propTypes = {
//     title: PropTypes.string.isRequired
//   }
//   state = { movies: [] };

//   async componentDidMount() {
//     const response = await fetch('/movies.json');
//     const movies = await response.json();
//     if (!this.isUnmounted) {
//       this.setState({ movies });
//     }
//   }

//   componentWillUnmount() {
//     this.isUnmounted = true;
//   }

//   render() {
//     const { title } = this.props;
//     const { movies } = this.state;

//     return (
//       <MoviesPresentation title={title} movies={movies} />
//     );
//   }
// }

// export default MoviesContainer;
