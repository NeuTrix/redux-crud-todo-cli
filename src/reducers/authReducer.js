import isEmpty from 'lodash/isEmpty';
import {
	REGISTER_IS_POSTING,
	REGISTER_SUCCEEDED,
	SET_CURRENT_USER,
	REGISTER_HAS_ERROR,
} from '../actions/typeConstants';

export const initialState = {
	registerIsPosting: false,
	registerHasSuccess: false,
	user: {},
	isAuthenticated: false,
	registerHasError: false,
};

export const authReducer = (state = initialState, action = {}) => {
	let payload = action.payload;

	switch(action.type) {

		case REGISTER_IS_POSTING:
		return {
			...state, 
			registerIsPosting: payload.bool
		}; 
	
		
		case REGISTER_IS_POSTING:
		return {
				...state, 
				registerIsPosting: payload.bool
			}; 
			
			case SET_CURRENT_USER:
				return {
					...state, 
					...{ isAuthenticated: !isEmpty(payload.user), 
						user: payload.user }
				}; 

					
		case REGISTER_HAS_ERROR:
		return {
			...state, 
			registerHasError: payload.bool
		}; 
	default: 
		return state;
	}
};

export default authReducer;