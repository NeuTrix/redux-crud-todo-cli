import axios from 'axios';
import { addTodo } from './todoActions';

import {
	CREATE_IS_POSTING,
	CREATE_HAS_SUCCEEDED,
	CREATE_HAS_ERRORED,
} from '../actions/typeConstants';

// +++++++++   +++++++++ 

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

// +++++++++   +++++++++ 

export function createTodo (data) {

	let url = 'https://redux-todo-api.herokuapp.com'

	return (dispatch) => {

		dispatch (createIsPosting (true));

		axios.post (`${ url }/api/todos`, data)

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





