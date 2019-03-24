import axios from 'axios';

export const LOADING = 'LOADING';
export const UPDATE_FAV_LIST = 'UPDATE_FAV_LIST';
export const UPDATE_SCHEDULE = 'UPDATE_SCHEDULE';
export const END_LOAD = 'END_LOAD';


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
            dispatch({ type: END_LOAD });
            
            axios.get(`http://localhost:4321/api/favorites/trip1701/${movieData.user_id}`)
                 .then(res => dispatch({ type: UPDATE_FAV_LIST, payload: res.data }))
                 .catch(err => console.log(err))
         })
         .catch(err => console.log(err));
}

export const deleteFavorite = (id, userID) => dispatch => {
    axios.delete(`http://localhost:4321/api/favorites/${id}`)
            .then(res => {
                dispatch({ type: END_LOAD });

                axios.get(`http://localhost:4321/api/favorites/trip1701/${userID}`)
                    .then(res => dispatch({ type: UPDATE_FAV_LIST, payload: res.data }))
                    .catch(err => console.log(err))     
            })
            .catch(err => console.log(err));
}

export const updateMovieList = updatedFavorites => dispatch => {
    dispatch({ type: UPDATE_FAV_LIST, payload: updatedFavorites });
}

export const updateSchedule = updatedSchedule => dispatch => {
    dispatch({ type: UPDATE_SCHEDULE, payload: updatedSchedule })
}