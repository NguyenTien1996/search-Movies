import React from 'react';
import { Provider} from 'react-redux';
import configStore from '../../store/configStore';
import AppMovies from '../movies/movie';

const { store} = configStore({});

const HomeMovies = () => {
    return(
        <Provider store= {store}>
            <AppMovies/>
        </Provider>
    )
}
export default React.memo(HomeMovies)