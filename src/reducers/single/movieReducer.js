import {
    LOADING,
    UPDATE_FAV_LIST,
    UPDATE_SCHEDULE,
    END_LOAD
} from '../../actions';

const initialState = {
    loading: false,
    favorites: [],
    schedule: []
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

        case UPDATE_SCHEDULE:
            return {
                loading: false,
                favorites: state.favorites,
                schedule: action.payload
            }

        default:
            return {
                ...state
            }
    }
}