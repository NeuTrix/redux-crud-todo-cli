import {
	ADD_TODO,
	EDIT_ITEM,
	REMOVE_TODO,
	READ_ALL_TODOS, 
	TOGGLE_COMPLETE,
	UPDATE_DATE,
	UPDATE_RANK,
	UPDATE_TASK
} from '../actions/todoActions';

const TodoReducer = (state = [ ] , action) => {
	let payload  = action.payload;
	let type = action.type;

	switch (type) {
	case READ_ALL_TODOS: 
		return Object.assign([ ], state, payload.newState);

	case ADD_TODO: 
		return [...state, payload.todo];

	case EDIT_ITEM: {
		let _id = 	payload._id;
		let update = payload.update; // an update object

		let matchId = (task) => { return task._id === _id; };
		let targetIndex = state.findIndex(matchId);

		let editedTask = state.map((task, index) => {
			if (index !== targetIndex ) {
				return task;
			} else {
				// spread operator will replace the updated properties
				return {
					...task,
					...update
				};
			}
		});
		return Object.assign([], state, editedTask);
	}

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

// +++++++++ REFACTOR: Redundant vs edit item  +++++++++ 
	case UPDATE_TASK: {
		let _id = 	payload._id;
		let _task = payload.task;
		let matchId = (task) => { return task._id === _id; };
		let targetIndex = state.findIndex(matchId);
		let updatedTask = state.map((task, index) => {
			if (index !== targetIndex ) {
				return task;
			} else {
				return Object.assign(
					{}, 
					task, 
					{ task: _task }
				);
			}
		});
		return Object.assign([], state, updatedTask);
	}
				
	case UPDATE_RANK: {
		let _id =		payload._id;
		let _rank = payload.rank;
		let matchId = (task) => { return task._id === _id; };
		let targetIndex = state.findIndex(matchId);
		let updatedTask = state.map((task, index) => {
			if (index !== targetIndex ) {
				return task;
			} else {
				return Object.assign(
					{}, 
					task, 
					{ rank: _rank }
				);
			}
		});
		return Object.assign([], state, updatedTask);
	}

	case UPDATE_DATE: {
		let _id =		payload._id;
		let _date = payload.date;
		let matchId = (task) => { return task._id === _id; };
		let targetIndex = state.findIndex(matchId);
		let updatedTask = state.map((task, index) => {
			if (index !== targetIndex ) {
				return task;
			} else {
				return Object.assign(
					{}, 
					task, 
					{ date: _date }
				);
			}
		});
		return Object.assign([], state, updatedTask);
	}

	default: {
		return state;
	}
	} 
}; 

export default TodoReducer;