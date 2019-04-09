import React from 'react';

import DatePicker from 'react-datepicker';
import TimePicker from 'rc-time-picker';
import MovieInfo from '../components/Movies/MovieInfo';
import Load from '../components/Loader/Load';

import { connect } from 'react-redux';
import { schedule, getInfo } from '../actions';

import "react-datepicker/dist/react-datepicker.css";
import 'rc-time-picker/assets/index.css';

class MoviePage extends React.Component {
    constructor(props) {
        super(props);

        const today = new Date()

        this.state = {
            startDate: today,
            time: `${today.getHours()}:${today.getMinutes()}`,
        }
    }

    selectDate = date => {
        this.setState({
            startDate: date
        })
    }

    selectTime = value => {
        this.setState({ time: value.format('HH:mm') })
    }

    scheduleDate = () => {
        const movie = {
            date: this.state.startDate.toDateString(), 
            compareTime: this.state.time,
            readTime: this.state.time,
            title: this.props.info.Title,
            imdb: this.props.info.imdbID,
            user_id: localStorage.getItem('UID')
        }

        console.log(movie)
        this.props.schedule(movie, this.props.user.id);
    }

    componentDidMount() {
        const imdbID = this.props.match.params.id;

        this.props.getInfo(imdbID);
    }

    render() {
        /* Check If Loading */
        if(this.props.movieLists.loading) {
            return <Load />
        }

        return(
            <div className='movie-page'>
                { this.props.info.Title ? <MovieInfo movie={this.props.info} /> : undefined }

                <div className='section'>
                    <h4>Schedule Your Showing:</h4>
                </div>
                <div className='divider'></div>

                <div className='scheduler'>
                    <div className='picker-container'>
                        <h6>Time:</h6>
                        <TimePicker placeholder='Select Time'
                                    use12Hours 
                                    className='xxx'
                                    name='time'
                                    onChange={this.selectTime}
                                    />

                        <h6>Date:</h6>
                        <DatePicker
                            className='dp'
                            selected={this.state.startDate}
                            onChange={this.selectDate}
                        />
                    </div>

                    <button onClick={this.scheduleDate}
                            className='btn waves-effect waves-light amber black-text'
                            >
                        Schedule
                    </button>
                </div>
            </div>
        );
    }
}

const mstp = state => {
    return {
        movieLists: { ...state.movieReducer },
        schedule: { ...state.scheduleReducer },
        info: { ...state.movieReducer.info },
        user: state.userReducer.user
    }
}

export default connect(mstp, { schedule, getInfo })(MoviePage);