import { 
	ADD_FLASH_MESSAGE, 
	DELETE_FLASH_MESSAGE 
} from '../actions/typeConstants';
import shortid from 'shortid';
import findIndex from 'lodash/findIndex';

export const flashMessages = (state = [], action = {}) => {

	let payload = action.payload;

	switch(action.type) {

	case ADD_FLASH_MESSAGE:
		return [
			...state, 
			{ 
				id: shortid.generate(),
				type:	payload.message.type,
				text: payload.message.text 
			}
		];

	case DELETE_FLASH_MESSAGE:
		const index = findIndex(state, { _id: payload._id })
		if (index >= 0) {
			return [
				...state.slice(0, index),
				...state.slice(index + 1)
			]
		}
		return state;
	
	default:
		return state;
	}
};
	
export default flashMessages;
