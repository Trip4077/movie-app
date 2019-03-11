import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      plot: 'short',
      page: 1,
      totalMovies: 0,
      results: []
    }
  }

  handleChange = e => {
    e.preventDefault();

    const searchTerm = e.target.value;
    this.performSearch(searchTerm);
  }

  performSearch = searchTerm => {
    axios.get(`http://www.omdbapi.com/?s=${searchTerm}&plot=${this.state.plot}&page=${this.state.page}&apikey=db6f6716`)
          .then(res => {
            console.log(res.data);
            this.setState({
              results: res.data.Search,
              totalMovies: Number(res.data.totalResults),
              search: searchTerm
            })
          })
          .catch(err => {
            console.log(err);
          })
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <form>
          <input type='text'
                 name='search'
                 value={this.state.search}
                 onChange={this.handleChange}
                 placeholder='Enter movie title...' />

        </form>
      </div>
    );
  }
}

export default App;
