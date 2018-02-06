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
		todosFetchData,
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

		it('... has a type of "TODOS_IS_LOADING" ', () => {
			expect(loading.type).to.exist
				.to.eql('TODOS_IS_LOADING')
		})

		it('... returns a boolean', () => {
			expect(loading.payload.status).to.be.a('boolean')
				.to.eql(false)
		});
	});

	describe ('... has a working ERROR action', () => {

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
			expect(anErr.payload.status).to.be.a('boolean')
				.to.eql(false)
		});
	})

	xdescribe ('... has a working SUCCESS action', () => {
		
		/*let aSuccess

		beforeAll(() => {
			aSuccess = todosHasFetched(false)
		});

		it('... is an available function', () => {
			expect(aSuccess).to.exist
		});

		it('... has a type of "TODOS_HAS_ERRORED" ', () => {
			expect(aSuccess.type).to.exist
				.to.eql('TODOS_HAS_ERRORED')
		})

		it('... returns a function', () => {
			expect(aSuccess.payload.status).to.be.a('boolean')
				.to.eql(false)
		});*/
	})

	xdescribe('... has a working FETCH function', () => {
		let hasData
		let url = 'http://localhost:3003/api/todos'

		beforeAll(() => {
			hasData = todosFetchData(url)
		});

		it('... has the proper url: "http://localhost:3003/api/todos" ', () => {
			expect(url).to.eql('http://localhost:3003/api/todos')
		})

		it('... is an available action', () => {
			expect(hasData).to.exist
			expect(hasData.payload.fetchData).to.be.a('function')
		});

		it('... has a type of "TODOS_FETCH_DATA"', () => {
			expect(hasData.type).to.exist
				.to.eql('TODOS_FETCH_DATA')
		})

		xit('... returns a function in payload', () => {
		});

		xit('... returns a dataset', () => {
			expect(hasData.payload.fetchData(store.dispatch)).to.be.an('string');
		})
	})
})
