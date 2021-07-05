import { FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS,FETCH_MOVIES_FAILURE } from './moviesType'
import axios from 'axios'

export const fetchMoviesRequest = () => {
    return {
        type: FETCH_MOVIES_REQUEST
    }
}
export const fetchMoviesSuccess = (movies) => {
    return {
        type: FETCH_MOVIES_SUCCESS,
        payload : movies
    }
}
export const fetchMoviesFailure = (error) => {
    return {
        type: FETCH_MOVIES_FAILURE,
        payload : error
    }
}

export const fetchMovies = () => {
    return ((dispatch) => {
        dispatch(fetchMoviesRequest())
        const options = {
            method: 'GET',
            url: 'https://data-imdb1.p.rapidapi.com/movie/order/upcoming/',
            headers: {
              'x-rapidapi-key': '0287cf982fmsh8bf5f855596fa21p172535jsn3f7bb1ded664',
              'x-rapidapi-host': 'data-imdb1.p.rapidapi.com'
            }
        };
          
        axios.request(options).then(response => {
            const movies = response.data["Movies Upcoming"]
            dispatch(fetchMoviesSuccess(movies))
        }).catch(error => {
            dispatch(fetchMoviesFailure(error.message))
        });
    })
}