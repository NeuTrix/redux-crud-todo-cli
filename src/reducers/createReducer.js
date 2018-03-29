import * as mod from '../actions/typeConstants';

let initialState = {
	createIsPosting: false,
	createHasSucceeded: false,
	createHasErrored: false
}; 

export const createReducer = (state = initialState, action) => {

	let payload = action.payload;

	switch (action.type) {

	case mod.CREATE_IS_POSTING:
		return {
			...state, 
			...{ createIsPosting:payload.status }
		};
	
	case mod.CREATE_HAS_SUCCEEDED:
		return {
			...state, 
			...{ createHasSucceeded:payload.status }
		};
	
	case mod.CREATE_HAS_ERRORED:
		return {
			...state, 
			...{ createHasErrored:payload.status }
		};

	default:
		return state;
	}
};
	
export default createReducer;