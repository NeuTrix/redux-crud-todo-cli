/* eslint-env jest, mocha, chai */
/*eslint no-undef: "error"*/
import deepFreeze from 'deep-freeze';
import { expect } from 'chai';
import store from '../../store/store';
import * as actions from '../../actions/editActions';

describe('The editReducer action suite', () => {
	let initialState;
	beforeAll(() => {
		initialState = store.getState().editApi;
		deepFreeze(initialState);
	});

	describe('The POSTING reducer', () => {
		afterAll(() => {
			store.dispatch(actions.editIsPosting(false));
		});

		it('... has an isLoading prop set to false', () => {
			expect(initialState).to.have.property('editIsPosting')
				.to.eql(false);
		});
	});

	describe('The SUCCESS reducer', () => {
		afterEach(() => {
			store.dispatch(actions.editHasSucceeded(false));
		});

		it('... the initialState has an editHasSucceeded prop set to false', () => {
			expect(initialState).to.have.property('editHasSucceeded')
				.to.eql(false);
		});
	});

	describe('The ERROR reducer', () => {
		afterAll(() => {
			store.dispatch(actions.editHasErrored(false));
		});

		it('... initialState has a false editHasErrored prop', () => {
			expect(initialState).to.have.property('editHasErrored')
				.to.eql(false);
		});
	});
});
