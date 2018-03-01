// import action constants- allows JS to throw spelling errors
import {
	CREATE_IS_POSTING,
	CREATE_HAS_SUCCEEDED,
	CREATE_HAS_ERRORED,
} from '../actions/createActions';

let initialState = {
	createIsPosting: false,
	createHasSucceeded: false,
	createHasErrored: false
}; 

export const createReducer = (state = initialState, action) => {

	let payload = action.payload;

	switch(action.type) {

	case CREATE_IS_POSTING:
		return {...state, ...{createIsPosting:payload.status}};
	
	case CREATE_HAS_SUCCEEDED:
		return {...state, ...{createHasSucceeded:payload.status}};
	
	case CREATE_HAS_ERRORED:
		return {...state, ...{createHasErrored:payload.status}};

	default:
		return state;
	}
};
	
export default createReducer;
