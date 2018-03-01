/* eslint-env node, mocha, chai, jest */
import { expect } from 'chai';
import axios from 'axios';

describe('The API request object actions', () => {
	let todos; // array
	let _task; // initial test item
	let _last; // last test item

	beforeAll((done) => {
		axios.get('https://redux-todo-api.herokuapp.com/api/todos')
			.then((res) => {
				todos = res.data;
				_last = todos.length - 1;
				_task = todos[0];
				done();
			});
	});

	describe('the retrieved todo items ', () => {
		it('... are an array of objects', () => {
			expect(todos.length).to.be.above(0);
			expect(todos).to.be.an('array');
			expect(_task).to.be.an('object');
		});

		it('... have a "completed" property', () => {
			expect(_task).to.have.property('completed');
		});
				
		it('... have a "date" property', () => {
			expect(_task).to.have.property('date');
		});
				
		it('... have a "details" property', () => {
			expect(_task).to.have.property('details');
		});
				
		it('... have a "owner" property', () => {
			expect(_task).to.have.property('owner');
		});
				
		it('... have a "rank" property', () => {
			expect(_task).to.have.property('rank');
		});
				
		it('... have a "task" property', () => {
			expect(_task).to.have.property('task');
		});
	});
});