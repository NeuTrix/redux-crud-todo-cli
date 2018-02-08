// Set new id's uniquely, until API is installed in this app
import shortid from 'shortid';

export const TODOS_SET_INITIAL_STATE = 'TODOS_SET_INITIAL_STATE'

export function todosSetInitialState(initialState) {
	// used to async set up a full revised initialState for todos array
	return {
		type: TODOS_SET_INITIAL_STATE,
		payload: {
			newState: initialState
		}
	}
}

export const addTodo = (todo) => {

	return {
		type: 'ADD_TODO',
		payload: {
			// _id: todo._id,	
			_id: shortid.generate(),
			date: todo.date,
			completed: todo.completed,
			details: todo.details,
			owner: todo.owner,
			rank: todo.rank,
			task: todo.task,
		}
	};
};

export const removeTodo = (id) => {
	return {
		type: 'REMOVE_TODO',
		payload: {_id: id}
	};
};

export const toggleTodo = (id) => {
	return {
		type: 'TOGGLE_TODO',
		payload: {_id: id}
	};
};

//updates task only
export const updateTodo = (id, _task) => {
	return {
		type: 'UPDATE_TODO',
		payload: {
			_id: id,
			task: _task
		}
	};
};

export const updateRank = (id, _rank) => {
	return {
		type: 'UPDATE_RANK',
		payload: {
			_id: id,
			rank: _rank
		}
	};
};

export const updateDate = (id, _date) => {
	return {
		type: 'UPDATE_DATE',
		payload: {
			_id: id,
			date: _date
		}
	};
};


