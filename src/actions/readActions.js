import axios from 'axios';
import * as mod from './typeConstants';

// +++++++++ Actions +++++++++ 

export const readSavedTodos = (savedState) => {
	return {
		type: mod.READ_SAVED_TODOS,
		payload: { savedState }
	};
};

export const todosIsLoading = (bool) => {
	return {
		type: mod.TODOS_IS_LOADING,
		payload: { status: bool }
	};
};
	
export const todosHasFetched = (bool) => {
	return {
		type: mod.TODOS_HAS_FETCHED,
		payload: { status: bool }
	};
}; 

export const todosHasErrored = (bool) => {
	return {
		type: mod.TODOS_HAS_ERRORED ,
		payload: { status: bool }
	};
};


// +++++++++ Functions +++++++++ 

const url = 'https://redux-todo-api.herokuapp.com';

export function readTodos () {
	return (dispatch) => {
		return axios.get(`${ url }/api/todos`)
			.then ((res) => {
				dispatch (todosIsLoading(true));
				if (!res.status === 200) {
					throw Error (res.status);
				}	else {
					dispatch (todosIsLoading (false));
					return res.data;
				}
			})
			.then ((todos) => dispatch (readSavedTodos (todos)))
			.then (() =>  dispatch (todosHasFetched (true)))
			.catch ((err) => {
				dispatch (todosHasErrored (true));
				console.error (err);
			});
	};
}





