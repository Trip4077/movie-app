import React from 'react';

import { withRouter } from 'react-router-dom';
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
        this.props.history.push('/profile');
    }

    render() {
        return(
            <div>
                <form onSubmit={ this.login }
                      className='center-align form-shape grey lighten-3'>

                    <h2>Login</h2>

                    <div className='input-field'>
                        <input id='username...'
                                name='username'
                                value={ this.state.username }
                                onChange={this.handleChange}
                                type='text'
                                className="validate"
                                />
                        <label htmlFor='username'>Username</label>
                    </div>

                    <div className='input-field'>
                        <input id='password'
                                name='password'
                                value={ this.state.password }
                                onChange={this.handleChange}
                                type='text'
                                className="validate"
                                />
                        <label htmlFor='password'>Password</label>
                    </div>

                    <button onClick={this.login}
                            className='btn waves-effect waves-red amber black-text'>
                        Login
                        <i className="material-icons right teal-text">send</i>
                    </button>

                </form>
            </div>
        );
    }
}

export default connect(null, { login })(withRouter(Login));