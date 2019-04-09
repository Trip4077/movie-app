import React from 'react';
import Thumbnail from './Thumbnail';
import MovieSchedule from './MovieSchedule';

{/* 
    Component Logic:
        determine if results exist and if it has items in an array
        map over items if found, and check for date property
        if found render MovieSchedule component
        else render Thumbnail component
*/}

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