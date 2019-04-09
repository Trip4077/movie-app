import React, { Component } from 'react';
import axios from 'axios';

import Search from '../components/Searchbar/Search';
import PageSelect from '../components/Pagination/PageSelect';
import MovieList from '../components/Movies/MovieList';

import removeAuth from '../auth/removeAuth';


class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      plot: 'short',
      page: 1,
      pageList: [],
      totalMovies: 0,
      results: [],
    }
  }

  handleChange = e => {
    this.setState({ search: e.target.value });
  }

  performSearch = (e, newpage) => {
    e.preventDefault();

    /* If newpage is passed in, store. Else store page from state */
    const page = newpage ? newpage : this.state.page;

    const lastPage = this.state.pageList[this.state.pageList.length-1]
    const searchTerm = this.state.search;

    /* First and Last Page Check */
    if (page > lastPage || page < 1) return;

    /* Get Page Based On State */
    axios.get(`http://www.omdbapi.com/?s=${searchTerm}&plot=${this.state.plot}&page=${page}&apikey=db6f6716`, {
      params: { newpage: page }
    })
    .then(res => {
      const pageListEnd = res.data.totalResults % 10 === 0 ? Math.floor(res.data.totalResults / 10)
                                                      : Math.floor(res.data.totalResults / 10) + 1;

      let list = [];

      for(let i = 1; i <= pageListEnd; i++ ) {
        if(i > Number(res.data.totalResults)) break;
        
        list.push(i);
      }

      if(!res.data.totalResults) { list = [] }
      
      this.setState({
        results: res.data.Search,
        totalMovies: Number(res.data.totalResults),
        search: searchTerm,
        pageList: list,
        page: res.config.params.newpage
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    console.log(this.props)
    return (
      <div className="search">

        <div className='section'>
          <h3>Find Movies Now:</h3>
        </div>
        <div className='divider'></div>
        

        <Search handleChange={this.handleChange}
                performSearch={this.performSearch}
                search={this.state.search}
                />

        <MovieList results={this.state.results} />

        <PageSelect performSearch={this.performSearch}
                    page={this.state.page}
                    pageList={this.state.pageList}/>
      </div>
    );
  }
}

export default removeAuth(SearchPage);
