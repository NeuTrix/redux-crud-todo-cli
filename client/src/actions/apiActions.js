// import axios from 'axios';
import fetch from 'cross-fetch'

export const TODOS_IS_LOADING  = 'TODOS_IS_LOADING'
export const TODOS_HAS_ERRORED = 'TODOS_HAS_ERRORED'
export const TODOS_HAS_FETCHED = 'TODOS_HAS_FETCHED'

export function todosIsLoading(bool)  {
	return {
		type: TODOS_IS_LOADING,
		payload: {
			status: bool
		}
	}
}

export const todosHasFetched = (bool) => {
	return {
		type: TODOS_HAS_FETCHED,
		payload: {
			status: bool
		}
	}
};

export const todosHasErrored = (bool) => {
	return {
		type: TODOS_HAS_ERRORED ,
		payload: {
			status: bool
		}
	}
}

// ========= ========= ========= 

export function setInitialState(url) {

	return(dispatch) => {

		// note that it's loading
		dispatch(todosIsLoading(true));
		
		// check for errors, if so
		dispatch(todosHasErrored(true));

		// once finished loading
		dispatch(todosIsLoading(false));

		// if succesfully delivered

		dispatch(todosHasFetched(true))

	}
}





