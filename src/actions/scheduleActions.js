import axios from 'axios';

export const UPDATE_SCHEDULE = 'UPDATE_SCHEDULE';
export const LOADING = 'LOADING';
export const END_LOAD = 'END_LOAD';

export const getSchedule = id => dispatch => {
    const username = 'trip1701';
    
    axios.get(`http://localhost:4321/api/schedule/${username}/${id}`)
         .then(res => dispatch({ type: UPDATE_SCHEDULE, payload: res.data }))
         .catch(err => console.log(err));
}

export const updateSchedule = updatedFavorites => dispatch => {
    dispatch({ type: UPDATE_SCHEDULE, payload: updatedFavorites });
}