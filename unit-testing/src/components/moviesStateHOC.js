import React, { PureComponent } from 'react';

export default NestedComponent => {
  return class extends PureComponent {
    state = { movies: [] };

    async componentDidMount() {
      const response = await fetch('/movies.json');
      const movies = await response.json();

      this.setState({ movies });
    }

    render() {
      const { movies } = this.state;
      return (
        <NestedComponent {...this.props} movies={movies}>
        </NestedComponent>
      );
    }
  };
};
