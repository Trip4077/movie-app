import React from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import MovieInfo from '../components/Movies/MovieInfo';

import { connect } from 'react-redux';
import { schedule } from '../actions';

import "react-datepicker/dist/react-datepicker.css";

class MoviePage extends React.Component {
    constructor(props) {
        super(props);

        const today = new Date()

        this.state = {
            movieData: {},
            startDate: today,
            time: `${today.getHours()}:${today.getMinutes()}`,
            daypart: 'AM'
        }
    }

    selectDate = date => {
        this.setState({
            startDate: date
        })
    }

    handleChange = e => {
        this.setState({
            ...this.state,
        [e.target.name]: e.target.value
        });
    }

    scheduleDate = () => {
        const movie = {
            date: this.state.startDate.toDateString(), 
            compareTime: JSON.stringify(this.state.startDate),
            readTime: `${this.state.time} ${this.state.daypart.toLowerCase()}`,
            title: this.state.movieData.Title,
            imdb: this.state.movieData.imdbID,
            user_id: 1
        }

        console.log(movie)
        this.props.schedule(movie)
    }

    componentDidMount() {
        axios.get(`http://www.omdbapi.com/?i=${this.props.match.params.id}&plot=full&apikey=db6f6716`)
             .then(res => {
                 this.setState({ movieData: res.data })
             }).catch(err => {
                 console.log(err)
             })
    }

    render() {
        return(
            <div>
                <MovieInfo movie={this.state.movieData} />
                
                <input type='text'
                       name='time'
                       onChange={this.handleChange}
                       value={this.state.time}
                       />

                <select onChange={this.handleChange} value={this.state.daypart} name='daypart'>
                    <option>AM</option>
                    <option>PM</option>
                </select>

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
        schedule: { ...state.scheduleReducer }
    }
}

export default connect(mstp, { schedule })(MoviePage);