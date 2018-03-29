import * as mod from '../actions/typeConstants';

const initState = {
	todosIsLoading: false,
	todosHasFetched: false,
	todosHasErrored: false
};

export const readReducer = (state = initState, action = {}) => {
	let payload = action.payload;

	switch(action.type) {

	case mod.TODOS_IS_LOADING:
		return {
			...state, 
			...{ todosIsLoading: payload.status }
		};
		
	case mod.TODOS_HAS_FETCHED:
		return {
			...state, 
			...{ todosHasFetched: payload.status }
		};
		
	case mod.TODOS_HAS_ERRORED:
		return {
			...state, 
			...{ todosHasErrored: payload.status }
		};

	default:
		return state;
	}
};
	
export default readReducer;
