import {
    LOADING,
    UPDATE_FAV_LIST,
    END_LOAD
} from '../../actions';

const initialState = {
    loading: false,
    favorites: [],
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

        default:
            return {
                ...state
            }
    }
}