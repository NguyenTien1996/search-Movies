import React from 'react';
import { Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import configStore from '../../store/configStore';
import AppMovies from '../movies/movie';
import { Spin } from 'antd';

const { store, persistor} = configStore({});

const HomeMovies = () => {
    return(
        <Provider store= {store}>
            <PersistGate 
                loading={<Spin />}
                persistor={persistor}
            >
                <AppMovies/>
            </PersistGate>
        </Provider>
    )
}
export default React.memo(HomeMovies)