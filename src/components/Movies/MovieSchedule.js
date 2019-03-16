import React from 'react';
import MovieInfo from './MovieInfo';

const MovieSchedule = props => {
    return (
        <div>
            <img src={props.movie.info.Poster} alt={props.movie.info.Title} />
            <p>{props.movie.date} {props.movie.time}</p>
            <MovieInfo movie={props.movie.info} />
        </div>
    )
}

export default MovieSchedule;