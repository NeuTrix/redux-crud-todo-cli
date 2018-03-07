import axios from 'axios'

export function userSignupRequest (userData) {

	let api = 'https://redux-todo-api.herokuapp.com/register'
	
	return dispatch => {
		console.log("working")
		return axios.post(api, userData);
	}
}

