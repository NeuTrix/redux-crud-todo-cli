/* eslint-env jest, mocha, chai */

// ======== esllint
/*global TodoReducer it:true*/
/*eslint no-undef: "error"*/

import deepFreeze from 'deep-freeze';
import { expect } from 'chai';
import store from '../../store/store';
import apiReducer from '../../reducers/apiReducer';

import { 
	todosIsLoading,
	todosHasFetched,
	todosHasErrored,
	getTodosData
} from '../../actions/apiActions';

// ====================================

describe('The apiReducer action suite', () => {
	let initialState

	beforeAll(() => {
		initialState = store.getState().todosApi;
		deepFreeze(initialState)
	});

describe('The LOADING reducer', () => {

	afterAll(() => {
		store.dispatch(todosIsLoading(false));
	});

	it('... initialState has an isLoading prop set to false', () => {
		expect(initialState).to.have.property('todosIsLoading')
			.to.eql(false)
	})

	it('... should immutably change the state to true', () => {
		store.dispatch(todosIsLoading(true));
		let loading = store.getState().todosApi.todosIsLoading
		expect(loading).to.eql(true);
	})

})

describe('The SUCCESS reducer', () => {

	afterAll(() => {
		store.dispatch(todosIsLoading(false));
	});

	it('... initialState has an todosHasFetched prop set to false', () => {
		expect(initialState).to.have.property('todosHasFetched')
			.to.eql(false)
	})

	it('... should immutably change the state to true', () => {
		store.dispatch(todosIsLoading(true));
		let loading = store.getState().todosApi.todosHasFetched
		expect(loading).to.eql(true);
	})

})




});
