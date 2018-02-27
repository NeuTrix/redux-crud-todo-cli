/* eslint-env jest, mocha, chai */

// ======== esllint
/*eslint no-undef: "error"*/

import deepFreeze from 'deep-freeze';
import { expect } from 'chai';
import store from '../../store/store';

import { 
	createIsPosting,
	createHasSucceeded,
	createHasErrored,
	// createTodo
} from '../../actions/createActions';

// ====================================

describe('The apiReducer action suite', () => {
	let initialState;

	beforeAll(() => {
		initialState = store.getState().createApi;
		deepFreeze(initialState);
	});

	describe('The POSTING reducer', () => {

		afterAll(() => {
			store.dispatch(createIsPosting(false));
		});

		it('... initialState has an isLoading prop set to false', () => {
			expect(initialState).to.have.property('createIsPosting')
				.to.eql(false);
		});

		it('... should immutably change the state to true', () => {
			store.dispatch(createIsPosting(true));
			let loading = store.getState().createApi.createIsPosting;
			expect(loading).to.eql(true);
		});

	});

	describe('The SUCCESS reducer', () => {

		afterEach(() => {
			store.dispatch(createHasSucceeded(false));
		});

		it('... initialState has an createHasSucceeded prop set to false', () => {
			expect(initialState).to.have.property('createHasSucceeded')
				.to.eql(false);
		});

	});

	describe('The ERROR reducer', () => {

		afterAll(() => {
			store.dispatch(createHasErrored(false));
		});

		it('... initialState has an createHasErrored prop set to false', () => {
			expect(initialState).to.have.property('createHasErrored')
				.to.eql(false);
		});

	});

});
