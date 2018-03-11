// single source for api address changes

let herokuRoute = 'https://redux-todo-api.herokuapp.com'
let localRoute = 'http://localhost:3003'

// let live // either test or live (deployed)

// // set the state
// live = true
// // live = false

// export const apiCreate = () => {
// 	return live ?  `${herokuRoute}` :  localRoute
// };
// // export const apiCreate = () => {
// // 	return live ?  herokuRoute :  localRoute
// // };

// export const apiCreateLive = () => {
// 	return herokuRoute
// };



export const baseApi = localRoute