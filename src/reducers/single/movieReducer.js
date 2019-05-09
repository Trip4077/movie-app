import {
    LOADING,
    UPDATE_FAV_LIST,
    GET_INFO,
} from '../../actions';

import END_LOAD from '../../actions';

const initialState = {
    loading: false,
    favorites: [],
    info: {}
}

export const movieReducer = (state = initialState, action) => {
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

        case UPDATE_FAV_LIST:
            return {
                loading: false,
                favorites: action.payload,
                schedule: state.schedule
            }

        case GET_INFO:
            return {
                ...state,
                loading: false,
                info: action.payload
            }

        default:
            return {
                ...state
            }
    }
}