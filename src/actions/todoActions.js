import {
	ADD_TODO,
	EDIT_ITEM,
	READ_ALL_TODOS, 
	REMOVE_TODO,
	RESET_TODOS_STATE,
	TOGGLE_COMPLETE,
	UPDATE_DATE,
	UPDATE_RANK,
	UPDATE_TASK
} from '../actions/typeConstants';

export const resetTodosState = (resetState) => {
	return {
		type: RESET_TODOS_STATE,
		payload: {
			resetState: resetState
		}
	};
}

export const todosSetInitialState = (initialState) => {
	return {
		type: READ_ALL_TODOS,
		payload: {
			newState: initialState
		}
	};
}

export const addTodo = (todo) => {
// ??? can this just be 'todo'
	return {
		type: ADD_TODO,
		payload: {
			todo: todo
		}
	};
};

export const editItem = (id, _update) => {
	return {
		type: EDIT_ITEM,
		payload: {
			_id: id,
			update: _update
		}
	};
};

export const removeTodo = (id) => {
	return {
		type: REMOVE_TODO,
		payload: {_id: id}
	};
};

export const toggleComplete = (id) => {
	return {
		type: TOGGLE_COMPLETE,
		payload: {_id: id}
	};
};

//updates task only
export const updateTask = (id, _task) => {
	return {
		type: UPDATE_TASK,
		payload: {
			_id: id,
			task: _task
		}
	};
};

export const updateRank = (id, _rank) => {
	return {
		type: UPDATE_RANK,
		payload: {
			_id: id,
			rank: _rank
		}
	};
};

export const updateDate = (id, _date) => {
	return {
		type: UPDATE_DATE,
		payload: {
			_id: id,
			date: _date
		}
	};
};


