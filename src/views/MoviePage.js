import React from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import TimePicker from 'rc-time-picker';
import MovieInfo from '../components/Movies/MovieInfo';
import requireAuth from '../auth/requireAuth';

import { connect } from 'react-redux';
import { schedule } from '../actions';

import "react-datepicker/dist/react-datepicker.css";
import 'rc-time-picker/assets/index.css';

class MoviePage extends React.Component {
    constructor(props) {
        super(props);

        const today = new Date()

        this.state = {
            movieData: {},
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
            title: this.state.movieData.Title,
            imdb: this.state.movieData.imdbID,
            user_id: this.props.user.id
        }

        console.log(movie)
        this.props.schedule(movie, this.props.user.id);
    }

    componentDidMount() {
        const imdbID = this.props.match.params.id;

        axios.get(`http://www.omdbapi.com/?i=${imdbID}&plot=full&apikey=db6f6716`)
             .then(res => {
                 console.log(res)
                 this.setState({ movieData: res.data })
             }).catch(err => {
                 console.log(err)
             })
    }

    render() {
        return(
            <div>
                <MovieInfo movie={this.state.movieData} />

                <TimePicker placeholder='Select Time'
                            use12Hours 
                            className='xxx'
                            name='time'
                            onChange={this.selectTime}
                            />

                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.selectDate}
                />

                <button onClick={this.scheduleDate}>Schedule</button>
            </div>
        );
    }
}

const mstp = state => {
    return {
        movieLists: { ...state.movieReducer },
        schedule: { ...state.scheduleReducer },
        user: state.userReducer.user
    }
}

export default connect(mstp, { schedule })(requireAuth(MoviePage));