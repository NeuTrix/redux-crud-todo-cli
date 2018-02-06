import axios from 'axios';
// import fetch from 'cross-fetch'

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

export const todosHasErrored = (bool) => {
	return {
		type: TODOS_HAS_ERRORED ,
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

export function todosFetchData(url ) {

// return 'howdy!'
	return function (dispatch) { 

		// dispatch loading to true
		
		// fetch the todos

		return fetch(url)
			.then(
					response => response.json(),

					error => console.log('An error has occured', error)
				)
			// .then(json =>)

		// dispatch loading to false
		// deploy if there's an error
	
	}
}

