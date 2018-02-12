export const moviesLoaded = movies => ({
  type: 'movies-loaded',
  payload: movies
});

export const loadMovies = () => async dispatch => {
  const response = await fetch('/movies.json');
  const data = await response.json();
  dispatch(moviesLoaded(data.results));
};
