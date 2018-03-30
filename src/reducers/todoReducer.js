import * as mod from '../actions/typeConstants';

const TodoReducer = (state = [] , action = {}) => {
	let payload  = action.payload;
	let type = action.type;

	switch (type) {

	case mod.READ_SAVED_TODOS: {
		return [ ...payload.savedState ];
	}

	case mod.ADD_TODO: 
		return [...state, payload.todo];

	case mod.EDIT_ITEM: {
		let _id = payload._id;
		let task = state.filter(task => task._id === _id);
		let editedTask = { ...task[0], ...payload.edit };
		return state.map(task => task._id === _id ? editedTask : task);
	}

	case mod.REMOVE_TODO: {
		let _id = payload._id;
		let matchId = (task) => { return task._id === _id; };
		if (state.some(matchId)) {
			let index = state.findIndex(matchId);
			return [ 
				...state.slice(0, index),  
				...state.slice(index + 1) 
			];
		} 
		return state;
	}

	default: {
		return state;
	}
	} 
}; 

export default TodoReducer;