import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import moviesReducer from './moviesReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () =>
  createStore(
    combineReducers({
      movies: moviesReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
