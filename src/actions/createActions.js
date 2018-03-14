import axios from 'axios';
import { addTodo } from './todoActions';

export const CREATE_IS_POSTING  = 'CREATE_IS_POSTING';
export const CREATE_HAS_SUCCEEDED = 'CREATE_HAS_SUCCEEDED';
export const CREATE_HAS_ERRORED = 'CREATE_HAS_ERRORED';

export const createHasSucceeded = (todos) => {
	return {
		type: CREATE_HAS_SUCCEEDED,
		payload: { todos: todos }
	};
};

export const createHasErrored = (bool) => {
	return {
		type: CREATE_HAS_ERRORED,
		payload: { status: bool }
	};
};

export function createIsPosting (bool)  {
	return {
		type: CREATE_IS_POSTING,
		payload: { status: bool }
	};
}

export function createTodo (data) {

// +++++++++ Ref  +++++++++ 

	// let api = 'http://localhost:3003/api/todos'
	let api = 'https://redux-todo-api.herokuapp.com/api/todos'

// +++++++++ Ref  +++++++++ 

	return (dispatch) => {

		dispatch (createIsPosting (true));

		axios.post (api, data)
			.then ((res) => {
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





