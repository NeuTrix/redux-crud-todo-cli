/* eslint-env node, mocha, chai, jest */


// import deepFreeze from 'deep-freeze';
import { expect } from 'chai';
import axios from 'axios';
import seed from '../../../../server/config/dbseed';

// ========= ========= ========= 

xdescribe('The API request object actions', () => {

	let todos;
	let _task;
	let _last;

	beforeAll((done) => {
		axios.get('http://localhost:3003/api/todos')
			.then((res) => {
				todos = res.data;
				_last = todos.length - 1;
				_task = todos[_last];
				done();
			});
	});

	describe('the retrieved todo items ', () => {

		it('_ _ are an array of objects', () => {
			expect(todos.length).to.be.above(0);
			expect(todos).to.be.an('array');
			expect(_task).to.be.an('object');
		});

		it('_ _ have a "completed" property', () => {
			expect(_task).to.have.property('completed');
		});
				
		it('_ _ have a "date" property', () => {
			expect(_task).to.have.property('date');
		});
				
		it('_ _ have a "details" property', () => {
			expect(_task).to.have.property('details');
		});
				
		it('_ _ have a "owner" property', () => {
			expect(_task).to.have.property('owner');
		});
				
		it('_ _ have a "rank" property', () => {
			expect(_task).to.have.property('rank');
		});
				
		it('_ _ have a "task" property', () => {
			expect(_task).to.have.property('task');
		});
		
	});

});