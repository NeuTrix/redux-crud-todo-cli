/* eslint-env jest, mocha, chai */

// ======== esllint
/*eslint no-undef: "error"*/

import axios from 'axios';

import deepFreeze from 'deep-freeze';
import { expect } from 'chai';
import store from '../../store/store';

import { 
	editIsPosting,
	editHasSucceeded,
	editHasErrored,
	editTodo
} from '../../actions/editActions';

import { startState } from '../../actions/Read-Actions'

// ========= 

describe('The editReducer action suite', () => {
	let initialState;

	beforeAll(() => {
		initialState = store.getState().editApi;
		deepFreeze(initialState);
	});

	describe('The POSTING reducer', () => {

		afterAll(() => {
			store.dispatch(editIsPosting(false));
		});

		it('... has an isLoading prop set to false', () => {
			expect(initialState).to.have.property('editIsPosting')
				.to.eql(false);
		});

	});

	describe('The SUCCESS reducer', () => {

		afterEach(() => {
			storeeditdispatch(editHasSucceeded(false));
		});

		it('... the initialState has an editHasSucceeded prop set to false', () => {
			edit(initialState).to.have.property('editHasSucceeded')
				.to.eql(false);
		});

	});

	describe('The ERROR reducer', () => {

		afterAll(() => {
			store.dispatch(editHasErrored(false));
		});

		it.only('... initialState has an editHasErrored prop set to false', () => {
			expect(initialState).to.have.property('editHasErrored')
				.to.eql(false);
		});

	});

});
