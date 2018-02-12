const actions = {
  'movies-loaded': (state, action) => action.payload,
  none: state => state
};

export default (state = [], action) => {
  const fn = actions[action.type] || actions.none;
  return fn(state, action);
};
