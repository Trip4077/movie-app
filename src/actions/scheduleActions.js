import axios from 'axios';
import END_LOAD from './index';

export const UPDATE_SCHEDULE = 'UPDATE_SCHEDULE';
export const TEXT_SENT = 'TEXT_SENT'; 


//GET User Schedule based on user_id
export const getSchedule = (id, username) => dispatch => {

    axios.get(`https://textflix.herokuapp.com/api/schedule/${username}/${id}`)
         .then(res => dispatch({ type: UPDATE_SCHEDULE, payload: res.data }))
         .catch(err => console.log(err));
}

/* 
    Expects: 
        { imdb-str, 
          date-str, 
          readTime-str, 
          compareTime-str, 
          title-str, 
          user_id-int }
    To Schedule A Reminder
*/
export const schedule = movie => dispatch => {
    console.log(movie)

    axios.post(`https://textflix.herokuapp.com/api/schedule`, movie)
         .then(res => {
             dispatch({ type: UPDATE_SCHEDULE, payload: res.data })
         })
         .catch(err => console.log(err));
}

//DELETE Scheduled Reminder based on schedule id and user_id
export const deleteScheduled = (id, user) => dispatch => {
    axios.delete(`https://textflix.herokuapp.com/api/schedule/${id}`)
        .then(res => {
            dispatch({ type: END_LOAD });

            axios.get(`https://textflix.herokuapp.com/api/schedule/${user.username}/${user.id}`)
                 .then(res => dispatch({ type: UPDATE_SCHEDULE, payload: res.data }))
                 .catch(err => console.log(err));            
        })
        .catch(err => {
            console.log(err)
        })
}

// Expects { number-str, text-str }
export const sendSms = textInfo => dispatch => {
    axios.post('https://textflix.herokuapp.com/api/schedule/send', textInfo)
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