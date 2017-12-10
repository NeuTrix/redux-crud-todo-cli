import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers';

import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

const middleware = applyMiddleware(promise(),thunk, logger);

export default function configureStore(initialState) {

	return createStore(rootReducer, initialState, middleware);

}