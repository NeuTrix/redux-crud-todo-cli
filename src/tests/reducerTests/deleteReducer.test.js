/* eslint-env jest, mocha, chai */

// ======== esllint
/*eslint no-undef: "error"*/

import axios from 'axios';

import deepFreeze from 'deep-freeze';
import { expect } from 'chai';
import store from '../../store/store';

import { 
	deleteIsPosting,
	deleteHasSucceeded,
	deleteHasErrored,
	deleteTodo
} from '../../actions/deleteActions';

import { startState } from '../../actions/Read-Actions'
// ====================================

describe('The deleteReducer action suite', () => {
	let initialState;

	beforeAll(() => {
		initialState = store.getState().deleteApi;
		deepFreeze(initialState);
	});

	describe('The POSTING reducer', () => {

		afterAll(() => {
			store.dispatch(deleteIsPosting(false));
		});

		it('... has an isLoading prop set to false', () => {
			expect(initialState).to.have.property('deleteIsPosting')
				.to.eql(false);
		});

	});

	describe('The SUCCESS reducer', () => {

		afterEach(() => {
			store.dispatch(deleteHasSucceeded(false));
		});

		it('... initialState has an deleteHasSucceeded prop set to false', () => {
			expect(initialState).to.have.property('deleteHasSucceeded')
				.to.eql(false);
		});

	});

	describe('The ERROR reducer', () => {

		afterAll(() => {
			store.dispatch(deleteHasErrored(false));
		});

		it('... initialState has an deleteHasErrored prop set to false', () => {
			expect(initialState).to.have.property('deleteHasErrored')
				.to.eql(false);
		});

	});

});
