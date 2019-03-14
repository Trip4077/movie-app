import {
    LOADING,
    UPDATE_FAV_LIST
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

        case UPDATE_FAV_LIST:
            return {
                loading: false,
                favorites: action.payload
            }

        default:
            return {
                ...state
            }
    }
}