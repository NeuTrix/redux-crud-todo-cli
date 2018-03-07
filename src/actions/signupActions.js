import axios from 'axios'

export function userSignupRequest (userData) {

	let api = 'https://localhost:3003/api/users'
	// let api = 'https://redux-todo-api.herokuapp.com/register'
	
	return dispatch => {
		console.log("working")
		return axios.post(api, userData);
	}
}

