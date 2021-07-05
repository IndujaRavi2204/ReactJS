//import { takeLatest , call, put, } from 'redux-saga/effects'
//import { FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS,FETCH_MOVIES_FAILURE } from '../movies/moviesType'
//import {fetchMoviesRequest, fetchMoviesSuccess, fetchMoviesFailure} from '../movies/moviesActions'
import axios from 'axios'

export function fetchMoviesSaga(){
    const options = {
        method: 'GET',
        url: 'https://data-imdb1.p.rapidapi.com/movie/order/upcoming/',
        headers: {
            'x-rapidapi-key': '0287cf982fmsh8bf5f855596fa21p172535jsn3f7bb1ded664',
            'x-rapidapi-host': 'data-imdb1.p.rapidapi.com'
        }
    };
    const promise = axios.request(options)
    const movies = promise.then((response) => response.data["Movies Upcoming"])
    console.log("Fetched: ",typeof(movies))
    return movies
}
