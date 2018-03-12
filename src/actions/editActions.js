import axios from 'axios';
import { editItem } from './todoActions';

export const EDIT_IS_POSTING  = 'EDIT_IS_POSTING';
export const EDIT_HAS_SUCCEEDED = 'EDIT_HAS_SUCCEEDED';
export const EDIT_HAS_ERRORED = 'EDIT_HAS_ERRORED';

export const editHasSucceeded = (todos) => {
	return {
		type: EDIT_HAS_SUCCEEDED,
		payload: { todos: todos }
	};
};

export const editHasErrored = (bool) => {
	return {
		type: EDIT_HAS_ERRORED ,
		payload: { status: bool }
	};
};

export function editIsPosting (bool)  {
	return {
		type: EDIT_IS_POSTING,
		payload: { status: bool }
	};
}

export function editTodo (_id, data) {

 	let api = 'http://localhost:3003/api/todos'
 	// let api = 'https://redux-todo-api.herokuapp.com/api/todos'

	return (dispatch) => {
		let updatedTodo; // newly updated item from api
		dispatch (editIsPosting(true));
		axios.put (`${api}/${_id}`, data)
			.then ((response) => {
				if (response.status !== 200) {
					throw Error (response.statusText);
				}	
				updatedTodo = response.data;
			})
			.then (() => {
				dispatch (editItem (_id, updatedTodo));
				dispatch (editIsPosting (false));
				dispatch (editHasSucceeded (true));
			})
			.catch ((err) => {
				dispatch (editHasErrored (true));
				console.error(err);
			});
	};
}
