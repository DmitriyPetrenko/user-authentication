// Core
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// Reducers
import { rootReducer } from '../reducers';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
