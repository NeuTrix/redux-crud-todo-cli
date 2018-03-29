/* eslint-env jest, mocha, chai */
/*eslint no-undef: "error"*/
import deepFreeze from 'deep-freeze';
import { expect } from 'chai';
import store from '../../store/store';
import * as actions from '../../actions/deleteActions';

describe ('The deleteApiReducer action suite', () => {
	let initialState;
	beforeAll (() => {
		initialState = store.getState().deleteApi;
		deepFreeze (initialState);
	});

	describe ('The POSTING reducer', () => {
		afterAll(() => {
			store.dispatch (actions.deleteIsPosting  (false));
		});

		it ('... has an isLoading prop set to false', () => {
			expect(initialState).to.have.property('deleteIsPosting')
				.to.eql (false);
		});
	});

	describe ('The SUCCESS reducer', () => {
		afterEach(() => {
			store.dispatch(actions.deleteHasSucceeded (false));
		});

		it ('... initialState has an deleteHasSucceeded prop set to false', () => {
			expect(initialState).to.have.property('deleteHasSucceeded')
				.to.eql (false);
		});
	});

	describe ('The ERROR reducer', () => {
		afterAll (() => {
			store.dispatch(actions.deleteHasErrored (false));
		});

		it ('... initialState has a false deleteHasErrored prop', () => {
			expect(initialState).to.have.property('deleteHasErrored')
				.to.eql (false);
		});
	});
});
