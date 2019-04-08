import React from 'react';

import { connect } from 'react-redux';
import { deleteScheduled } from '../../actions';

const MovieSchedule = props => {
    const removeHandler = e => {
        e.preventDefault();
        
        props.deleteScheduled(props.movie.id, props.user);
    }

    return (
        <ul className='collapsible'>
            <li>
                <div className="collapsible-header">
                    <i className="material-icons">filter_drama</i>
                    <span>
                        You have scheduled {props.movie.title} to be viewed at {props.movie.date} - {props.movie.readTime}
                    </span>
                    <i className="material-icons" onClick={removeHandler}>delete</i>
                </div>

                <div className="collapsible-body">
                </div>
            </li>
        </ul>
    )
}

const mstp = state => {
    return {
        schedule: state.movieReducer.schedule,
        user: state.userReducer.user
    }
}

export default connect(mstp, { deleteScheduled })(MovieSchedule);