import axios from 'axios';

export const todosIsLoading = (bool) => {
	return {
		type: 'TODOS_IS_LOADING',
		payload: {
			status: bool
		}
	}
}

export const todosHasErrored = (bool) => {
	return {
		type: 'TODOS_HAS_ERRORED' ,
		payload: {
			status: bool
		}
	}
}

export const todosFetchData = (url) => {

	return {
		type: 'TODOS_FETCH_DATA',
		payload: {
			fetchData: (dispatch) => { 
		
				dispatch(todosIsLoading(true))
		
				axios.get(url)
					.then ((res) => {
						// console.log('API is working', res.data)
						return res
					})
					// .catch
			}
		}
	}
}

