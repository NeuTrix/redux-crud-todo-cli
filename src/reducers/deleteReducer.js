import * as mod from '../actions/typeConstants';

let initState = {
	deleteIsPosting: false,
	deleteHasSucceeded: false,
	deleteHasErrored: false
}; 

export const deleteReducer = (state = initState, action = {}) => {

	let payload = action.payload;

	switch (action.type) {

		case mod.DELETE_IS_POSTING:
			return {
				...state, 
				...{ deleteIsPosting: payload.status }
			};
		
		case mod.DELETE_HAS_SUCCEEDED:
			return {
				...state, 
				...{ deleteHasSucceeded: payload.status }
			};
		
		case mod.DELETE_HAS_ERRORED:
			return {
				...state, 
				...{ deleteHasErrored: payload.status }
			};

		default:
			return state;
	}
};
	
export default deleteReducer;
