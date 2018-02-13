import shortid from 'shortid';

// set constants
import {
	TODOS_SET_INITIAL_STATE
} from '../actions/todoActions'

let initialState =[
	{	
		_id: shortid.generate(),
		completed:  false,
		date: new Date().toDateString(),
		details: "default details",
		owner: 'Tester',
		rank: 'High',
		task:  "Initial Task from TodoReducer"
	}
]

// ========= 

const TodoReducer = (state = initialState , action) => {

	let payload  = action.payload;
	let type = action.type;

	switch (type) {

		case TODOS_SET_INITIAL_STATE: 
			 return payload.newState

		case 'ADD_TODO': 
			return [...state, payload];

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
			return state
		}

		case 'TOGGLE_TODO': {
			let _id = payload._id;
			let matchId = (task) => { return task._id === _id; };
			let targetIndex = state.findIndex(matchId);

			let newState = state.map((task, index) => {
				if(index !== targetIndex ) {
					return task;
				}
				// find the object and toggle it's comp state
				return Object.assign(
					{}, 
					task, 
					{completed:!task.completed}
				);
			});
			return Object.assign([], state, newState);
		}

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
			
		case 'UPDATE_RANK': {
			let _id =		payload._id;
			let _rank = payload.rank;

			let matchId = (task) => { return task._id === _id; };
			let targetIndex = state.findIndex(matchId);

			let updatedTask = state.map((task, index) => {
				if(index !== targetIndex ) {
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

		case 'UPDATE_DATE': {
			let _id =		payload._id;
			let _date = payload.date;

			let matchId = (task) => { return task._id === _id; };
			let targetIndex = state.findIndex(matchId);

			let updatedTask = state.map((task, index) => {
				if(index !== targetIndex ) {
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
	} // end switch
}; // end TodoReducer

export default TodoReducer;