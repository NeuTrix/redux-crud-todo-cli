import axios from 'axios'
import { todosSetInitialState } from './todoActions';

export const TODOS_IS_LOADING  = 'TODOS_IS_LOADING';
export const TODOS_HAS_ERRORED = 'TODOS_HAS_ERRORED';
export const TODOS_HAS_FETCHED = 'TODOS_HAS_FETCHED';

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

export function readTodos () {

 	let url = 'https://redux-todo-api.herokuapp.com'
 	// let url = 'http://localhost:3003'

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





