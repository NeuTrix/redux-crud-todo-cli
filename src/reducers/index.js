import { combineReducers } from 'redux';

import todoReducer from './todoReducer';
import apiReducer from './apiReducer';
import createReducer from './CreateReducer';

const todoApp = combineReducers({
	// no need to provid a key/val pair if same names 
	todos: todoReducer,
	todosApi: apiReducer,
	createApi: createReducer
});

export default todoApp;