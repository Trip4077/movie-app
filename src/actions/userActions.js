import axios from 'axios';

export const REGISTER = 'REGISTER';
export const LOADING = 'LOADING';
export const END_LOAD = 'END_LOAD';

export const register = user => dispatch => {
    
    axios.post(`http://localhost:4321/api/auth/register`, user)
        .then(res => {
            console.log(res)
            dispatch({ type: REGISTER, payload: res.data })
        })
        .catch(err => {
            console.log(err)
        })
}