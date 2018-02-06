/* eslint-env jest, mocha, chai */

// ======== esllint
/*global TodoReducer it:true*/
/*eslint no-undef: "error"*/

import deepFreeze from 'deep-freeze';
import { expect } from 'chai';
import store from '../../store/store';
import todosApi from '../../reducers/apiReducer';

import { 
	todosIsLoading,
	todosHasFetched,
	todosHasErrored,
	getTodosData
} from '../../actions/apiActions';

// ====================================

describe('The apiReducer action suite', () => {
	let ApiState = store.getState().todosApi;
	deepFreeze(ApiState)

	it('has a state', () => {
		console.log(ApiState)
	})



});
