// tutorial at: https://coursework.vschool.io/mongoose-crud/

import axios from 'axios'

export const EDIT_ITEM  = 'EDIT_ITEM';
export const EDIT_IS_POSTING  = 'EDIT_IS_POSTING';
export const EDIT_HAS_SUCCEEDED = 'EDIT_HAS_SUCCEEDED';
export const EDIT_HAS_ERRORED = 'EDIT_HAS_ERRORED';

export const editItem = (id, _newItem) => {
	return {
		type: EDIT_ITEM,
		payload: {
		
			_id: id,
			newItem: _newItem
		}
	};
}

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
export function editTodo(api, _id) {

	return (dispatch) => {

		dispatch(editIsPosting(true));

		axios.put(`${api}/${_id}`)
			.then((response) => {
				if(response.status !== 200) {
					throw Error(response.statusText);
				}	
				console.log(`the id is: ${_id}`)
				dispatch(editItem(_id));
			})
			.then(() => {
				dispatch(editIsPosting(false));
				dispatch(editHasSucceeded(true))
			})
			.catch((err) => {
					dispatch(editHasErrored(true))
			});
	};
}
