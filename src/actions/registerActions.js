import axios from 'axios';
import jwtDecode from 'jwt-decode';
// custom
import { url } from '../helpers/apiHelper.js'
import setAuthorizationToken from '../components/auth/setAuthToken';
import {
	REGISTER_IS_POSTING,
	REGISTER_HAS_ERRORED,
	REGISTER_HAS_SUCCEEDED,
	SET_CURRENT_USER,
} from './typeConstants';

export function registerIsPosting (bool) {
	return {
		type: REGISTER_IS_POSTING,
		payload: { status: bool }
	};
}

export function registerHasErrored (bool) {
	return {
		type: REGISTER_HAS_ERRORED,
		payload: { status: bool }
	};
}
	
export function registerHasSucceeded (bool) {
	return {
		type: REGISTER_HAS_SUCCEEDED,
		payload: { status: bool }
	};
}

export function setCurrentUser (user) {
	return {
		type: SET_CURRENT_USER,
		payload: { user }
	};
}

export function userSignupRequest (userData) {
	return dispatch => {
		return axios.post(`${ url }/api/auth/register`, userData)
			.then((res) => {
				dispatch(registerIsPosting(true));
				return res;
			})
			.then ((res) => {
				const token = res.data.token;
				const user = jwtDecode(token);
				localStorage.setItem('jwtToken', token);
				setAuthorizationToken(token);
				dispatch(setCurrentUser(user));
				return res;
			})
			.then((res) => {
				dispatch(registerHasSucceeded(true));
				return res;
			})
			.catch((err) => {
				dispatch(registerHasErrored(true));
				console.log(err);
			});
	};
}


