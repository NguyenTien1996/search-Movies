import { createSelector } from 'reselect';

const movieSearchSelector = state => state.searchMovie.dataMovies;

const resultMovieReselect = createSelector(
    movieSearchSelector,
    item => item.results
);
export const totalResults = createSelector(
    movieSearchSelector,
    item => item.total_results
)
export const totalPages = createSelector(
    movieSearchSelector,
    item => item.total_pages
)