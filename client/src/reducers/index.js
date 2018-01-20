import { combineReducers } from 'redux';
import todoReducer from './todoReducer';


const todoApp = combineReducers({
	// no need to provid a key/val pair if same names 
	todos: todoReducer
});

export default todoApp;