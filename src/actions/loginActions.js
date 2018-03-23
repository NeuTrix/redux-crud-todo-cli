import axios from 'axios'
import setAuthorizationToken from '../components/auth/setAuthToken'
import jwtDecode from 'jwt-decode'
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

	let url = 'https://redux-todo-api.herokuapp.com'
	// let url = 'http://localhost:3003'

	return dispatch => {

		  // return axios.post('/api/auth/login', userData)
		  return axios.post(`${ url }/api/auth/login`, userData)
			.then((res) => {

				const token = res.data.token;
				localStorage.setItem('jwtToken', token);

				setAuthorizationToken(token);
				const user = jwtDecode(token)
				dispatch(setCurrentUser(user))

				return res
			})
	}
}


