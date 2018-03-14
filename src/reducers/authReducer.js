import { SET_CURRENT_USER } from '../actions/typeConstants'
import isEmpty from 'lodash/isEmpty'

const initialState = {
	isAuthenicated: false,
	user: {}
}

export const authReducer = (state = initialState, action = {}) => {

	let payload = action.payload

	switch(action.type) {

		case SET_CURRENT_USER:
			return {
				isAuthenticated: !isEmpty(payload.user),
				user: payload.user
			} 

		default: return state
	}

};

export default authReducer