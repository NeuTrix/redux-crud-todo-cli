import axios from 'axios';
import * as mod from './typeConstants';
import { url } from '../helpers/apiHelper.js'

// +++++++++ Actions +++++++++ 

export const editItem = (id, edit) => {
	return {
		type: mod.EDIT_ITEM,
		payload: { id, edit }
	};
};

export function editIsPosting (bool)  {
	return {
		type: mod.EDIT_IS_POSTING,
		payload: { status: bool }
	};
}

export const editHasSucceeded = (bool) => {
	return {
		type: mod.EDIT_HAS_SUCCEEDED,
		payload: { status: bool }
	};
};

export const editHasErrored = (bool) => {
	return {
		type: mod.EDIT_HAS_ERRORED ,
		payload: { status: bool }
	};
};

// +++++++++ Functions +++++++++ 

// const url = 'https://redux-todo-api.herokuapp.com';

export function editTodo (id, data) {
	return (dispatch) => {
		return axios.put (`${ url }/api/todos/${ id }`, data)
			.then ((res) => {
				dispatch (editIsPosting(true));
				if (res.status !== 200) {
					throw Error (res.statusText);
				} else {
					dispatch (editItem (id, res.data.todo));
				}
			})
			.then (() => {
				dispatch (editIsPosting (false));
				dispatch (editHasSucceeded (true));
			})
			.catch ((err) => {
				dispatch (editHasErrored (true));
				console.error(err);
			});
	};
}
