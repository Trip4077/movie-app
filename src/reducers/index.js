import { combineReducers } from 'redux';
import { movieReducer } from './single/movieReducer';
import { scheduleReducer } from './single/scheduleReducer';

export default combineReducers({
    movieReducer,
    scheduleReducer
})