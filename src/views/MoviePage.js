import React from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

class MoviePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movieData: {},
            startDate: new Date()
        }
    }

    handleChange = (date) => {
        this.setState({
            startDate: date
        });
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
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

export default MoviePage;