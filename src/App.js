import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: 'avengers',
      plot: 'short',
      page: 2,
      resuts: []
    }
  }

  componentDidMount() {
    axios.get(`http://www.omdbapi.com/?s=${this.state.search}&plot=${this.state.plot}&page=${this.state.page}&apikey=db6f6716`)
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          })
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
