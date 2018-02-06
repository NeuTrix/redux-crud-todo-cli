import axios from 'axios';

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


/*export const todoHasFetched = (bool) => {
	return {
		type: ''
		payload: {

		}
	}
};*/

export const todosFetchData = (url, ) => {

	return {
		type: 'TODOS_FETCH_DATA',
		payload: {
			fetchData: (dispatch) => { 
		
				dispatch(todosIsLoading(true))
		
				axios.get(url)
					.then((res) => {
						// console.log('API is working', res)
						// return res.json
					})
					.catch((err) => {
						console.log("An error occured: ", err.mesage)
					});
			}
		}
	}
}

