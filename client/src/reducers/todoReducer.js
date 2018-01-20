// import axios from 'axios';
import shortid from 'shortid';

// replace with an API call
let initialState = [
	{ _id: shortid.generate(), date: 	'2020-01-01', completed: false, task:'Get some Milk', rank: 'High' },
	{ _id: shortid.generate(), date: 	'2020-01-01', completed: false, task:'Kiss my daughter', rank: 'Med' },
	{ _id: shortid.generate(), date: 	'2020-01-01', completed: false, task:'Celebrate life!', rank: 'Low' },
];

// ========= 
/*let initialState

axios.get('http://localhost:3003/api/todos')
	.then((res) => {
		 initialState = res.data
		console.log("axios route",res.data)
	})*/

// ========= 	

const TodoReducer = (state = initialState, action) => {

	let payload  = action.payload;
	let type = action.type;

	switch (type) {

	case 'ADD_TODO': {
		return [...state, payload];
	}
	// break;

	case 'REMOVE_TODO':{

		let _id = payload._id;
		let matchId = (task) => { return task._id === _id; };

		if(state.some(matchId)) {
			let index = state.findIndex(matchId);

			return [
				...state.slice(0, index), 
				...state.slice(index+1)
			];
		} 
		break;
	}

	case 'TOGGLE_TODO': {

		let _id = payload._id;
		let matchId = (task) => { return task._id === _id; };
		let target = state.findIndex(matchId);

		let newState = state.map((task, index) => {
			if(index !== target ) {
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
	// break;

	case 'UPDATE_TODO': {

		let _id = 	payload._id;
		let _task = payload.task;

		let matchId = (task) => { return task._id === _id; };
		let targetIndex = state.findIndex(matchId);

		let updatedTask = state.map((task, index) => {
			if(index !== targetIndex ) {
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
	// break;
		
	case 'UPDATE_RANK': {

		let _id =		payload._id;
		let _rank = payload.rank;

		let matchId = (task) => { return task._id === _id; };
		let target = state.findIndex(matchId);

		let updatedTask = state.map((task, index) => {
			if(index !== target ) {
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
	// break;

	case 'UPDATE_DATE': {

		let _id =		payload._id;
		let _date = payload.date;

		let matchId = (task) => { return task._id === _id; };
		let target = state.findIndex(matchId);

		let updatedTask = state.map((task, index) => {
			if(index !== target ) {
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
	// break;

	default: {
		return state;
	}
	}
};
export default TodoReducer;