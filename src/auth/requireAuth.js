import React from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5050/api/users';

//Adds JWT to headers.authorization
axios.interceptors.request.use(
    function(options) {
        options.headers.authorization = localStorage.getItem('token');
        return options;
    },

    function(err) {
        return Promise.reject(err);
    }
);

//Validate existence of JWT, render component if found else prompt login
export default (Component)  => {
    return class Authenticated extends React.Component {
        componentDidMount() {
            const token = localStorage.getItem('token');

            if(!token) { this.props.history.push('/') }
        }

        render() {
            const token = localStorage.getItem('token');

            return <>
                        { token ? <Component { ...this.props } /> 
                                : <p>Please Login</p> }
                   </>
        }
    }
}