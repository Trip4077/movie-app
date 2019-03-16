import React from 'react';
import MovieInfo from './MovieInfo';

import { connect } from 'react-redux';
import { updateSchedule } from '../../actions';

const MovieSchedule = props => {
    const removeHandler = e => {
        const schedule = [ ...props.schedule ];
        schedule.filter((movie, index) => {
            if(movie.date === props.movie.date
                          && movie.time === props.movie.time
                          && movie.info.Title === props.movie.info.Title) {

                return schedule.splice(index, 1)
            }
        })

        props.updateSchedule(schedule);
    }

    return (
        <div>
            <h1 onClick={removeHandler}>X</h1>
            <img src={props.movie.info.Poster} alt={props.movie.info.Title} />
            <h3>{props.movie.date} {props.movie.time}</h3>
            <MovieInfo movie={props.movie.info} />
        </div>
    )
}

const mstp = state => {
    return {
        schedule: state.movieReducer.schedule
    }
}

export default connect(mstp, { updateSchedule })(MovieSchedule);