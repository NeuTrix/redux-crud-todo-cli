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

export function getTodosData(url) {
	
	let initialState

	axios.get('http://localhost:3003/api/todos')
		.then((res) => {
			console.log("axios route in REDUCER",res.data)
			  // console.log("initialState IS:", initialState)
			  initialState = res.data
			  console.log('now data IS:', initialState)
		})

}

