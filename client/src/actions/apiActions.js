// import axios from 'axios';
import fetch from 'cross-fetch'
import {
	TODOS_SET_INITIAL_STATE,
	todosSetInitialState
} from './todoActions'


export const TODOS_IS_LOADING  = 'TODOS_IS_LOADING'
export const TODOS_HAS_ERRORED = 'TODOS_HAS_ERRORED'
export const TODOS_HAS_FETCHED = 'TODOS_HAS_FETCHED'

export function todosIsLoading(bool)  {
	return {
		type: TODOS_IS_LOADING,
		payload: {
			status: bool
		}
	}
}

export const todosHasFetched = (todos) => {
	return {
		type: TODOS_HAS_FETCHED,
		payload: {
			todos: todos
		}
	}
};

export const todosHasErrored = (bool) => {
	return {
		type: TODOS_HAS_ERRORED ,
		payload: {
			status: bool
		}
	}
}

// ========= ========= ========= 

export function startState(url) {
	// return "hello Walker!"

	return (dispatch) => {

		// note that it's loading
		dispatch(todosIsLoading(true));

		// fetch the items
		fetch(url)
			.then((response) => {
				// watch for errors
				if(!response.ok) {
					throw Error(response.statusText);
				}	

				// once finished loading
				dispatch(todosIsLoading(false));
				
				return response
			})
			// api may already return a json item; if not...
			.then((response) => response.json())

			.then((todos) => dispatch(todosSetInitialState(todos)))
			// check for errors, if so
			.then((todos) => {
				console.log("##########", todos.payload.todos[0])
			})
			.catch(() => dispatch(todosHasErrored(true)));

		};

}





