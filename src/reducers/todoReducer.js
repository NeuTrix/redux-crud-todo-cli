import * as mod from '../actions/typeConstants';

const TodoReducer = (state = [] , action) => {
	let payload  = action.payload;
	let type = action.type;

	switch (type) {

		case mod.ADD_TODO: 
			return [...state, payload.todo];

		case mod.EDIT_ITEM: {
			let _id = 	payload._id;
			let edit = payload.edit; // an edit object

			let matchId = (task) => { return task._id === _id; };
			let targetIndex = state.findIndex(matchId);

			let editedTask = state.map((task, index) => {
				if (index !== targetIndex ) {
					return task;
				} else {
					// spread operator will replace the editd properties
					return { ...task, ...edit };
				}
			});
			return Object.assign([], state, editedTask);
		}

		case mod.TODOS_INITIAL_STATE: 
			return Object.assign([], state, payload.newState);
		
		case mod.REMOVE_TODO:{
			let _id = payload._id;
			let matchId = (task) => { return task._id === _id; };
			if (state.some(matchId)) {
				let ndx = state.findIndex(matchId);
				return [ ...state.slice(0, ndx),  ...state.slice(ndx+1) ];
			} 
			return state;
		}

		case mod.RESET_TODOS_STATE: 
			return state.filter (todo => { 
			return todo === undefined || todo === null
		});

		case mod.TOGGLE_COMPLETE: {
			let _id = payload._id;
			let matchId = (task) => { return task._id === _id; };
			let targetIndex = state.findIndex(matchId);
			let newState = state.map((task, index) => {
				if (index !== targetIndex ) {
					return task;
				}
				return Object.assign({}, task, {completed:!task.completed});
			});
			return Object.assign([], state, newState);
		}

		default: {
			return state;
		}
	} 
}; 

export default TodoReducer;