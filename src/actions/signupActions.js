import axios from 'axios'

export function userSignupRequest (userData) {

	let api = 'http://localhost:3003/register'
	// let api = 'https://redux-todo-api.herokuapp.com/register'
	
	return dispatch => {
		console.log("working")
		return axios.post(api, userData);
	}
}


