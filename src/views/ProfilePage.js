import React from 'react';
import { connect } from 'react-redux';

const ProfilePage = props => {
    return(
        <h1>Profile</h1>
    );
}

const mstp = state => {
    return {
        favorites: state.movieReducer.favorites
    }
}

export default connect(mstp, {})(ProfilePage);