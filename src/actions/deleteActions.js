import axios from 'axios';
import * as mod from './typeConstants';
import {url} from '../helpers/apiHelper.js'


// +++++++++ Actions +++++++++ 

export const removeTodo = (id) => {
	return {
		type: mod.REMOVE_TODO,
		payload: { id }
	};
};

export function deleteIsPosting (bool) {
	return {
		type: mod.DELETE_IS_POSTING,
		payload: { status: bool }
	};
}

export const deleteHasSucceeded = (bool) => {
	return {
		type: mod.DELETE_HAS_SUCCEEDED,
		payload: { status: bool }
	};
};

export const deleteHasErrored = (bool) => {
	return {
		type: mod.DELETE_HAS_ERRORED,
		payload: { status: bool }
	};
};

// +++++++++ Functions +++++++++ 

// const url = 'https://redux-todo-api.herokuapp.com';
// const url = 'https://localhost:8080';


export function deleteTodo (id) {
	return (dispatch) => {
		return axios.delete (`${ url }/api/todos/${ id }`)
			.then ((res) => {
				dispatch (deleteIsPosting (true));
				if (res.status !== 200) {
					throw Error (res.statusText);
				}	
				dispatch (removeTodo (id));
				dispatch (deleteIsPosting (false));
			})
			.then (() => dispatch (deleteHasSucceeded (true)))
			.catch ((err) => { 
				dispatch (deleteHasErrored (true)); 
				console.error(err);
			});
	};
}





