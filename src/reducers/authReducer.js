import isEmpty from 'lodash/isEmpty';
import * as mod from '../actions/typeConstants';

const initState = {
	isAuthenicated: false,
	registerHasError: false,
	registerHasSuccess: false,
	registerIsPosting: false,
	user: {}
};

export const authReducer = (state = initState, action = {}) => {
	let payload = action.payload;

	switch(action.type) {

	case mod.SET_CURRENT_USER:
		return {
			
			isAuthenticated: !isEmpty(payload.user),
			user: payload.user
		}; 
	
	case mod.REGISTER_IS_POSTING:
		return {
			registerIsPosting: payload,
			user: payload.user
		}; 

	default: 
		return state;
	}
};

export default authReducer;