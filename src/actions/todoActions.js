import * as mod from './typeConstants'

export const addTodo = (todo) => {
	return {
		type: mod.ADD_TODO,
		payload: { todo }
	};
};

export const editItem = ( _id, edit) => {
	return {
		type: mod.EDIT_ITEM,
		payload: { _id, edit }
	};
};

export const resetTodosState = (resetState) => {
	return {
		type: mod.RESET_TODOS_STATE,
		payload: { resetState }
	};
}

export const todosSetInitialState = (newState) => {
	return {
		type: mod.TODOS_INITIAL_STATE,
		payload: { newState }
	};
}
export const removeTodo = (_id) => {
	return {
		type: mod.REMOVE_TODO,
		payload: { _id }
	};
};

export const toggleComplete = (_id) => {
	return {
		type: mod.TOGGLE_COMPLETE,
		payload: { _id }
	};
};



