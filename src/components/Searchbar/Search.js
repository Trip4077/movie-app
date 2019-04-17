import React from 'react';

const Search = props => {
    return(
        <form onSubmit={props.performSearch}
              data-testid='search-form'>

            <div className='input-field searchbar'>
                <input type='text'
                        name='search'
                        defaultValue={props.search}
                        onChange={props.handleChange}
                        id='search' />

                <label htmlFor='search'>
                    Search By Title
                </label>

                <button type='submit' id='searchbar-icon'>
                    <i className="material-icons small" >search</i>
                </button>
            </div>

        </form>
    );
}

export default Search;