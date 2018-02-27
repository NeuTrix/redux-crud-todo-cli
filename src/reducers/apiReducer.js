// import action constants- allows JS to throw spelling errors
import {
	TODOS_IS_LOADING,
	TODOS_HAS_FETCHED,
	TODOS_HAS_ERRORED,
} from '../actions/Read-Actions';

export const apiReducer = (
	
	state = {
		todosIsLoading: false,
		todosHasFetched: false,
		todosHasErrored: false
	}, 

	action) => {

	let payload = action.payload;

	switch(action.type) {

	case TODOS_IS_LOADING:
		return {...state, ...{todosIsLoading:payload.status}};
	
	case TODOS_HAS_FETCHED:
		return {...state, ...{todosHasFetched:payload.status}};
	
	case TODOS_HAS_ERRORED:
		return {...state, ...{todosHasErrored:payload.status}};

	default:
		return state;
	}
};
	
export default apiReducer;
