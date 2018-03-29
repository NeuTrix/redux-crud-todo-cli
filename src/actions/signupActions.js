import axios from 'axios';
import jwtDecode from 'jwt-decode';
import setAuthorizationToken from '../components/auth/setAuthToken';
import * as mod from './typeConstants';

export function setCurrentUser (user) {
	return {
		type: mod.SET_CURRENT_USER,
		payload: { user }
	};
}

const url = 'https://redux-todo-api.herokuapp.com';
	
export function userSignupRequest (userData) {
	return dispatch => {
		return axios.post(`${ url }/api/auth/register`, userData)
			.then ((res) => {
				const token = res.data.token;
				const user = jwtDecode(token);
				localStorage.setItem('jwtToken', token);
				setAuthorizationToken(token);
				dispatch(setCurrentUser(user));
				return res;
			});
	};
}


