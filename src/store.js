import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import { myLogger } from './middlewares/mylogger'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, logger)))

export default store
