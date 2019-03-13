import React from 'react';

const Search = props => {
    return(
        <form onSubmit={props.performSearch}>
            <input type='text'
               name='search'
               value={props.search}
               onChange={props.handleChange}
               placeholder='Enter movie title...' />
        </form>
    );
}

export default Search;