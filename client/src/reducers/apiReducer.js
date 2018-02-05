import axios from 'axios';
// const url: 'http://localhost:3003/api/todos'

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