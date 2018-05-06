import axios from 'axios';
import * as mod from './typeConstants';
import {url} from '../helpers/apiHelper.js'

// +++++++++ Actions +++++++++ 

export const addTodo = (todo) => {
	return {
		type: mod.ADD_TODO,
		payload: { todo }
	};
};

export function createIsPosting (bool)  {
	return {
		type: mod.CREATE_IS_POSTING,
		payload: { status: bool }
	};
}

export const createHasSucceeded = (bool) => {
	return {
		type: mod.CREATE_HAS_SUCCEEDED,
		payload: { status: bool }
	};
};

export const createHasErrored = (bool) => {
	return {
		type: mod.CREATE_HAS_ERRORED,
		payload: { status: bool }
	};
};

// +++++++++ Functions +++++++++ 

// const url = 'https://redux-todo-api.herokuapp.com';
// const url = 'https://localhost:8080';

export function createTodo(data) {
	return (dispatch) => {
		return axios.post (`${ url }/api/todos`, data)
			.then ((res) => {
				dispatch (createIsPosting (true));
				if (res.status !== 201) {
					throw Error (res.statusText);
				}	else {
					dispatch (addTodo (res.data.todo));
				}
			})
			.then ((res) => {
				dispatch (createIsPosting (false));
				dispatch (createHasSucceeded (true));
			})
			.catch ((err) => {
				dispatch (createHasErrored (true));
				console.error (err);
			});
	};
}





