/* eslint-env jest, mocha, chai */

// ======== esllint
/*global TodoReducer it:true*/
/*eslint no-undef: "error"*/

import deepFreeze from 'deep-freeze';
import { expect } from 'chai';

import { 
		todosIsLoading,
		todosHasErrored,
		todosFetchData,

} from '../../actions/apiActions';

describe('The apiActions Module...', () => {

	describe('... has a working "todosIsLoading" function', () => {

		let loading

		beforeAll(() => {
			loading = todosIsLoading(true)
		});

		it('... is an available function', () => {
			expect(loading).to.exist
		});

		it('... has a type of "TODOS_IS_LOADING" ', () => {
			expect(loading.type).to.exist
				.to.eql('TODOS_IS_LOADING')
		})

		it('... returns a boolean', () => {
			expect(loading.payload.status).to.be.a('boolean')
				.to.eql(true)
		});

	});

	describe ('... has a working "todosHasErrored" function', () => {

		let anErr

		beforeAll(() => {
			anErr = todosHasErrored(false)
		});

		it('... is an available function', () => {
			expect(anErr).to.exist
		});

		it('... has a type of "TODOS_HAS_ERRORED" ', () => {
			expect(anErr.type).to.exist
				.to.eql('TODOS_HAS_ERRORED')
		})

		it('... returns a function', () => {
			expect(anErr.payload.status).to.be.a('function')
				.to.eql(false)
		});

	})

	describe ('... has a working "todosFetchData" function', () => {

		let hasData

		beforeAll(() => {
			hasData = todosFetchData(false)
		});``

		it('... is an available function', () => {
			expect(hasData).to.exist
		});

		it('... has a type of "TODOS_FETCH_DATA" ', () => {
			expect(hasData.type).to.exist
				.to.eql('TODOS_FETCH_DATA')
		})

		it('... returns a boolean', () => {
			expect(hasData.payload.status).to.be.a('boolean')
				.to.eql(false)
		});

	})


})
