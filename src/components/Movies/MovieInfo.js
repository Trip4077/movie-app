import React from 'react';

const MovieInfo = props => {
    return(
        <div className='movie-info'>
            <img src={props.movie.Poster} alt={props.movie.Title} />

            <table className='striped info-table'>
                <tbody>
                    <tr>
                        <td>Title:</td>
                        <td>{props.movie.Title}</td>
                    </tr>
                    <tr>
                        <td>Synopsis:</td>
                        <td>{props.movie.Plot}</td>
                    </tr>
                    <tr>
                        <td>Rating:</td>
                        <td>{props.movie.Rated}</td>
                    </tr>
                    <tr>
                        <td>Genre:</td>
                        <td>{props.movie.Genre}</td>
                    </tr>
                    <tr>
                        <td>Runtime:</td>
                        <td>{props.movie.Runtime}</td>
                    </tr>
                    <tr>
                        <td>Release Date:</td>
                        <td>{props.movie.Released}</td>
                    </tr>
                    <tr>
                        <td>Cast:</td>
                        <td>{props.movie.Actors}</td>
                    </tr>
                    <tr>
                        <td>Production:</td>
                        <td>{props.movie.Production}</td>
                    </tr>
                    <tr>
                        <td>Box Office:</td>
                        <td>{props.movie.BoxOffice}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default MovieInfo;