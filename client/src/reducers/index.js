import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import apiReducer from './apiReducer';


const todoApp = combineReducers({
	// no need to provid a key/val pair if same names 
	todos: todoReducer,
	apiTodos: apiReducer
});

export default todoApp;