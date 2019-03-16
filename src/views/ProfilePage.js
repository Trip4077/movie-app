import React from 'react';
import MovieList from '../components/Movies/MovieList';

import { connect } from 'react-redux';

const ProfilePage = props => {
    return(
        <div className='profile'>
            <h1>Profile</h1>
            <MovieList results={props.favorites} profile />
        </div>
    );
}

const mstp = state => {
    return {
        favorites: state.movieReducer.favorites
    }
}

export default connect(mstp, {})(ProfilePage);