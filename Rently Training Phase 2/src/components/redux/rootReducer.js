import { combineReducers } from 'redux'
import incrementerReducer from './incrementer/incrementerReducer'
import decrementerReducer from './decrementer/decrementerReducer'
import moviesReducer from './movies/moviesReducer'

const rootReducer = combineReducers({
    add : incrementerReducer,
    sub : decrementerReducer,
    movies :  moviesReducer,
})

export default rootReducer

