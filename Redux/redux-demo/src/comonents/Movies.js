import React, { Component } from 'react';
import { connect } from 'react-redux';

import Movie from './Movie';
import { loadMovies } from '../redux/actions';

class Movies extends Component {
  // state = { movies: [] };

  // async componentDidMount() {
  //   const response = await fetch('/movies.json');
  //   const data = await response.json();
  //   this.setState({ movies: data.results });
  // }

  componentDidMount() {
    this.props.loadMovies();
  }

  render() {
    // const { movies } = this.state;
    const { movies } = this.props;

    return (
      <div>
        <h2>Movies</h2>

        <ul>{movies.map(movie => <Movie key={movie.id} movie={movie} />)}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({ movies: state.movies });

const mapDispatchToProps = dispatch => ({
  loadMovies: () => dispatch(loadMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
