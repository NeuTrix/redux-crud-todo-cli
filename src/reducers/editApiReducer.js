import * as mod from '../actions/typeConstants';

const initState = {
	editIsPosting: false,
	editHasSucceeded: false,
	editHasErrored: false
};

export const editApiReducer = (state = initState, action = {}) => {

	let payload = action.payload;

	switch (action.type) {

	case mod.EDIT_IS_POSTING:
		return { 
			...state, 
			...{ editIsPosting: payload.status } 
		};
		
	case mod.EDIT_HAS_SUCCEEDED:
		return { 
			...state, 
			...{ editHasSucceeded: payload.status } 
		};
		
	case mod.EDIT_HAS_ERRORED:
		return { 
			...state, 
			...{ editHasErrored: payload.status } 
		};

	default:
		return state;
	}
};
	
export default editApiReducer;