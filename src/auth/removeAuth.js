import React from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5050/api/users';

axios.interceptors.request.use(
    function(options) {
        console.log(options)
        delete options.headers.authorization;

        return options;
    },

    function(err) {
        return Promise.reject(err);
    }
);

export default (Component)  => {
    return class Authenticated extends React.Component {
        render() {
            const token = localStorage.getItem('token');
            return <>
                        { token ? <Component { ...this.props } /> 
                                : this.props.history.push('/') }
                   </>
        }
    }
}