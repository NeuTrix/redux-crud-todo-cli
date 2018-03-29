import axios from 'axios';
import { addTodo } from './todoActions';
import * as mod from './typeConstants';

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

export function createIsPosting (bool)  {
	return {
		type: mod.CREATE_IS_POSTING,
		payload: { status: bool }
	};
}

const url = 'https://redux-todo-api.herokuapp.com'

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





