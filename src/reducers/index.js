import { combineReducers } from 'redux';

import todoReducer from './todoReducer';
import readReducer from './readReducer';
import createReducer from './createReducer';
import deleteReducer from './deleteReducer';
import editReducer from './editReducer';
import flashMessages from './flashMessages';
import authReducer from './authReducer';

const todoApp = combineReducers({
	todos: todoReducer,
	todosApi: readReducer,
	createApi: createReducer,
	deleteApi: deleteReducer,
	editApi: editReducer,
	flashMessages: flashMessages,
	authApi: authReducer
});

export default todoApp;