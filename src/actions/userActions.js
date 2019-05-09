import axios from 'axios';
import END_LOAD from './index';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER';

/*
    Expects:
        { fullname-str,
            username-str,
            password-str,
            number-str,
            age-int }
    to Create User
*/
export const register = user => dispatch => {
    
    axios.post(`https://textflix.herokuapp.com/api/auth/register`, user)
        .then(res => {
            console.log(res)
            dispatch({ type: REGISTER, payload: res.data })
        })
        .catch(err => {
            console.log(err)
        })
}

 //Get Logged In User based on username, UID< and token
export const login = user => dispatch => {
    const endpoint = `https://textflix.herokuapp.com/api/auth/login`;

    axios.post(endpoint, user) 
        .then(res => {
            localStorage.setItem('username', res.data.user.username);
            localStorage.setItem('UID', res.data.user.id);
            localStorage.setItem('token', res.data.token);

            dispatch({ type: LOGIN, payload: res.data });
        })
        .catch(err => {
            console.log(err);
        });
}

//Clears localStorage
export const logout = () => dispatch => {
    localStorage.removeItem('username');
    localStorage.removeItem('UID');
    localStorage.removeItem('token');

    dispatch({ type: LOGOUT })
}