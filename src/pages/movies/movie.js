import React from 'react';
import SearchMovies from '../../components/search';
import ResultMovies from '../../components/result';

const appMovies = () => {
    return (
        <>
            <SearchMovies/>
            <ResultMovies/>
        </>
    )
}
export default React.memo(appMovies)