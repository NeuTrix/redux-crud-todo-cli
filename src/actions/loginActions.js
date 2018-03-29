import axios from 'axios'
import jwtDecode from 'jwt-decode';
import setAuthorizationToken from '../components/auth/setAuthToken';
import { readTodos, readSavedTodos } from './readActions';
import * as mod from './typeConstants';

export function setCurrentUser (user) {
	return {
		type: mod.SET_CURRENT_USER,
		payload: { user }
	}
};

const url = 'https://redux-todo-api.herokuapp.com'

export function userLoginRequest(userData) {
	return dispatch => {
	  return axios.post(`${ url }/api/auth/login`, userData)
			.then((res) => {
				const token = res.data.token;
				const user = jwtDecode(token)
					localStorage.setItem('jwtToken', token);
					setAuthorizationToken (token);
					dispatch(setCurrentUser (user));
					dispatch(readTodos());
				return res
			})
	}
}

// reset the environment
export function logout(){
	return dispatch => {
		localStorage.removeItem('jwtToken');
		setAuthorizationToken(false);
		dispatch(setCurrentUser({})); 
		dispatch(readSavedTodos([]));
		alert("You have successfully logged out.")
	}
}


