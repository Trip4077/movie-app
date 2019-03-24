import React, { Component } from 'react';
import './App.css';

import Login from './views/Login';
import RegisterPage from './views/RegisterPage';
import SearchPage from './views/SearchPage';
import BrowsePage from './views/BrowsePage';
import ProfilePage from './views/ProfilePage';
import MoviePage from './views/MoviePage';

import Navbar from './components/Navigation/Navbar';

import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        
        <Route exact path='/' component={Login} />
        <Route path='/register' component={RegisterPage} />
        <Route path='/search' component={SearchPage} />
        <Route path='/browse' component={BrowsePage} />
        <Route path='/profile' component={ProfilePage} />
        <Route path='/movie/:id' component={MoviePage} />
      </div>
    );
  }
}

export default App;
