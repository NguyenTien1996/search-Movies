import {put, call, takeLatest} from 'redux-saga/effects';
import * as types from '../actions/types';
import * as actions from '../actions/index';
import * as api from '../service/api';

function* searchMovieSaga({nameMovie}) {
    try{
        yield put(actions.startSearchMovies(true));
        const data = yield call(api.searchMovieByKeywords, nameMovie);
            if(data.result.length > 0){
                yield put(actions.searchMovieSuccess(data));
            }else{
            yield put(actions.searchMovieFail({
                code: 404,
                message:"Not Found data",
            }));
        }
        yield put(actions.stopSearchMovies(false));
    }catch(e){
        yield put(actions.searchMovieFail(e));
    }
}
//tho doi hanh dong (ham tren no xu ly)
export default function* watchSearchMovieSaga() {
    yield takeLatest(types.SEARCH_MOVIES, searchMovieSaga)
}