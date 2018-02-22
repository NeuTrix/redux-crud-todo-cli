import axios from 'axios'

import {
	addTodo
} from './todoActions';

export const CREATE_IS_POSTING  = 'CREATE_IS_POSTING';
export const CREATE_HAS_ERRORED = 'CREATE_HAS_ERRORED';
export const CREATE_HAS_FETCHED = 'CREATE_HAS_FETCHED';

export function createIsPosting(bool)  {
	return {
		type: CREATE_IS_POSTING,
		payload: {
			status: bool
		}
	};
}

export const createHasFetched = (todos) => {
	return {
		type: CREATE_HAS_FETCHED,
		payload: {
			todos: todos
		}
	};
};

export const createHasErrored = (bool) => {
	return {
		type: CREATE_HAS_ERRORED ,
		payload: {
			status: bool
		}
	};
};

// =========   

export function createTodo(url, data) {

	return (dispatch) => {

		// note that it's loading
		dispatch(createIsPosting(true));

		// fetch the items
		axios.post(url, data)
			.then((response) => {
				// watch for errors
				if(response.status !== 201) {
					throw Error(response.statusText);
				}	
				// once finished loading
				dispatch(createIsPosting(false));
				return response;
			})
			.then((todo) => dispatch(addTodo(todo)))
			// check for errors, if so
			.catch(() => dispatch(createHasErrored(true)));
	};

}





