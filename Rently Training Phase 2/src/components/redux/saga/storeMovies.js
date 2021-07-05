import { call,put } from 'redux-saga/effects'
import { fetchMoviesSaga } from './fetchMoviesSaga'
import { fetchMoviesSuccess, fetchMoviesFailure} from '../movies/moviesActions'

export function* storeMovies(action){
    try{
        const movies = yield call(fetchMoviesSaga)
        //const movies = response
        console.log("Movies Store : ",movies)
        //console.log("Response:",response)
        yield put(fetchMoviesSuccess(movies));
    }catch (error){
        console.log(error.message)
        yield put(fetchMoviesFailure(error))
    }
}