/* eslint-env node, mocha, jest */
import store from '../../store/store';
import { addTodo } from '../../actions/todoActions';
import { expect } from 'chai';
import deepFreeze from 'deep-freeze';

describe('The todos tasks', () => {

	describe ('the ADD_TODO action ', () => {
		const _mock ={
			completed:  false,
			date: Date.now(),
			details: 'Fake Line of details. Lots of text',
			owner: 'Kahl Drogo',
			rank: 'High',
			task: 'Make it so'
		};
			
		let _task, nextState;
		let prevState = (store.getState().todos);
		deepFreeze (prevState);

		beforeAll(() => {
			store.dispatch(addTodo(_mock));
			nextState = (store.getState().todos);
			let _size = nextState.length;
			_task = nextState[ _size - 1 ];
		});

		afterAll(() => {
			nextState.pop();
		});

		it('_ _ adds a todo to the array', () => {
			expect(_task).to.be.an('object');
			expect(nextState.length).to.be.above(prevState.length);
		});

		it('_ _ has a "completed" property', () => {
			expect(_task).to.have.property('completed')
				.to.eql(_mock.completed);
		});
		
		it('_ _ has a "date" property', () => {
			expect(_task).to.have.property('date')
				.to.eql(_mock.date);
		});
		
		it('_ _ has a "details" property', () => {
			expect(_task).to.have.property('details')
				.to.eql(_mock.details);
		});
		
		it('_ _ has a "owner" property', () => {
			expect(_task).to.have.property('owner')
				.to.eql(_mock.owner);
		});
		
		it('_ _ has a "rank" property', () => {
			expect(_task).to.have.property('rank')
				.to.eql(_mock.rank);
		});
		
		it('_ _ has a "task" property', () => {
			expect(_task).to.have.property('task')
				.to.eql(_mock.task);
		});
	});
}); 