import React from 'react';
import MovieList from '../components/Movies/MovieList';

import { connect } from 'react-redux';

const ProfilePage = props => {
    return(
        <div className='profile'>
            <h1>Profile</h1>
            <h2>Favorites</h2>
            <MovieList results={props.favorites} profile />

            <h2>Schedule</h2>
            <MovieList results={props.schedule} profile />
        </div>
    );
}

const mstp = state => {
    return {
        favorites: state.movieReducer.favorites,
        schedule: state.movieReducer.schedule
    }
}

export default connect(mstp, {})(ProfilePage);