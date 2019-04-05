import React from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5050/api/users';

axios.interceptors.request.use(
    function(options) {

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
            return <>
                        <Component { ...this.props } />           
                   </>
        }
    }
}