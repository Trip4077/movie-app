import axios from 'axios';
import END_LOAD from './index';

export const LOADING = 'LOADING';
export const UPDATE_FAV_LIST = 'UPDATE_FAV_LIST';
export const GET_INFO = 'GET_INFO';

//GET User Favorites based on user_id
export const getFavorites = (id, username) => dispatch => {
    dispatch({ type: LOADING });

    axios.get(`https://textflix.herokuapp.com/api/favorites/${username}/${id}`)
        .then(res => dispatch({ type: UPDATE_FAV_LIST, payload: res.data }))
        .catch(err => console.log(err))
}

/*
    Expects: 

        { Poster-str, 
            Type-str, 
            Year-str, 
            imdbID-str, 
            Title-str, 
            user_id-int } 

    to add Movie to Favorites
*/
export const addFavorite = (movie, id) => dispatch => {
    dispatch({ type: LOADING });

    const movieData = {
        ...movie,
        user_id: id
    }

    axios.post(`https://textflix.herokuapp.com/api/favorites/`, movieData)
         .then( res => {
            dispatch({ type: END_LOAD });
         })
         .catch(err => console.log(err));
}

//DELETE a Favorite Movie based on favorite id
export const deleteFavorite = (id, user) => dispatch => {
    dispatch({ type: LOADING });

    axios.delete(`https://textflix.herokuapp.com/api/favorites/${id}`)
            .then(res => {
                dispatch({ type: END_LOAD });

                axios.get(`https://textflix.herokuapp.com/api/favorites/${user.username}/${user.id}`)
                    .then(res => dispatch({ type: UPDATE_FAV_LIST, payload: res.data }))
                    .catch(err => console.log(err))     
            })
            .catch(err => console.log(err));
}

//GET Movie information based on imdbID
export const getInfo = imdbID => dispatch => {
    dispatch({ type: LOADING })
    
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