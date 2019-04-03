import React from 'react';

import { connect } from 'react-redux';
import { login } from '../actions';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

    login = e => {
        e.preventDefault();

        const user = { ...this.state }

        this.props.login(user);
    }

    render() {
        return(
            <div>
                <form onSubmit={ this.login }>
                    <input placeholder='username...'
                           name='username'
                           value={ this.state.username }
                           onChange={this.handleChange}
                           type='text'
                           />

                    <input placeholder='password'
                           name='password'
                           value={ this.state.password }
                           onChange={this.handleChange}
                           type='text'
                           />

                    <button onClick={this.login}>
                        Login
                    </button>
                </form>
            </div>
        );
    }
}

export default connect(null, { login })(Login);