// tutorial at: https://coursework.vschool.io/mongoose-crud/
import axios from 'axios'
import { editItem } from './todoActions'

export const EDIT_IS_POSTING  = 'EDIT_IS_POSTING';
export const EDIT_HAS_SUCCEEDED = 'EDIT_HAS_SUCCEEDED';
export const EDIT_HAS_ERRORED = 'EDIT_HAS_ERRORED';

export function editIsPosting(bool)  {
	return {
		type: EDIT_IS_POSTING,
		payload: {
			status: bool
		}
	};
}

export const editHasSucceeded = (todos) => {
	return {
		type: EDIT_HAS_SUCCEEDED,
		payload: {
			todos: todos
		}
	};
};

export const editHasErrored = (bool) => {
	return {
		type: EDIT_HAS_ERRORED ,
		payload: {
			status: bool
		}
	};
};

// =========   

// here's the Thunk...
export function editTodo(api, update) {

	return (dispatch) => {

		let updatedTodo // newly update item from api
		console.log("====> Here's the 1st object",updatedTodo)

		dispatch(editIsPosting(true));

		axios.put(`${api}/${update._id}`, update)
			.then((response) => {
				if(response.status !== 200) {
					throw Error(response.statusText);
				}	
				updatedTodo = response.data
				console.log("====> Here's the 2nd object", updatedTodo)
			})
			.then(() => {
				console.log("====> Here's 3rd object", updatedTodo)
				dispatch(editItem(update._id, updatedTodo));
				dispatch(editIsPosting(false));
				dispatch(editHasSucceeded(true))
			})
			.catch((err) => {
					dispatch(editHasErrored(true))
					console.log('=====+> Erroor:', err)
			});
	};
}
