import React from 'react';
import Thumbnail from './Thumbnail';
import MovieSchedule from './MovieSchedule';

const MovieList = props => {
    return(
        <div className='movie-list'>
            {props.results && props.results.length > 0 
                           ? props.results.map(movie => {
                               if(movie.date) {
                                   return <MovieSchedule key={Math.random()} 
                                                         movie={movie} />
                               }

                               return <Thumbnail key={Math.random()} 
                                                movie={movie}
                                                profile={props.profile || false}/>
                           })
                           : <h4 className='no-results'>No Results Found</h4>}
        </div>
    );
}

export default MovieList;