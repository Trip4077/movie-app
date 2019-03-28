import React from 'react';

import { connect } from 'react-redux';
import { deleteScheduled } from '../../actions';

const MovieSchedule = props => {
    const removeHandler = e => {
        e.preventDefault();
        
        props.deleteScheduled(props.movie.id);
    }

    return (
        <div>
            <h1 onClick={removeHandler}>X</h1>
            <h2>{props.movie.title}</h2>
            <h3>{props.movie.date} - {props.movie.readTime}</h3>
            <p></p>
        </div>
    )
}

const mstp = state => {
    return {
        schedule: state.movieReducer.schedule
    }
}

export default connect(mstp, { deleteScheduled })(MovieSchedule);