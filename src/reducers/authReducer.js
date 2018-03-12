import isEmpty from 'lodash/isEmpty'
import SET_CURRENT_USER from '../actions/typeConstants'

const initialState = {
	isAuthenicated: false,
	user: {}
}

export const authReducer = (state = initalState, action = { }) => {

	switch(action.type) {

		payload = action.payload

		case SET_CURRENT_USER:
			return {
				isAuthenicated: !isEmpty(payload.user)
				user: payload.user
			} 
		default: return state
	}

};

export default authReducer