const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const COUNTER = 'COUNTER'
const DECREMENTER = 'DECREMENTER'
function counter(){ // action creator
    return {
        type : COUNTER 
    }
}
function decrementer(){
    return{
        type: DECREMENTER
    }
}
const initialIncrementerState = {
    incrementer : 1,
}

const initialDecrementerState = {
    decrementer : 10,
}
const incrementerReducer = (state=initialIncrementerState, action) => {
    switch(action.type){
        case COUNTER: return {
            ...state,
            incrementer : state.incrementer + 1
        }
        default: return state
    }
}
const decrementerReducer = (state=initialDecrementerState, action) => {
    switch(action.type){
        case DECREMENTER:return{
            ...state,
            decrementer : state.decrementer - 1
        }
        default: return state
    }
}

const reducer = combineReducers({
    add : incrementerReducer,
    sub : decrementerReducer
})
const store = createStore(reducer, applyMiddleware(logger))
console.log("Initial state : ",store.getState())
const unsubscribe = store.subscribe(() => {})
store.dispatch(counter())
store.dispatch(counter())
store.dispatch(counter())
store.dispatch(decrementer())
store.dispatch(decrementer())
store.dispatch(decrementer())
unsubscribe()