import React from 'react';
import MovieList from '../components/Movies/MovieList';

import { connect } from 'react-redux';
import { getFavorites, getSchedule, sendSms } from '../actions';

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getFavorites(1)
        this.props.getSchedule(1);
        console.log(this.props)
    }

    send = e => {
        e.preventDefault();

        const movie = this.props.schedule[0]

        const textInfo = {
            text: `${movie.title} is scheduled at ${movie.readTime} on ${movie.date}`,
            number: '12764691994'
        }
        
        console.log(textInfo)
        this.props.sendSms(textInfo)
    }

    render() {
        return(
            <div className='profile'>
                <h1>Profile</h1>
                <h2>Favorites</h2>
                <MovieList results={this.props.favorites} profile />
    
                <h2>Schedule</h2>
                <MovieList results={this.props.schedule} profile />

                <button onClick={this.send}>Text</button>
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

export default connect(mstp, { getFavorites, getSchedule, sendSms })(ProfilePage);