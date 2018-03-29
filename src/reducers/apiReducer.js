import * as mod from '../actions/typeConstants';

export const apiReducer = (
	
	state = {
		todosIsLoading: false,
		todosHasFetched: false,
		todosHasErrored: false
	}, 

	action) => {

	let payload = action.payload;

	switch(action.type) {

	case mod.TODOS_IS_LOADING:
		return {
			...state, 
			...{ todosIsLoading:payload.status }
		};
	
	case mod.TODOS_HAS_FETCHED:
		return {
			...state, 
			...{ todosHasFetched:payload.status }
		};
	
	case mod.TODOS_HAS_ERRORED:
		return {
			...state, 
			...{ todosHasErrored:payload.status }
		};

	default:
		return state;
	}
};
	
export default apiReducer;
