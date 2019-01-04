import { combineReducers } from 'redux';

import todoReducer from './todoReducer';
import readApiReducer from './readApiReducer';
import createApiReducer from './createApiReducer';
import deleteApiReducer from './deleteApiReducer';
import editApiReducer from './editApiReducer';
import flashReducer from './flashReducer';
import authReducer from './authReducer';

const todoApp = combineReducers({
	todos: todoReducer,
	todosApi: readApiReducer,
	createApi: createApiReducer,
	deleteApi: deleteApiReducer,
	editApi: editApiReducer,
	flashMessages: flashReducer,
	authApi: authReducer,
});

export default todoApp;
