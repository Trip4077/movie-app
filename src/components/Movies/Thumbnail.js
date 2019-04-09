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

    /* To Be Rendered on Search Page */
    const addButton = <button className="btn-floating halfway-fab waves-effect waves-light red black-text  fav-btn"
                              onClick={addHandler}>

                             <i className="material-icons">add</i>
                      </button>

    /* To Be Rendered on Profile Page */
    const removeButton = <button className="btn-floating halfway-fab waves-effect waves-light grey black-text fav-btn"
                                 onClick={removeHandler}>
                                
                                <i className="material-icons">close</i>
                        </button>

    return(
        <div className='thumbnail'>
            <Link to={`/movie/${props.movie.imdbID}`} >
                <div className="row">
                    <div className="col s12 m12">
                        <div className="card large z-depth-3">
                            <div className="card-image">
                                <img src={props.movie.Poster} alt={props.movie.Title}/>
                            </div>
                            
                            <div className="card-content">
                                <p className='black-text'>{props.movie.Title} was released in {props.movie.Year}</p>
                                <p>Click For More Info</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>

            <div className='thumbnail__btns'>
                { !props.profile ? addButton : removeButton }
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