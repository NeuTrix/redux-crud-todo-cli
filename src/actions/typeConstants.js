// readtActions (apiReducer)
export const TODOS_IS_LOADING		 	= 'TODOS_IS_LOADING';
export const TODOS_HAS_FETCHED		= 'TODOS_HAS_FETCHED';
export const TODOS_HAS_ERRORED		= 'TODOS_HAS_ERRORED';

// loginActions (authReducer)
export const SET_CURRENT_USER 		= 'SET_CURRENT_USER';

// createActions (createReducer)
export const CREATE_IS_POSTING 		= 'CREATE_IS_POSTING';
export const CREATE_HAS_SUCCEEDED = 'CREATE_HAS_SUCCEEDED';
export const CREATE_HAS_ERRORED 	= 'CREATE_HAS_ERRORED';

// editAcions (editReducer)
export const EDIT_IS_POSTING  		= 'EDIT_IS_POSTING';
export const EDIT_HAS_SUCCEEDED 	= 'EDIT_HAS_SUCCEEDED';
export const EDIT_HAS_ERRORED 		= 'EDIT_HAS_ERRORED';

// deleteAcions (deleteReducer)
export const DELETE_IS_POSTING  	= 'DELETE_IS_POSTING';
export const DELETE_HAS_SUCCEEDED = 'DELETE_HAS_SUCCEEDED';
export const DELETE_HAS_ERRORED 	= 'DELETE_HAS_ERRORED';

// flashActions (flashMessages)
export const ADD_FLASH_MESSAGE 		= 'ADD_FLASH_MESSAGE';
export const DELETE_FLASH_MESSAGE = 'DELETE_FLASH_MESSAGE';


// todoActions (todoReducer)
export const ADD_TODO = 'ADD_TODO';
export const EDIT_ITEM  = 'EDIT_ITEM';
export const READ_ALL_TODOS = 'READ_ALL_TODOS';
export const REMOVE_TODO = 'REMOVE_TODO';
export const RESET_TODOS_STATE = 'RESET_TODOS_STATE';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const UPDATE_ITEM = 'UPDATE_TASK'; // Updates entire item obj.
export const UPDATE_TASK = 'UPDATE_TASK';
export const UPDATE_RANK = 'UPDATE_RANK';
export const UPDATE_DATE = 'UPDATE_DATE';
