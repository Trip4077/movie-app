import React from 'react';
import axios from 'axios';
import MovieList from '../components/Movies/MovieList';
import requireAuth from '../auth/requireAuth';

import { connect } from 'react-redux';
import { getFavorites, getSchedule } from '../actions';

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);


    }

    componentDidMount() {
        const id = localStorage.getItem('UID');
        const username = localStorage.getItem('username');
        
        this.props.getFavorites(id, username)
        this.props.getSchedule(id, username);
    }

    render() {
        return(
            <div className='profile'>
                <h1>Profile</h1>
                <h2>Favorites</h2>
                <MovieList results={this.props.favorites} 
                           profile />
    
                <h2>Schedule</h2>
                <MovieList results={this.props.schedule} 
                           profile />
            </div>
        );
    }
}

const mstp = state => {
    console.log(state)
    return {
        favorites: state.movieReducer.favorites,
        schedule: state.scheduleReducer.schedule,
        user: state.userReducer.user
    }
}

export default connect(mstp, { getFavorites, getSchedule })(requireAuth(ProfilePage));