import axios from 'axios'
import { todosSetInitialState } from './todoActions';

import {
	TODOS_IS_LOADING,
	TODOS_HAS_FETCHED,
	TODOS_HAS_ERRORED,
} from '../actions/typeConstants';

// +++++++++   +++++++++ 

export const todosHasFetched = (bool) => {
	return {
		type: TODOS_HAS_FETCHED,
		payload: { status: bool }
	};
};

export const todosHasErrored = (bool) => {
	return {
		type: TODOS_HAS_ERRORED ,
		payload: { status: bool }
	};
};

export function todosIsLoading (bool)  {
	return {
		type: TODOS_IS_LOADING,
		payload: { status: bool }
	};
}

// +++++++++   +++++++++ 

export function readTodos () {

 	let url = 'https://redux-todo-api.herokuapp.com'

	return (dispatch) => {

		dispatch (todosIsLoading(true));

		return axios.get(`${ url }/api/todos`)
			.then ((res) => {
				if (!res.status === 200) {
					throw Error (res.status);
				}	else {
					dispatch (todosIsLoading (false))
					return res.data
				}
			})
			.then ((todos) => dispatch (todosSetInitialState (todos)))
			.then (() =>  dispatch (todosHasFetched (true)))
			.catch ((err) => {
				dispatch (todosHasErrored (true));
				console.error (err);
			});
	};
}





