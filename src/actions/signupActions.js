import axios from 'axios';

export function userSignupRequest (userData) {

	let api = 'http://localhost:3003/api/users'
	// let api = 'https://redux-todo-api.herokuapp.com/api/users'
	
	return dispatch => {
		return axios.post(api, userData);
	}
}


