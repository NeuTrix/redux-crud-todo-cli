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
	
		// dispatch(todosIsLoading(true));

		return axios.get(url)
			.then((res) => {
				// return console.log('API is working', res)
				 console.log(res.json)
			})
			.catch((err) => {
				console.log("An error occured: ", err.mesage)
			});
		}
}

