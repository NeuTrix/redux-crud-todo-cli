// import action constants- allows JS to throw spelling errors
import {
	DELETE_IS_POSTING,
	DELETE_HAS_SUCCEEDED,
	DELETE_HAS_ERRORED,
} from '../actions/deleteActions';

let initialState = {
	deleteIsPosting: false,
	deleteHasSucceeded: false,
	deleteHasErrored: false
}; 

export const deleteReducer = (state = initialState, action) => {

	let payload = action.payload;

	switch(action.type) {

	case DELETE_IS_POSTING:
		return {...state, ...{deleteIsPosting:payload.status}};
	
	case DELETE_HAS_SUCCEEDED:
		return {...state, ...{deleteHasSucceeded:payload.status}};
	
	case DELETE_HAS_ERRORED:
		return {...state, ...{deleteHasErrored:payload.status}};

	default:
		return state;
	}
};
	
export default deleteReducer;
