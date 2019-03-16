import React from 'react';
import Thumbnail from './Thumbnail';

const MovieList = props => {
    return(
        <div className='movie-list'>
            {props.results && props.results.length > 0 
                           ? props.results.map(movie => <Thumbnail key={Math.random()} 
                                                                   movie={movie}
                                                                   profile={props.profile || false}/>)
                           : <p>No Results Found</p>}
        </div>
    );
}

export default MovieList;