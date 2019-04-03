import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFavorite, deleteFavorite } from '../../actions';

const Thumbnail = props => {
    const addHandler = e => {
        e.preventDefault();
        props.addFavorite(props.movie, props.user.id);
    }

    const removeHandler = e => {
        props.deleteFavorite(props.movie.id, props.user);
    }

    return(
        <div className='thumbnail'>
            <Link to={`/movie/${props.movie.imdbID}`} >
                <div className='thumbnail__display'>
                    {props.movie.Poster ? <img src={props.movie.Poster} alt={props.movie.Title} />
                                        : undefined}

                    <div className='thumbnail__display__text'>
                        <h3>{props.movie.Title}</h3>
                        <p>{props.movie.Type}</p>
                    </div>
                </div>
            </Link>

            <div className='thumbnail__btns'>
                { !props.profile ? <button onClick={addHandler}>Add Movie</button> : null }
                <button onClick={removeHandler}>Remove Movie</button>
            </div>
        </div>
    );
}

const mstp = state => {
    return { 
        ...state.movieReducer,
        user: state.userReducer.user
    }
}

export default connect(mstp,{ addFavorite, deleteFavorite })(Thumbnail);