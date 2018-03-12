import axios from 'axios'
import setAuthorizationToken from '../components/auth/setAuthToken'
import jwt from 'jsonwebtoken'
import { SET_CURRENT_USER } from './typeConstants'

export function setCurrentUser (user) {
	return {
		type: SET_CURRENT_USER,
		payload: {
			user
		}
	}
};

export function logout(){
	return dispatch => {
		localStorage.removeItem('jwtToken');
		setAuthorizationToken(false);
		dispatch(setCurrentUser({}));
		alert("You have successfully logged out.")
	}
}

export function userLoginRequest(userData) {

// +++++++++ Ref +++++++++ 

	let api = 'http://localhost:3003/api/auth'
	// let api = 'https://redux-todo-api.herokuapp.com/api/auth'

// +++++++++ Ref +++++++++ 

	return dispatch => {
		  return axios.post(api, userData)
			.then((res) => {
				const token = res.data.token;
				localStorage.setItem('jwtToken', token);
				setAuthorizationToken(token);
				// decode token
				const user = jwt.decode(token)
				console.log('DECODE=>', user);
				dispatch(setCurrentUser(user))
				return res
			})
	}
}


