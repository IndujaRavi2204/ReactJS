import { createStore, applyMiddleware } from 'redux'
//import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './rootReducer'
import logger from 'redux-logger'
import rootSaga from './saga/rootSaga'


const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer , composeWithDevTools(applyMiddleware(logger,sagaMiddleware)))
sagaMiddleware.run(rootSaga)

export default store 