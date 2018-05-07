import isEmpty from 'lodash/isEmpty';
import {
	REGISTER_IS_POSTING,
	REGISTER_HAS_SUCCEEDED,
	SET_CURRENT_USER,
	REGISTER_HAS_ERRORED,
} from '../actions/typeConstants';

export const initialState = {
	registerIsPosting: false,
	registerHasSucceeded: false,
	user: {},
	isAuthenticated: false,
	registerHasErrored: false,
};

export const authReducer = (state = initialState, action = {}) => {
	let payload = action.payload;

	switch(action.type) {

	case REGISTER_IS_POSTING:
		return {
			...state, 
			registerIsPosting: payload.bool
		}; 

	case REGISTER_HAS_SUCCEEDED:
		return {
			...state, 
			registerHasSucceeded : payload.bool
		}; 
	
	case SET_CURRENT_USER:
		return {
			...state, 
			...{ isAuthenticated: !isEmpty(payload.user), 
				user: payload.user }
		}; 
					
	case REGISTER_HAS_ERRORED:
		return {
			...state, 
			registerHasErrored: payload.bool
		}; 
	default: 
		return state;
	}
};

export default authReducer;