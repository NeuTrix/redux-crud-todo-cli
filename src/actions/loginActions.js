import axios from 'axios';
import jwtDecode from 'jwt-decode';
// custom
import setAuthorizationToken from '../components/auth/setAuthToken';
import { readTodos } from './readActions';
import { addFlashMessage } from './flashActions';
import { setCurrentUser } from './registerActions';
import { url } from '../helpers/apiHelper.js';

import {
	LOGIN_IS_POSTING,
	LOGIN_HAS_ERRORED,
	LOGIN_HAS_SUCCEEDED,
} from './typeConstants';

export function loginIsPosting (bool) {
	return {
		type: LOGIN_IS_POSTING,
		payload: { status: bool }
	};
}
export function loginHasSucceeded (bool) {
	return {
		type: LOGIN_HAS_SUCCEEDED,
		payload: { status: bool }
	};
}

export function loginHasErrored (bool) {
	return {
		type: LOGIN_HAS_ERRORED,
		payload: { status: bool }
	};
}

export function userLoginRequest(userData) {
	return dispatch => {
		return axios.post(`${ url }/api/auth/login`, userData)
			.then((res) => {
				dispatch(loginIsPosting(true));
				return res;
			})
			.then((res) => {
				const token = res.data.token;
				const user = jwtDecode(token);
				localStorage.setItem('jwtToken', token);
				setAuthorizationToken (token);
				dispatch(setCurrentUser (user));
				return res;
			})
			.then((res) => {
				dispatch(loginHasSucceeded(true));
				dispatch(readTodos([]));
				return res;
			})
			.catch((err) => {
				dispatch(loginHasErrored(true));
			});
	};
}

// reset the environment
export function logout(){
	localStorage.removeItem('jwtToken');
	setAuthorizationToken(false);
	return dispatch => {
		dispatch(setCurrentUser({ }));
		dispatch(addFlashMessage({ 
			type: 'success', 
			text:'You are now logged out.'
		}));
	};
}


