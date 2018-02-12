import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import moviesReducer from './moviesReducer';

export default () =>
  createStore(
    combineReducers({
      movies: moviesReducer
    }),
    applyMiddleware(thunk)
  );
