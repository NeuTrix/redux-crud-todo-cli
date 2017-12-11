// import React from 'react'
import _ from 'lodash'

// state can also be an object with a collection of other objects or
// arrays.  SImple array used her for this test
const initialState = [];

const TodoReducer = (state = [], action) => {

	let payload  = action.payload;
	let type = action.type;

	switch (type) {

		case "ADD_TODO":
			action.payload.id = _.uniqueId("todo_");

			// wrong: mutates state
			// state.push(payload)

			// good: doesn't mutate
			return [...state, payload];

			break;

		case "REMOVE_TODO":
			
			let id = payload.id

			let matchId = (todo) => {
				if(todo.id === id) {
					return true;
				}
					return false;
			}

			if(state.some(matchId)) {
				let index = state.findIndex(matchId)

				return [
					...state.slice(0, index), 
				 	...state.slice(index+1)
				]

			} 
				return state
			break;

		default:
			return state
	}
}

export default TodoReducer