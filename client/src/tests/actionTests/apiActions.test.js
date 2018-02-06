/* eslint-env jest, mocha, chai */

// ======== esllint
/*global TodoReducer it:true*/
/*eslint no-undef: "error"*/

import deepFreeze from 'deep-freeze';
import { expect } from 'chai';
import store from '../../store/store';

// import action creators
import { 
		todosIsLoading,
		todosHasErrored,
		todosHasFetched,
} from '../../actions/apiActions';

describe('The apiActions Module...', () => {

	describe('... has a working LOADING action', () => {

		let loading

		beforeAll(() => {
			loading = todosIsLoading(false)
		});

		it('... is an available function', () => {
			expect(loading).to.exist
		});

		it('... has a "type" property', () => {
			expect(loading).to.have.property('type');
		})

		it('... has a type of "TODOS_IS_LOADING" ', () => {
			expect(loading.type).to.exist
				.to.eql('TODOS_IS_LOADING')
		})

		it('... type is a string', () => {
			expect(loading.type).to.be.a('string')
		})
		
		it('... has a "payload" property', () => {
					expect(loading).to.have.property('payload');
				})

		it('... payload has a "status" property', () => {
					expect(loading.payload).to.have.property('status');
				})

		it('... payload.status has a boolean value', () => {
					expect(loading.payload).to.have.property('status');
				})
	});

	describe ('... has a working ERROR action', () => {

		let anErr

		beforeAll(() => {
			anErr = todosHasErrored(false)
		});

		it('... is an available function', () => {
			expect(anErr).to.exist
		});

		it('... has a "type" property', () => {
			expect(anErr).to.have.property('type');
		})

		it('... has a type of "TODOS_HAS_ERRORED" ', () => {
			expect(anErr.type).to.exist
				.to.eql('TODOS_HAS_ERRORED')
		})

		it('... has a "payload" property', () => {
			expect(anErr).to.have.property('payload');
		})

		it('... payload has a "status" property', () => {
			expect(anErr.payload).to.have.property('status');
		})

		it('... payload.status has a boolean value', () => {
			expect(anErr.payload).to.have.property('status');
		})

	});

	describe ('... has a working SUCCESS action', () => {
		
		let aSuccess

		beforeAll(() => {
			aSuccess = todosHasFetched(false)
		});

		it('... is an available function', () => {
			expect(aSuccess).to.exist
		});

		it('... has a type of "TODOS_HAS_FETCHED" ', () => {
			expect(aSuccess.type).to.exist
				.to.eql('TODOS_HAS_FETCHED')
		})

		it('... returns a boolean', () => {
			expect(aSuccess.payload.status).to.be.a('boolean')
				.to.eql(false)
		});
	})

	describe.only('... has a working FETCH function', () => {
		let hasData
		let url = 'http://localhost:3003/api/todos'

		beforeAll(() => {
			hasData = todosHasFetched()
		});

		it('... is an available function', () => {
			expect(hasData).to.exist
		});

		it('... has a "type" property', () => {
			expect(hasData).to.have.property('type');
		})

		it('... has a type of "TODOS_HAS_FETCHED" ', () => {
			expect(hasData.type).to.exist
				.to.eql('TODOS_HAS_FETCHED')
		})

		it('... has a "payload" property', () => {
			expect(hasData).to.have.property('payload');
		})

		it('... payload has a "status" property', () => {
			expect(hasData.payload).to.have.property('status');
		})

		it('... payload.status has a boolean value', () => {
			expect(hasData.payload).to.have.property('status');
		})
	})
})
