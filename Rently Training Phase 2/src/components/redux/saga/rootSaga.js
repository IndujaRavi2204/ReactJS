import { takeLatest } from 'redux-saga/effects'
//import {fetchMoviesRequest, fetchMoviesSuccess, fetchMoviesFailure} from '../movies/moviesActions'
import { FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS,FETCH_MOVIES_FAILURE } from '../movies/moviesType'
import {storeMovies} from './storeMovies'

export default function* rootSaga () {
    yield takeLatest(FETCH_MOVIES_REQUEST,storeMovies);
}

 