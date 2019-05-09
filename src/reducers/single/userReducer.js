import {
    LOADING,
    REGISTER,
    LOGIN,
    LOGOUT
} from '../../actions';

import END_LOAD from '../../actions';

const initialState = {
    loading: false,
    userID: null,
    user: {}
}

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOADING:
        return {
            ...state,
            loading: true
        }

        case END_LOAD:
            return {
                ...state,
                loading: false
            }

        case REGISTER: 
            return {
                loading: false,
                userID: action.payload
            }

        case LOGIN:
            localStorage.setItem( 'token', action.payload.token )

            delete action.payload.user.password

            return {
                loading: false,
                user: action.payload.user
            }

        case LOGOUT:
            return { ...initialState }

        default:
            return { ...state }
    }
}