import axios from 'axios';

export const LOADING = 'LOADING';
export const UPDATE_FAV_LIST = 'UPDATE_FAV_LIST';
export const GET_INFO = 'GET_INFO';
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

export const deleteFavorite = (id, user) => dispatch => {
    axios.delete(`http://localhost:4321/api/favorites/${id}`)
            .then(res => {
                dispatch({ type: END_LOAD });

                axios.get(`http://localhost:4321/api/favorites/${user.username}/${user.id}`)
                    .then(res => dispatch({ type: UPDATE_FAV_LIST, payload: res.data }))
                    .catch(err => console.log(err))     
            })
            .catch(err => console.log(err));
}

export const getInfo = imdbID => dispatch => {
    axios.get(`http://www.omdbapi.com/?i=${imdbID}&plot=full&apikey=db6f6716`)
        .then(res => {
            dispatch({ type: GET_INFO, payload: res.data });
        }).catch(err => {
            console.log(err)
        })
}

export const updateMovieList = updatedFavorites => dispatch => {
    dispatch({ type: UPDATE_FAV_LIST, payload: updatedFavorites });
}