/* eslint-env jest, mocha, chai */

// ======== esllint
/*global TodoReducer it:true*/
/*eslint no-undef: "error"*/

import shortid from 'shortid';

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

	describe.only('The SUCCESS reducer', () => {

		afterEach(() => {
			store.dispatch(todosHasFetched(false));
		});

		it('... initialState has an todosHasFetched prop set to false', () => {
			expect(initialState).to.have.property('todosHasFetched')
				.to.eql(false)
		})

		it.only('... should immutably change the state to true', () => {
			let testState = [
				{ _id: shortid.generate(), date: 	'2020-01-01', completed: false, task:'Get some Milk', rank: 'High' },
				{ _id: shortid.generate(), date: 	'2020-01-01', completed: false, task:'Kiss my daughter', rank: 'Med' },
				{ _id: shortid.generate(), date: 	'2020-01-01', completed: false, task:'Celebrate life!', rank: 'Low' },
			];
			store.dispatch(todosHasFetched(testState));
			// let hasFetched = store.getState().todosApi.todosHasFetched
			let hasFetched = store.getState().todosApi.todosHasFetched
			expect(hasFetched.todos[0].task).to.eql('Get some Milk');
		})

	})

	describe('The ERROR reducer', () => {

		afterAll(() => {
			store.dispatch(todosHasErrored(false));
		});

		it('... initialState has an todosHasErrored prop set to false', () => {
			expect(initialState).to.have.property('todosHasErrored')
				.to.eql(false)
		})

		it('... should immutably change the state to true', () => {
			store.dispatch(todosHasErrored(true));
			let hasFetched = store.getState().todosApi.todosHasErrored
			expect(hasFetched).to.eql(true);
		})

	})

});
