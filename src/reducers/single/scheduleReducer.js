import {
    LOADING,
    UPDATE_SCHEDULE,
    TEXT_SENT,
    END_LOAD
} from '../../actions';

const initialState = {
    loading: false,
    schedule: [],
}

export const scheduleReducer = (state = initialState, action) => {
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

        case UPDATE_SCHEDULE:
            return {
                loading: false,
                favorites: state.favorites,
                schedule: action.payload
            }

        case TEXT_SENT:
            return {
                ...state,
                loading: false
            }

        default:
            return {
                ...state
            }
    }
}