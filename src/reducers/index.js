import { combineReducers } from 'redux';

import todoReducer from './todoReducer';
import apiReducer from './apiReducer';
import createReducer from './createReducer';
import deleteReducer from './deleteReducer';
import editReducer from './editReducer';
import flashMessages from './flashMessages';
import authReducer from './authReducer';

const todoApp = combineReducers({
	// no need to provid a key/val pair if same names 
	todos: todoReducer,
	todosApi: apiReducer,
	createApi: createReducer,
	deleteApi: deleteReducer,
	editApi: editReducer,
	flashMessages: flashMessages,
	authApi: authReducer
});

export default todoApp;