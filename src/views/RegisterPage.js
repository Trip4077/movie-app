import React from 'react';

import { connect } from 'react-redux';
import { register } from '../actions';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fullname: '',
            age: '',
            number: '',
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

    register = e => {
        e.preventDefault();

        const user = { ...this.state }
        user.age = Number(this.state.age);

        this.props.register(user);
    }

    render() {
        return(
            <div>
                <form onSubmit={ this.register }
                      className='form-shape grey lighten-3'>

                    <h2>Register</h2>

                    <div className='input-field'>  
                        <input id='fullname'
                               name='fullname'
                               value={ this.state.fullname }
                               onChange={this.handleChange}
                               type='text'
                            />

                        <label htmlFor='fullname'>Full Name</label>
                    </div>

                    <div className='input-field'>
                        <input id='username'
                               name='username'
                               value={ this.state.username }
                               onChange={this.handleChange}
                               type='text'
                             />

                        <label htmlFor='username'>Username</label>
                    </div>

                    <div className='input-field'>
                        <input id='password'
                               name='password'
                               value={ this.state.password }
                               onChange={this.handleChange}
                               type='text'
                            />

                        <label htmlFor='password'>Password</label>
                    </div>

                    <div className='input-field'>
                        <input id='age'
                               name='age'
                               value={ this.state.age }
                               onChange={this.handleChange}
                               type='text'
                            />
                        
                        <label htmlFor='age'>Age</label>
                    </div>

                    <div className='input-field'>
                        <input id='number'
                               name='number'
                               value={ this.state.number }
                               onChange={this.handleChange}
                               type='text'
                            />
                        <label htmlFor='number'>Phone Number</label>
                    </div>

                    <button onClick={ this.register }
                            className='btn amber black-text'>
                            Register
                    </button>
                </form>
            </div>
        );
    }
}

const mstp = state => {
    console.log(state)
    return {
        userData: state.userReducer.user
    }
}

export default connect(mstp, { register })(RegisterPage);