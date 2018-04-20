import axios from 'axios';
import jwtDecode from 'jwt-decode';
import setAuthorizationToken from '../components/auth/setAuthToken';
import { fetchTodos, readTodos } from './readActions';
import { addFlashMessage } from './flashActions';
import * as mod from './typeConstants';
import {url} from '../helpers/apiHelper.js'

export function setCurrentUser (user) {
	return {
		type: mod.SET_CURRENT_USER,
		payload: { user }
	};
}

// const url = 'https://redux-todo-api.herokuapp.com';

export function userLoginRequest(userData) {
	return dispatch => {
	  return axios.post(`${ url }/api/auth/login`, userData)
			.then((res) => {
				const token = res.data.token;
				const user = jwtDecode(token);
				localStorage.setItem('jwtToken', token);
				setAuthorizationToken (token);
				dispatch(setCurrentUser (user));
				dispatch(fetchTodos());
				return res;
			});
	};
}

// reset the environment
export function logout(){
	localStorage.removeItem('jwtToken');
	setAuthorizationToken(false);
	return dispatch => {
		dispatch(setCurrentUser({}));
		dispatch(addFlashMessage({ type: 'success', text:'You are now logged out.'}));
		dispatch(readTodos([]));

	};
}


