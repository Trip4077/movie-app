import axios from 'axios';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
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

export const login = user => dispatch => {
    const endpoint = `http://localhost:4321/api/auth/login`;

    axios.post(endpoint, user) 
        .then(res => {
            localStorage.setItem('token', res.data.token)
            dispatch({ type: LOGIN, payload: res.data });
        })
        .catch(err => {
            console.log(err);
        });
}

export const logout = () => dispatch => {
    localStorage.removeItem('token');

    dispatch({ type: LOGOUT })
}