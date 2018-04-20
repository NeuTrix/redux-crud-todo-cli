import axios from 'axios';
import * as mod from './typeConstants';
import {url} from '../helpers/apiHelper.js'

export const readTodos = (savedState) => {
	return {
		type: mod.READ_SAVED_TODOS,
		payload: { savedState }
	};
};

export const todosIsLoading = (bool) => {
	return {
		type: mod.TODOS_IS_LOADING,
		payload: { status: bool }
	};
};
	
export const todosHasFetched = (bool) => {
	return {
		type: mod.TODOS_HAS_FETCHED,
		payload: { status: bool }
	};
}; 

export const todosHasErrored = (bool) => {
	return {
		type: mod.TODOS_HAS_ERRORED ,
		payload: { status: bool }
	};
};


// +++++++++ Functions +++++++++ 

// const url = 'https://redux-todo-api.herokuapp.com';

export function fetchTodos () {
	return (dispatch) => {
		return axios.get(`${ url }/api/todos`)
			.then ((res) => {
				dispatch (todosIsLoading(true));
				if (!res.status === 200) {
					throw Error (res.status);
				}	else {
					dispatch (todosIsLoading (false));
					return res.data;
				}
			})
			.then ((todos) => dispatch (readTodos (todos)))
			.then (() =>  dispatch (todosHasFetched (true)))
			.catch ((err) => {
				dispatch (todosHasErrored (true));
				console.error (err);
			});
	};
}





