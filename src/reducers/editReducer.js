import {
	EDIT_IS_POSTING,
	EDIT_HAS_SUCCEEDED,
	EDIT_HAS_ERRORED,
} from '../actions/typeConstants';

let initialState = {
	editIsPosting: false,
	editHasSucceeded: false,
	editHasErrored: false
}; 

export const editReducer = (state = initialState, action) => {

	let payload = action.payload;

	switch(action.type) {

	case EDIT_IS_POSTING:
		return { ...state, ...{editIsPosting:payload.status } };
	
	case EDIT_HAS_SUCCEEDED:
		return { ...state, ...{editHasSucceeded:payload.status } };
	
	case EDIT_HAS_ERRORED:
		return { ...state, ...{editHasErrored:payload.status } };

	default:
		return state;
	}
};
	
export default editReducer;