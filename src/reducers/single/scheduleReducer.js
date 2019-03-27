import {
    LOADING,
    UPDATE_SCHEDULE,
    END_LOAD
} from '../../actions';
import { AST_EmptyStatement } from 'terser';

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

        default:
            return {
                ...state
            }
    }
}