import * as mod from '../actions/typeConstants';

const TodoReducer = (state=[{task:'Do the things!'}], action={}) => {
	
	let _pay  = action.payload;

	switch (action.type) {

		case mod.READ_SAVED_TODOS: {
			return [ ..._pay.savedState ];
		}

		case mod.ADD_TODO: 
			return [ ...state, _pay.todo ];

		case mod.EDIT_ITEM: {
			return state.map (task => 
				task._id === _pay._id ? { ...task, ..._pay.edit } : task )
		}

		case mod.REMOVE_TODO: {
			return state.filter( task => task._id !== _pay._id )
		}

		default: return state 
	} 
}; 

export default TodoReducer;