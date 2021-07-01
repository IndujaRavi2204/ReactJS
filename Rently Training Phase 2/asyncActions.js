const redux = require('redux');
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

const initialState = {
    loading : false,
    data : [],
    error : "",
}
const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE'

const fetchUserRequest = () =>{
    return {
        type : FETCH_USER_REQUEST
    }
}
const fetchUserSuccess = () =>{
    return {
        type : FETCH_USER_SUCCESS,
        payloads : data
    }
}
const fetchUserFailure = () =>{
    return {
        type : FETCH_USER_FAILURE,
        payloads : error
    }
}
const reducer = (state=initialState , action) => {
    switch(action.type){
        case FETCH_USER_REQUEST:
            return{
                ...state,
                loading : true
            }
        case FETCH_USER_SUCCESS:
            return{
                ...state,
                loading : false,
                data : action.payloads,
                error : " "
            }
        case FETCH_USER_FAILURE:
            return {
                ...state,
                loading : false,
                data : [],
                error : action.payloads
            }
    }
}
const fetchData = () => {
    return ( function (dispatch) {
        dispatch(fetchUserRequest())
        const options = {
            method: 'GET',
            url: 'https://data-imdb1.p.rapidapi.com/movie/order/upcoming/',
            headers: {
              'x-rapidapi-key': '0287cf982fmsh8bf5f855596fa21p172535jsn3f7bb1ded664',
              'x-rapidapi-host': 'data-imdb1.p.rapidapi.com'
            }
        };
          
        axios.request(options).then(response => {
            data = response.data["Movies Upcoming"].map(movie => movie.title)
            dispatch(fetchUserSuccess(data))
        }).catch(error => {
            dispatch(fetchUserFailure(error.message))
        });
    })
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => {console.log(store.getState())})
store.dispatch(fetchData())