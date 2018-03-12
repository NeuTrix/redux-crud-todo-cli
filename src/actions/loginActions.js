import axios from 'axios'

export function userLoginRequest(userData) {

	let api = 'http://localhost:3003/api/auth'
	// let api = 'https://redux-todo-api.herokuapp.com/api/auth'
	
	return dispatch => {
		  return axios.post(api, userData)
			.then((res) => {
				const token = res.data.token;
				localStorage.setItem('jwtToken', token);
				return res
			})
	}
}


