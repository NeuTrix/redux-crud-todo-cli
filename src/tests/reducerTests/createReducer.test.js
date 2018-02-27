/* eslint-env jest, mocha, chai */

// ======== esllint
/*eslint no-undef: "error"*/

import axios from 'axios';

import deepFreeze from 'deep-freeze';
import { expect } from 'chai';
import store from '../../store/store';

import { 
	createIsPosting,
	createHasSucceeded,
	createHasErrored,
	createTodo
} from '../../actions/createActions';

import { startState } from '../../actions/Read-Actions'
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

		it('... has an isLoading prop set to false', () => {
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

	xdescribe('...the createTodo function', () => {

			let testItem = {
				owner: "tester",
				task: "Test the createTodo function"
			}

				let api ='https://redux-todo-api.herokuapp.com/api/todos'

			let todosBefore = store.getState().todos

			beforeAll(() => {
			startState(api)
				// console.log('***** Before *****', todosBefore)
				let afterTodo = store.getState().todos
				// console.log('***** After *****', afterTodo)
			});

			afterAll(() => {

			});

		it('... makes a successful call to the server', (done) => {
			
			axios.get(api)
				.then((res) => {
					expect(res.data.length).to.eql(1)
					done()
				});

			store.dispatch(createTodo(api,testItem))

		})

		xit('... adds a new item to the api', () => {

		})


		xit('... updates the api state accordingly', () => {

		})
	})

});
