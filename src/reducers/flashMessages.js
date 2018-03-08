// import action constants- allows JS to throw spelling errors
import { ADD_FLASH_MESSAGE } from '../actions/typeConstants';
import shortid from 'shortid';

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
		]
	
	default:
		return state;
	}
};
	
export default flashMessages;
