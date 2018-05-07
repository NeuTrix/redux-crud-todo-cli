import isEmpty from 'lodash/isEmpty';
import {
	LOGIN_IS_POSTING,
	LOGIN_HAS_SUCCEEDED,
	LOGIN_HAS_ERRORED,
	REGISTER_IS_POSTING,
	REGISTER_HAS_SUCCEEDED,
	REGISTER_HAS_ERRORED,
	SET_CURRENT_USER,
} from '../actions/typeConstants';

export const initialState = {
	registerIsPosting: false,
	registerHasSucceeded: false,
	registerHasErrored: false,
	loginIsPosting: false,
	loginHasSucceeded: false,
	loginHasErrored: false,
	user: {},
	isAuthenticated: false,
};

export const authReducer = (state = initialState, action = {}) => {
	let payload = action.payload;

	switch(action.type) {

	// registerActions
	case REGISTER_IS_POSTING:
		return {
			...state, 
			registerIsPosting: payload.status
		}; 

	case REGISTER_HAS_SUCCEEDED:
		return {
			...state, 
			registerHasSucceeded : payload.status
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
			registerHasErrored: payload.status
		}; 

		// loginActions
	case LOGIN_IS_POSTING:
		return {
			...state, 
			loginIsPosting: payload.status
		}; 

	case LOGIN_HAS_SUCCEEDED:
		return {
			...state, 
			loginHasSucceeded : payload.status
		}; 


				
	case LOGIN_HAS_ERRORED:
		return {
			...state, 
			loginHasErrored: payload.status
		}; 
	default: 
		return state;
	}
};

export default authReducer;