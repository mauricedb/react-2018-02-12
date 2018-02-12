import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';
import createAppStore from './redux/createAppStore';
import Movies from './comonents/Movies';

const store = createAppStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Movies />
        </div>
      </Provider>
    );
  }
}

export default App;
