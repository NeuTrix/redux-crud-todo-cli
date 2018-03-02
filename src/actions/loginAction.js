import axios from 'axios';
// import { addTodo } from './todoActions';

export const LOGIN_IS_POSTING  = 'LOGIN_IS_POSTING';
export const LOGIN_HAS_SUCCEEDED = 'LOGIN_HAS_SUCCEEDED';
export const LOGIN_HAS_ERRORED = 'LOGIN_HAS_ERRORED';

export function loginIsPosting (bool)  {
	return {
		type: LOGIN_IS_POSTING,
		payload: { status: bool }
	};
}

export const loginHasSucceeded = (bool) => {
	return {
		type: LOGIN_HAS_SUCCEEDED,
		payload: { status: bool }
	};
};

export const loginHasErrored = (bool) => {
	return {
		type: LOGIN_HAS_ERRORED,
		payload: { status: bool }
	};
};
  
export function loginTodo (userId, password) {

 	let api = 'https://redux-todo-api.herokuapp.com/login'

	return (dispatch) => {
		dispatch (loginIsPosting (true));
		
		axios.post (api, data)
			.then ((response) => {
				if (response.status !== 201) {
					throw Error (response.statusText);
				}	
				newTodo = response.data;
			})
			.then (() => {
				dispatch (addTodo (newTodo));
				dispatch (loginIsPosting (false));
				dispatch (loginHasSucceeded (true));
			})
			.catch ((err) => {
				dispatch (loginHasErrored (true));
				console.error (err);
			});
	};
}





