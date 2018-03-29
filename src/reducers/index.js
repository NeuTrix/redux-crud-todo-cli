import { combineReducers } from 'redux';

import todoReducer from './todoReducer';
import readApiReducer from './readApiReducer';
import createApiReducer from './createApiReducer';
import deleteApiReducer from './deleteApiReducer';
import editApiReducer from './editApiReducer';
import flashMessages from './flashMessages';
import authReducer from './authReducer';

const todoApp = combineReducers({
	todos: todoReducer,
	todosApi: readApiReducer,
	createApi: createApiReducer,
	deleteApi: deleteApiReducer,
	editApi: editApiReducer,
	flashMessages: flashMessages,
	authApi: authReducer
});

export default todoApp;