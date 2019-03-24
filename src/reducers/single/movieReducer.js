import {
    LOADING,
    UPDATE_FAV_LIST,
    UPDATE_SCHEDULE,
    ADD_FAVORITE
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

        case ADD_FAVORITE:
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