import {
    LOADING,
    UPDATE_FAV_LIST,
    SCHEDULE_MOVIE
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

        case UPDATE_FAV_LIST:
            return {
                loading: false,
                favorites: action.payload,
                schedule: state.schedule
            }

        case SCHEDULE_MOVIE:
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