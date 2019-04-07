import axios from 'axios';

export const UPDATE_SCHEDULE = 'UPDATE_SCHEDULE';
export const TEXT_SENT = 'TEXT_SENT'; 
export const LOADING = 'LOADING';
export const END_LOAD = 'END_LOAD';

export const getSchedule = (id, username) => dispatch => {

    axios.get(`http://localhost:4321/api/schedule/${username}/${id}`)
         .then(res => dispatch({ type: UPDATE_SCHEDULE, payload: res.data }))
         .catch(err => console.log(err));
}

export const schedule = movie => dispatch => {
    console.log(movie)

    axios.post(`http://localhost:4321/api/schedule`, movie)
         .then(res => {
             dispatch({ type: UPDATE_SCHEDULE, payload: res.data })
         })
         .catch(err => console.log(err));
}

export const deleteScheduled = (id, user) => dispatch => {
    axios.delete(`http://localhost:4321/api/schedule/${id}`)
        .then(res => {
            dispatch({ type: END_LOAD });

            axios.get(`http://localhost:4321/api/schedule/${user.username}/${user.id}`)
                 .then(res => dispatch({ type: UPDATE_SCHEDULE, payload: res.data }))
                 .catch(err => console.log(err));            
        })
        .catch(err => {
            console.log(err)
        })
}

export const sendSms = textInfo => dispatch => {
    axios.post('http://localhost:4321/api/schedule/send', textInfo)
        .then(res => {
            console.log(res)
            dispatch({ type: TEXT_SENT, payload: res.data })
        }).catch(err => {
            console.log(err)
        })
}

export const updateSchedule = updatedFavorites => dispatch => {
    dispatch({ type: UPDATE_SCHEDULE, payload: updatedFavorites });
}