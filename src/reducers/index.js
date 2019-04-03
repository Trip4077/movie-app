import { combineReducers } from 'redux';
import { movieReducer } from './single/movieReducer';
import { scheduleReducer } from './single/scheduleReducer';
import { userReducer } from './single/userReducer';

export default combineReducers({
    movieReducer,
    scheduleReducer,
    userReducer
})