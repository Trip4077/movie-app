import React from 'react';
import MovieList from '../components/Movies/MovieList';

import { connect } from 'react-redux';
import { getFavorites, getSchedule } from '../actions';

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getFavorites(1)
        this.props.getSchedule(1);
        console.log(this.props)
    }

    render() {
        return(
            <div className='profile'>
                <h1>Profile</h1>
                <h2>Favorites</h2>
                <MovieList results={this.props.favorites} profile />
    
                <h2>Schedule</h2>
                <MovieList results={this.props.schedule} profile />
            </div>
        );
    }
}

const mstp = state => {
    console.log(state)
    return {
        favorites: state.movieReducer.favorites,
        schedule: state.scheduleReducer.schedule
    }
}

export default connect(mstp, { getFavorites, getSchedule })(ProfilePage);