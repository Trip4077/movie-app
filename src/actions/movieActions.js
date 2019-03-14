export const LOADING = 'LOADING';
export const UPDATE_FAV_LIST = 'UPDATE_FAV_LIST';

export const updateMovieList = updatedArr => dispatch => {
    dispatch({ type: UPDATE_FAV_LIST, payload: updatedArr });
}