import axios from 'axios'

import {
	removeTodo
} from './todoActions';

export const DELETE_IS_POSTING  = 'DELETE_IS_POSTING';
export const DELETE_HAS_SUCCEEDED = 'DELETE_HAS_SUCCEEDED';
export const DELETE_HAS_ERRORED = 'DELETE_HAS_ERRORED';

export function deleteIsPosting(bool)  {
	return {
		type: DELETE_IS_POSTING,
		payload: {
			status: bool
		}
	};
}

export const deleteHasSucceeded = (todos) => {
	return {
		type: DELETE_HAS_SUCCEEDED,
		payload: {
			todos: todos
		}
	};
};

export const deleteHasErrored = (bool) => {
	return {
		type: DELETE_HAS_ERRORED ,
		payload: {
			status: bool
		}
	};
};

// =========   

// here's the Thunk...
export function deleteTodo(api, id) {

	return (dispatch) => {

		// note that it's loading
		dispatch(deleteIsPosting(true));

		// fetch the items
		axios.delete(`${api}/${id}`)
			.then((response) => {
				// watch for errors
				if(response.status !== 204) {
					throw Error(response.statusText);
				}	
				// once finished loading
				dispatch(removeTodo(id));
				dispatch(deleteIsPosting(false));
			})
			// check for errors, 
			.then(() => dispatch(deleteHasSucceeded(true)))
			.catch((err) => {
					dispatch(deleteHasErrored(true))
					// console.log('=====+> Erroor:', err)
			});
	};

}





