import React from 'react';
import SearchMovies from '../../components/search';
import ResultMovies from '../../components/result';
import PaginationPage from '../../components/pagination';

const appMovies = () => {
    return (
        <>
            <SearchMovies/>
            <ResultMovies/>
            <PaginationPage/>
        </>
    )
}
export default React.memo(appMovies)