import axios from 'axios';
import { removeTodo } from './todoActions';
import * as mod from './typeConstants';

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

export function deleteIsPosting (bool) {
	return {
		type: mod.DELETE_IS_POSTING,
		payload: { status: bool }
	};
}

const url = 'https://redux-todo-api.herokuapp.com'

export function deleteTodo (_id) {
	return (dispatch) => {
		return axios.delete (`${ url }/api/todos/${ _id }`)
			.then ((res) => {
				dispatch (deleteIsPosting (true));
				if (res.status !== 200) {
					throw Error (res.statusText);
				}	
				dispatch (removeTodo (_id));
				dispatch (deleteIsPosting (false));
			})
			.then (() => dispatch (deleteHasSucceeded (true)))
			.catch ((err) => { 
				dispatch (deleteHasErrored (true)); 
				console.error(err);
			});
	};
}





