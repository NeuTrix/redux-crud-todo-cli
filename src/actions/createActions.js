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
		type: CREATE_HAS_ERRORED ,
		payload: { status: bool }
	};
};

export function createIsPosting (bool)  {
	return {
		type: CREATE_IS_POSTING,
		payload: { status: bool }
	};
}
  
export function createTodo (api, data) {
	return (dispatch) => {
		let newTodo; // the newly created todo item
		dispatch (createIsPosting (true));
		axios.post (api, data)
			.then ((response) => {
				if (response.status !== 201) {
					throw Error (response.statusText);
				}	
				newTodo = response.data;
			})
			.then (() => {
				dispatch (addTodo (newTodo));
				dispatch (createIsPosting (false));
				dispatch (createHasSucceeded (true));
			})
			.catch ((err) => {
				dispatch (createHasErrored (true));
				console.error (err);
			});
	};
}





