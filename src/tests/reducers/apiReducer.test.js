/* eslint-env jest, mocha, chai */
/*eslint no-undef: "error"*/
import deepFreeze from 'deep-freeze';
import { expect } from 'chai';
import store from '../../store/store';
import * as _a from '../../actions/readActions';

describe('The readReducer action suite', () => {
	let initialState;

	beforeAll(() => {
		initialState = store.getState().todosApi;
		deepFreeze(initialState);
	});

	describe('The LOADING reducer', () => {
		afterAll(() => {
			store.dispatch(_a.todosIsLoading(false));
		});

		it('... initialState has an isLoading prop set to false', () => {
			expect (initialState).to.have.property('todosIsLoading')
				.to.eql(false);
		});

		it('... should immutably change the state to true', () => {
			store.dispatch(_a.todosIsLoading(true));
			let loading = store.getState().todosApi.todosIsLoading;
			expect (loading).to.eql(true);
		});
	});

	xdescribe('The SUCCESS reducer', () => {
		afterEach(() => {
			store.dispatch(_a.todosHasFetched(false));
		});

		it('... initialState has an _a.todosHasFetched prop set to false', () => {
			expect (initialState).to.have.property('_a.todosHasFetched')
				.to.eql(false);
		});
	});

	describe('The ERROR reducer', () => {
		afterAll(() => {
			_a.store.dispatch(_a.todosHasErrored(false));
		});

		it('... initialState has an todosHasErrored prop set to false', () => {
			expect (initialState).to.have.property('todosHasErrored')
				.to.eql(false);
		});

		it('... should immutably change the state to true', () => {
			store.dispatch(_a.todosHasErrored(true));
			let hasFetched = store.getState().todosApi.todosHasErrored;
			expect (hasFetched).to.eql(true);
		});
	});
});
