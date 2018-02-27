import { combineReducers } from 'redux';

import todoReducer from './todoReducer';
import apiReducer from './apiReducer';
import createReducer from './createReducer';
import deleteReducer from './deleteReducer';

const todoApp = combineReducers({
	// no need to provid a key/val pair if same names 
	todos: todoReducer,
	todosApi: apiReducer,
	createApi: createReducer,
	deleteApi: deleteReducer
});

export default todoApp;