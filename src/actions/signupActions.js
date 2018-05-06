import axios from 'axios';
import jwtDecode from 'jwt-decode';
// custom
import { url } from '../helpers/apiHelper.js'
import setAuthorizationToken from '../components/auth/setAuthToken';
import { addFlashMessage } from './flashActions';
import * as mod from './typeConstants';

export function registerIsPosting (bool) {
	return {
		type: mod.REGISTER_IS_POSTING,
		payload: { bool }
	};
}

export function registerHasError (bool) {
	return {
		type: mod.REGISTER_HAS_ERROR,
		payload: { bool }
	};
}
	
export function registerSucceeded (bool) {
	return {
		type: mod.REGISTER_SUCCEEDED,
		payload: { bool }
	};
}

export function setCurrentUser (user) {
	return {
		type: mod.SET_CURRENT_USER,
		payload: { user }
	};
}

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
			})
			.catch((err) => {
				// dispatch(registerHasError)ww
				console.log(err);
			});
	};
}


