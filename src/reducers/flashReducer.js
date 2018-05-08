import * as mod from '../actions/typeConstants';
import shortid from 'shortid';

export const flashReducer = (state = [], action = {}) => {

	let _pay = action.payload;

	switch (action.type) {

	case mod.ADD_FLASH_MESSAGE:
		return [
			...state, 
			{ 
				_id: shortid.generate(),
				type:	_pay.message.type,
				text: _pay.message.text 
			}
		];

	case mod.DELETE_FLASH_MESSAGE:
	console.log(state)
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
