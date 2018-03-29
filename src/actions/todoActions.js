import * as action from '../actions/typeConstants'

export const addTodo = (todo) => {
	return {
		type: action.ADD_TODO,
		payload: { todo }
	};
};

export const editItem = ( _id, edit) => {
	return {
		type: action.EDIT_ITEM,
		payload: { _id,  edit }
	};
};

export const resetTodosState = (resetState) => {
	return {
		type: action.RESET_TODOS_STATE,
		payload: { resetState }
	};
}

export const todosSetInitialState = (newState) => {
	return {
		type: action.READ_ALL_TODOS,
		payload: { newState }
	};
}
export const removeTodo = (_id) => {
	return {
		type: action.REMOVE_TODO,
		payload: { _id }
	};
};

export const toggleComplete = (_id) => {
	return {
		type: action.TOGGLE_COMPLETE,
		payload: { _id }
	};
};



