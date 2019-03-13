import React, { Component } from 'react';
import './App.css';

import SearchPage from './views/SearchPage';

import { Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/search' component={SearchPage} />
      </div>
    );
  }
}

export default App;
