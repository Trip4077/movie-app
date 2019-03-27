import React from 'react';
import MovieInfo from './MovieInfo';

import { connect } from 'react-redux';

const MovieSchedule = props => {
    const removeHandler = e => {
        const schedule = [ ...props.schedule ];
        
        schedule.filter((movie, index) => {

            if(movie.date === props.movie.date
               && movie.time === props.movie.time) {

                return schedule.splice(index, 1)
            }
        })

        props.updateSchedule(schedule);
    }

    return (
        <div>
            <h1 onClick={removeHandler}>X</h1>
            <h2>{props.movie.title}</h2>
            <h3>{props.movie.date} {props.movie.readTime}</h3>
        </div>
    )
}

const mstp = state => {
    return {
        schedule: state.movieReducer.schedule
    }
}

export default connect(mstp, {  })(MovieSchedule);