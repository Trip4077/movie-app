import React from 'react';

const Thumbnail = props => {
    return(
        <div className='thumbnail'>
            {props.movie.Poster ? <img src={props.movie.Poster} alt={props.movie.Title} />
                                : undefined}

            <div className='thumbnail__text'>
                <h3>{props.movie.Title}</h3>
                <p>{props.movie.Type}</p>
            </div>
        </div>
    );
}

export default Thumbnail;