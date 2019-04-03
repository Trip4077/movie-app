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
                <form onSubmit={ this.register }>
                    <input placeholder='full name...'
                           name='fullname'
                           value={ this.state.fullname }
                           onChange={this.handleChange}
                           type='text'
                           />

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

                    <input placeholder='age...'
                           name='age'
                           value={ this.state.age }
                           onChange={this.handleChange}
                           type='text'
                           />

                    <input placeholder='phone number...'
                           name='number'
                           value={ this.state.number }
                           onChange={this.handleChange}
                           type='text'
                           />

                    <button onClick={ this.register }>Register</button>
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