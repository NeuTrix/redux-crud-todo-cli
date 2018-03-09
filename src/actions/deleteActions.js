import axios from 'axios';

import { removeTodo } from './todoActions';

export const DELETE_IS_POSTING  = 'DELETE_IS_POSTING';
export const DELETE_HAS_SUCCEEDED = 'DELETE_HAS_SUCCEEDED';
export const DELETE_HAS_ERRORED = 'DELETE_HAS_ERRORED';

export const deleteHasSucceeded = (todos) => {
	return {
		type: DELETE_HAS_SUCCEEDED,
		payload: { todos: todos }
	};
};

export const deleteHasErrored = (bool) => {
	return {
		type: DELETE_HAS_ERRORED,
		payload: { status: bool }
	};
};

export function deleteIsPosting (bool) {
	return {
		type: DELETE_IS_POSTING,
		payload: { status: bool }
	};
}

export function deleteTodo (_id) {
 	
 	let api = 'https://redux-todo-api.herokuapp.com/api/todos'

	return (dispatch) => {
		dispatch (deleteIsPosting (true));
		axios.delete (`${api}/${_id}`)
			.then ((response) => {
				if (response.status !== 200) {
					throw Error (response.statusText);
				}	
				dispatch (removeTodo (_id));
				dispatch (deleteIsPosting (false));
			})
			.then (() => dispatch (deleteHasSucceeded (true)))
			.catch ((err) => { 
				dispatch (deleteHasErrored (true)); 
				console.error(err);
			});
	};
}





