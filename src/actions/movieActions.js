import axios from 'axios';

export const LOADING = 'LOADING';
export const UPDATE_FAV_LIST = 'UPDATE_FAV_LIST';
export const UPDATE_SCHEDULE = 'UPDATE_SCHEDULE';
export const ADD_FAVORITE = 'ADD_FAVORITE';


export const getFavorites = id => dispatch => {
    axios.get(`http://localhost:4321/api/favorites/trip1701/${id}`)
        .then(res => dispatch({ type: UPDATE_FAV_LIST, payload: res.data }))
        .catch(err => console.log(err))
}

export const addFavorite = movie => dispatch => {
    const movieData = {
        ...movie,
        user_id: 1
    }

    axios.post(`http://localhost:4321/api/favorites/`, movieData)
         .then( res => {
            dispatch({ type: ADD_FAVORITE });
            
            /* Update All Trips after Addition */
            axios.get(`http://localhost:4321/api/favorites/trip1701/1`)
                 .then(res => dispatch({ type: UPDATE_FAV_LIST, payload: res.data }))
                 .catch(err => console.log(err))
         })
         .catch(err => console.log(err));

    dispatch({ type: ADD_FAVORITE });
}

export const updateMovieList = updatedFavorites => dispatch => {
    dispatch({ type: UPDATE_FAV_LIST, payload: updatedFavorites });
}

export const updateSchedule = updatedSchedule => dispatch => {
    dispatch({ type: UPDATE_SCHEDULE, payload: updatedSchedule })
}