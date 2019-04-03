import {
    LOADING,
    END_LOAD,
    REGISTER
} from '../../actions';

const initialState = {
    loading: false,
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
                user: action.payload
            }

        default:
            return { ...state }
    }
}