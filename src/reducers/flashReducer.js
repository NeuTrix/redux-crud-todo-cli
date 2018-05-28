import shortid from 'shortid';

import {
	ADD_FLASH_MESSAGE,
	DELETE_FLASH_MESSAGE,
} from '../actions/typeConstants';

const flashReducer = (state = [], action = {}) => {

	let _pay = action.payload;

	switch (action.type) {
	case ADD_FLASH_MESSAGE:
		return [
			...state, 
			{ 
				_id: shortid.generate(),
				type:	_pay.message.type,
				text: _pay.message.text 
			}
		];

	case DELETE_FLASH_MESSAGE:
		return ( 
			state.length > 1 ?
				state.filter( msg => msg._id !== _pay._id) :
				state = []
		);

	default:
		return state;
	}
};

export default flashReducer;