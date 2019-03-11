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
      pageList: [],
      totalMovies: 0,
      results: []
    }
  }

  handleChange = e => {
    e.preventDefault();

    const searchTerm = e.target.value;
    this.performSearch(searchTerm);
  }

  selectPage = e => {
    this.setState({ page: e.target.innerText })
  }

  performSearch = searchTerm => {
    axios.get(`http://www.omdbapi.com/?s=${searchTerm}&plot=${this.state.plot}&page=${this.state.page}&apikey=db6f6716`)
          .then(res => {
            
            const pageListEnd = this.totalMovies % 10 === 0 ? Math.floor(res.data.totalResults / 10)
                                                            : Math.floor(res.data.totalResults / 10) + 1;
            let list = [];

            for(let i = 1; i <= pageListEnd; i++ ) {
              if(i > Number(res.data.totalResults)) break;
              
              list.push(i);
            }

            if(!res.data.totalResults) list = [];

            this.setState({
              results: res.data.Search,
              totalMovies: Number(res.data.totalResults),
              search: searchTerm,
              pageList: list
            })
          })
          .catch(err => {
            console.log(err);
          })
  }

  render() {
    console.log(this.state.page, this.state.results)
    return (
      <div className="App">
        <form>
          <input type='text'
                 name='search'
                 value={this.state.search}
                 onChange={this.handleChange}
                 placeholder='Enter movie title...' />
        </form>

        <div className='page-index'>
            <span> &#x2039; </span>

            <ul>
              {this.state.pageList.map(pageNum => <li key={pageNum} onClick={this.selectPage}>{pageNum}</li>)}
            </ul>

            <span> &#x203A; </span>
        </div>
      </div>
    );
  }
}

export default App;
