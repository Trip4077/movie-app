import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateMovieList } from '../../actions';

const Thumbnail = props => {
    const addHandler = e => {
        const favorites = [ ...props.favorites ];
        favorites.push(props.movie);

        props.updateMovieList(favorites);
    }

    const removeHandler = e => {
        const favorites = [ ...props.favorites ];
        favorites.filter((movie, index) => {
            if(movie.imdbID === props.movie.imdbID) {
                return favorites.splice(index, 1)
            }
        })

        props.updateMovieList(favorites);
    }

    return(
        <Link to={`/movie/${props.movie.imdbID}`} >
            <div className='thumbnail'>
                {props.movie.Poster ? <img src={props.movie.Poster} alt={props.movie.Title} />
                                    : undefined}

                <div className='thumbnail__text'>
                    <h3>{props.movie.Title}</h3>
                    <p>{props.movie.Type}</p>
                </div>

                <button onClick={addHandler}>Add Movie</button>
                <button onClick={removeHandler}>Remove Movie</button>
            </div>
        </Link>
    );
}

const mstp = state => {
    return { ...state.movieReducer }
}

export default connect(mstp,{ updateMovieList })(Thumbnail);