export const LOADING = 'LOADING';
export const UPDATE_FAV_LIST = 'UPDATE_FAV_LIST';
export const UPDATE_SCHEDULE = 'UPDATE_SCHEDULE';

export const updateMovieList = updatedFavorites => dispatch => {
    dispatch({ type: UPDATE_FAV_LIST, payload: updatedFavorites });
}

export const updateSchedule = updatedSchedule => dispatch => {
    dispatch({ type: UPDATE_SCHEDULE, payload: updatedSchedule })
}