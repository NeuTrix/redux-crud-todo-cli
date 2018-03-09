import axios from 'axios'

export function userLoginRequest (userData) {

	let api = 'http://localhost:3003/api/users/'
	// let api = 'https://redux-todo-api.herokuapp.com/api/users'
	
	return dispatch => {
		console.log("working")
		return axios.get(api, userData);
	}
}


