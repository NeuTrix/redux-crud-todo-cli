import axios from 'axios'
import setAuthorizationToken from '../components/auth/setAuthToken'
import jwt from 'jsonwebtoken'

export function userLoginRequest(userData) {

	let api = 'http://localhost:3003/api/auth'
	// let api = 'https://redux-todo-api.herokuapp.com/api/auth'
	
	return dispatch => {
		  return axios.post(api, userData)
			.then((res) => {
				const token = res.data.token;
				localStorage.setItem('jwtToken', token);
				setAuthorizationToken(token);
				// decode token
				console.log('DECODE=>', jwt.decode(token));
				return res
			})
	}
}


