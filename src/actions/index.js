import * as types from './types';

export const searchMovies = (nameMovie) => ({
    type: types.SEARCH_MOVIES,
    nameMovie
});

//dinh nghia action 
export const startSearchMovies = (loading) => ({
    type: types.START_SEARCH_MOVIES,
    loading
})
export const stopSearchMovies = (loading) => ({
    type: types.END_SEARCH_MOVIES,
    loading
})
export const searchMovieSuccess = (movies) => ({
    type: types.SEARCH_MOVIES_SUCCESS,
    movies
})
export const searchMovieFail = (error) => ({
    type: types.SEARCH_MOVIES_FAIL,
    error
})