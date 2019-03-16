import React from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

class MoviePage extends React.Component {
    constructor(props) {
        super(props);

        const today = new Date()

        this.state = {
            movieData: {},
            startDate: today,
            time: `${today.getHours()}:${today.getMinutes()}`,
            daypart: 'pm'
        }
    }

    selectDate = date => {
        console.log(date)
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
            info: this.state.movieData,
            date: this.state.startDate.toDateString(), 
            time: `${this.state.time} ${this.state.daypart.toLowerCase()}`
        }

        console.log(movie)
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
                <p>TItle: {this.state.movieData.Title}</p>
                <p>Cast: {this.state.movieData.Actors}</p>
                <p>BoxOffice: {this.state.movieData.BoxOffice}</p>
                <p>Release Date: {this.state.movieData.Released}</p>
                <p>Rating: {this.state.movieData.Rated}</p>
                <p>Runtime: {this.state.movieData.Runtime}</p>
                <p>Synopsis: {this.state.movieData.Plot}</p>
                <p>Genre: {this.state.movieData.Genre}</p>
                <p>Production: {this.state.movieData.Production}</p>
                
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

export default MoviePage;