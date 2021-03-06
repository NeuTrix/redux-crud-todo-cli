// createActions (createApiReducer)
export const CREATE_IS_POSTING 		  = 'CREATE_IS_POSTING';
export const CREATE_HAS_SUCCEEDED   = 'CREATE_HAS_SUCCEEDED';
export const CREATE_HAS_ERRORED 	  = 'CREATE_HAS_ERRORED';

// deleteAcions (deleteApiReducer)
export const DELETE_IS_POSTING  	  = 'DELETE_IS_POSTING';
export const DELETE_HAS_SUCCEEDED   = 'DELETE_HAS_SUCCEEDED';
export const DELETE_HAS_ERRORED 	  = 'DELETE_HAS_ERRORED';

// editAcions (editApiReducer)
export const EDIT_IS_POSTING  		  = 'EDIT_IS_POSTING';
export const EDIT_HAS_SUCCEEDED 	  = 'EDIT_HAS_SUCCEEDED';
export const EDIT_HAS_ERRORED 		  = 'EDIT_HAS_ERRORED';

// flashActions (flashReducer)
export const ADD_FLASH_MESSAGE 		  = 'ADD_FLASH_MESSAGE';
export const DELETE_FLASH_MESSAGE   = 'DELETE_FLASH_MESSAGE';

// loginActions (authReducer)
export const LOGIN_IS_POSTING 	  = 'LOGIN_IS_POSTING';
export const LOGIN_HAS_ERRORED 	  = 'LOGIN_ERRORED';
export const LOGIN_HAS_SUCCEEDED = 'LOGIN_SUCCEDED';

// readtActions (readApiReducer)
export const TODOS_IS_LOADING		 	  = 'TODOS_IS_LOADING';
export const TODOS_HAS_FETCHED		  = 'TODOS_HAS_FETCHED';
export const TODOS_HAS_ERRORED		  = 'TODOS_HAS_ERRORED';

// registerActions (authReducer)
export const REGISTER_IS_POSTING 	  = 'REGISTER_IS_POSTING';
export const REGISTER_HAS_ERRORED 	  = 'REGISTER_ERRORED';
export const REGISTER_HAS_SUCCEEDED = 'REGISTER_SUCCEDED';
export const SET_CURRENT_USER 		  = 'SET_CURRENT_USER';

// todoActions (todoReducer)
export const ADD_TODO 						  = 'ADD_TODO';
export const EDIT_ITEM  					  = 'EDIT_ITEM';
export const TODOS_INITIAL_STATE 	  = 'TODOS_INITIAL_STATE';
export const REMOVE_TODO 					  = 'REMOVE_TODO';
export const READ_SAVED_TODOS			  = 'READ_SAVED_TODOS';