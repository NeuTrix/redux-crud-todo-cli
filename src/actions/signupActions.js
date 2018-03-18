import axios from 'axios';

export function userSignupRequest (userData) {

	let url = 'https://redux-todo-api.herokuapp.com'
	// let url = 'http://localhost:3003'
	
	return dispatch => {
		return axios.post(`${ url }/api/auth/register`, userData);
	}
}


