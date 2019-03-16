import React from 'react';

const MovieInfo = props => {
    return(
        <div className='movie-info'>
                <p>Title: {props.movie.Title}</p>
                <p>Cast: {props.movie.Actors}</p>
                <p>BoxOffice: {props.movie.BoxOffice}</p>
                <p>Release Date: {props.movie.Released}</p>
                <p>Rating: {props.movie.Rated}</p>
                <p>Runtime: {props.movie.Runtime}</p>
                <p>Synopsis: {props.movie.Plot}</p>
                <p>Genre: {props.movie.Genre}</p>
                <p>Production: {props.movie.Production}</p>
        </div>
    )
}

export default MovieInfo;