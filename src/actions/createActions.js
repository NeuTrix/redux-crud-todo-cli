import axios from 'axios'

import {
	addTodo
} from './todoActions';

export const CREATE_IS_POSTING  = 'CREATE_IS_POSTING';
export const CREATE_HAS_SUCCEEDED = 'CREATE_HAS_SUCCEEDED';
export const CREATE_HAS_ERRORED = 'CREATE_HAS_ERRORED';

export function createIsPosting(bool)  {
	return {
		type: CREATE_IS_POSTING,
		payload: {
			status: bool
		}
	};
}

export const createHasSucceeded = (todos) => {
	return {
		type: CREATE_HAS_SUCCEEDED,
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

// here's the Thunk...
export function createTodo(api, data) {

	return (dispatch) => {

		let newTodo // the newly created todo item
		// console.log("====> Here's the 1st object",newTodo)
		
		dispatch(createIsPosting(true));
		
		axios.post(api, data)

			.then((response) => {
				if(response.status !== 201) {
					throw Error(response.statusText);
				}	
				newTodo = response.data
				// console.log("====> Here's the 2nd object",newTodo)
			})
			.then(() => {
				// console.log("====> Here's 3rd object",newTodo)
				dispatch(addTodo(newTodo));
				dispatch(createIsPosting(false));
				dispatch(createHasSucceeded(true));
			})
			.catch((err) => {
					dispatch(createHasErrored(true))
					console.log('=====+> Erroor:', err)
			});
	};
}





