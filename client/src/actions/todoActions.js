// import shortid from 'shortid';

export const addTodo = (_todo) => {
	return {
		type: 'ADD_TODO',
		payload: {
			_id: _todo._id,
			date: _todo.date,
			completed: _todo.completed,
			details: _todo.details,
			owner: _todo.owner,
			rank: _todo.rank,
			task: _todo.task,
		}
	};
};

export const removeTodo = (_id) => {
	return {
		type: 'REMOVE_TODO',
		payload: {id: _id}
	};
};

export const toggleTodo = (_id) => {
	return {
		type: 'TOGGLE_TODO',
		payload: {id: _id}
	};
};

//updates task only
export const updateTodo = (_id, _task) => {
	return {
		type: 'UPDATE_TODO',
		payload: {
			id: _id,
			task: _task
		}
	};
};

export const updateRank = (_id, _rank) => {
	return {
		type: 'UPDATE_RANK',
		payload: {
			id: _id,
			rank: _rank
		}
	};
};

export const updateDate = (_id, _date) => {
	return {
		type: 'UPDATE_DATE',
		payload: {
			id: _id,
			date: _date
		}
	};
};

