import fetch from 'cross-fetch';
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

export function startState () {
	
 	let api = 'https://redux-todo-api.herokuapp.com/api/todos'

	return (dispatch) => {
		dispatch (todosIsLoading(true));
		fetch (api)
			.then ((response) => {
				if (!response.ok) {
					throw Error (response.statusText);
				}	
				dispatch (todosIsLoading (false));
				return response;
			})
			.then ((response) => response.json ())
			.then ((todos) => dispatch (todosSetInitialState (todos)))
			.then (() => { dispatch (todosHasFetched (true)); })
			.catch ((err) => {
				dispatch (todosHasErrored (true));
				console.error (err);
			});
	};
}





