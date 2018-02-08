// import axios from 'axios';
import fetch from 'cross-fetch'

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

// export function todosSetInitialState(url) {

	/*return(dispatch) => {

		// note that it's loading
		dispatch(todosIsLoading(true));

		// fetch the items
		fetch(url)
			.then((res) => {
				// watch for errors
				if(!res.ok) {
					throw Error(res.statusText);
				}	

				// once finished loading
				dispatch(todosIsLoading(false));
		
				return res;
			})
			// api may already return a json item; if not...
			// .then((res) => res.json())

			.then((newState) => dispatch(todosHasFetched(newState))
			// check for errors, if so
			.catch(() => dispatch(todosHasErrored(true)));

		};


		// if succesfully delivered*/

		// dispatch(todosHasFetched(true))

// }





