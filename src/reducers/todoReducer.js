import {
	ADD_TODO,
	EDIT_ITEM,
	READ_ALL_TODOS, 
	REMOVE_TODO,
	RESET_TODOS_STATE,
	TOGGLE_COMPLETE
} from '../actions/typeConstants';

const TodoReducer = (state = [ ] , action) => {
	let payload  = action.payload;
	let type = action.type;

	switch (type) {

		case ADD_TODO: 
			return [...state, payload.todo];

		case EDIT_ITEM: {
			let _id = 	payload._id;
			let edit = payload.edit; // an edit object

			let matchId = (task) => { return task._id === _id; };
			let targetIndex = state.findIndex(matchId);

			let editedTask = state.map((task, index) => {
				if (index !== targetIndex ) {
					return task;
				} else {
					// spread operator will replace the editd properties
					return {
						...task,
						...edit
					};
				}
			});
			return Object.assign([], state, editedTask);
		}

		case READ_ALL_TODOS: 
			return Object.assign([ ], state, payload.newState);

		
		case REMOVE_TODO:{
			let _id = payload._id;
			let matchId = (task) => { return task._id === _id; };
			if (state.some(matchId)) {
				let index = state.findIndex(matchId);
				return [
					...state.slice(0, index), 
					...state.slice(index+1)
				];
			} 
			return state;
		}

		case RESET_TODOS_STATE: 
			return state.filter (todo => { 
			return todo === undefined || todo === null
		});

		case TOGGLE_COMPLETE: {
			let _id = payload._id;
			let matchId = (task) => { return task._id === _id; };
			let targetIndex = state.findIndex(matchId);
			let newState = state.map((task, index) => {
				if (index !== targetIndex ) {
					return task;
				}
				return Object.assign(
					{}, 
					task, 
					{completed:!task.completed}
				);
			});
			return Object.assign([], state, newState);
		}

		default: {
			return state;
		}

	} 
}; 

export default TodoReducer;