import { combineReducers } from 'redux';

import todoReducer from './todoReducer';
import apiReducer from './apiReducer';
import createReducer from './createReducer';
import deleteReducer from './deleteReducer';
import editReducer from './editReducer';
import flashMessages from './flashMessages';
import authReducer from './authReducer';

const todoApp = combineReducers({
	todos: todoReducer,
	todosApi: apiReducer,
	createApi: createReducer,
	deleteApi: deleteReducer,
	editApi: editReducer,
	flashMessages: flashMessages,
	authApi: authReducer
});

export default todoApp;