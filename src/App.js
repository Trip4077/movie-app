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
    this.setState({ search: e.target.value });
  }

  selectPage = e => {
    this.performSearch(e, Number(e.target.innerText))
  }

  incrementPage = () => {
    this.setState(prevState => {return { page: prevState.page + 1 }});
  }

  decrementPage = () => {
    this.setState(prevState => {return { page: prevState.page + 1 }});
  }

  performSearch = (e, newpage) => {
    e.preventDefault();

    const page = newpage ? newpage : this.state.page;
    console.log(page)
    const searchTerm = this.state.search;

    
          axios.get(`http://www.omdbapi.com/?s=${searchTerm}&plot=${this.state.plot}&page=${page}&apikey=db6f6716`, {
            params: {
              foo: 'bar'
            }
          })
          .then(res => {
            const pageListEnd = res.data.totalResults % 10 === 0 ? Math.floor(res.data.totalResults / 10)
                                                            : Math.floor(res.data.totalResults / 10) + 1;

            let list = [];
            console.log(params.newpage)
            for(let i = 1; i <= pageListEnd; i++ ) {
              if(i > Number(res.data.totalResults)) break;
              
              list.push(i);
            }

            if(!res.data.totalResults) list = [];
            console.log('state')
            this.setState({
              results: res.data.Search,
              totalMovies: Number(res.data.totalResults),
              search: searchTerm,
              pageList: list,
              page: page
            })
          })
          .catch(err => {
            console.log(err);
          })
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.performSearch}>
          <input type='text'
                 name='search'
                 value={this.state.search}
                 onChange={this.handleChange}
                 placeholder='Enter movie title...' />
        </form>


        <div>
          {this.state.results.map(movie => <p>{movie.Title}</p>)}
        </div>


        <div className='page-index'>
            <span> &#x2039; </span>

            <ul>
              {this.state.pageList.map(pageNum => <li key={pageNum} onClick={this.selectPage}>{pageNum}</li>)}
            </ul>

            <span onClick={this.incrementPage}> &#x203A; </span>
        </div>
      </div>
    );
  }
}

export default App;
