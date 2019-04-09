import React from 'react';
import Load from '../components/Loader/Load';
import MovieList from '../components/Movies/MovieList';
import requireAuth from '../auth/requireAuth';

import { connect } from 'react-redux';
import { getFavorites, getSchedule } from '../actions';

class ProfilePage extends React.Component {
    componentDidMount() {
        const id = localStorage.getItem('UID');
        const username = localStorage.getItem('username');
        
        this.props.getFavorites(id, username)
        this.props.getSchedule(id, username);
    }

    render() {
        const { favLoad, scheduleLoad } = this.props;
  
        /* Check If Loading */
        if(favLoad || scheduleLoad) {
            return <Load />
        }

        const username = localStorage.getItem('username');

        return(
            <div className='profile'>
                <div className='section'>
                    <h2>Welcome, { username }</h2>
                </div>
                <div className='divider'></div>
                
                <h4>Favorites</h4>
                <div className='divider'></div>

                <MovieList results={this.props.favorites} 
                           profile />
    
                <h4>Schedule</h4>
                <div className='divider'></div>

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
        favLoad: state.movieReducer.loading,
        schedule: state.scheduleReducer.schedule,
        scheduleLoad: state.scheduleReducer.loading,
        user: state.userReducer.user
    }
}

export default connect(mstp, { getFavorites, getSchedule })(requireAuth(ProfilePage));