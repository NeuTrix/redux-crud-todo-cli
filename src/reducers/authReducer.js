import isEmpty from 'lodash/isEmpty';
import * as mod from '../actions/typeConstants';

export const initialState = {
	isAuthenticated: false,
	registerHasError: false,
	registerHasSuccess: false,
	registerIsPosting: false,
	user: {}
};

export const authReducer = (state = initialState, action = {}) => {
	let payload = action.payload;

	switch(action.type) {

	case mod.SET_CURRENT_USER:
		return {
			...state, 
			...{ isAuthenticated: !isEmpty(payload.user), 
				user: payload.user }
		}; 
	
	case mod.REGISTER_IS_POSTING:
		return {
		...state, 
		registerIsPosting: payload.bool
		}; 

	default: 
		return state;
	}
};

export default authReducer;