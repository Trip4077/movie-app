export const LOADING = 'LOADING';
export const UPDATE_FAV_LIST = 'UPDATE_FAV_LIST';
export const SCHEDULE_MOVIE = 'SCHEDULE_MOVIE';

export const updateMovieList = updatedFavorites => dispatch => {
    dispatch({ type: UPDATE_FAV_LIST, payload: updatedFavorites });
}

export const scheduleMovie = updatedSchedule => dispatch => {
    console.log('payload'. movie)
    dispatch({ type: SCHEDULE_MOVIE, payload: updatedSchedule })
}