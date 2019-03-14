import React from 'react';

import { Link } from 'react-router-dom';

const Thumbnail = props => {
    return(
        <Link to={`/movie/${props.movie.imdbID}`} >
            <div className='thumbnail'>
                {props.movie.Poster ? <img src={props.movie.Poster} alt={props.movie.Title} />
                                    : undefined}

                <div className='thumbnail__text'>
                    <h3>{props.movie.Title}</h3>
                    <p>{props.movie.Type}</p>
                </div>
            </div>
        </Link>
    );
}

export default Thumbnail;