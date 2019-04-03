import axios from 'axios';

export const LOADING = 'LOADING';
export const UPDATE_FAV_LIST = 'UPDATE_FAV_LIST';
export const END_LOAD = 'END_LOAD';


export const getFavorites = (id, username) => dispatch => {
    axios.get(`http://localhost:4321/api/favorites/${username}/${id}`)
        .then(res => dispatch({ type: UPDATE_FAV_LIST, payload: res.data }))
        .catch(err => console.log(err))
}

export const addFavorite = (movie, id) => dispatch => {
    const movieData = {
        ...movie,
        user_id: id
    }

    axios.post(`http://localhost:4321/api/favorites/`, movieData)
         .then( res => {
            dispatch({ type: END_LOAD });
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