/* eslint-env jest, mocha, chai */

// should split this into a reducer test suite
// import React from 'react';

// ======== esllint
/*global TodoReducer it:true*/
/*eslint no-undef: "error"*/

import deepFreeze from 'deep-freeze';
import { expect } from 'chai';
import store from '../../store/store';
import todos from '../../reducers/todoReducer';
import shortid from 'shortid';

import { 
	addTodo, 
	updateTodo,
	removeTodo, 
	toggleTodo,
	updateRank, 
	updateDate,
	setInitialState,
} from '../../actions/todoActions';

// ====================================

describe.only('The setInitial state reducer', () => {

	describe('The iniital state', () => {
		let	firstState = store.getState().todos;
		deepFreeze(firstState)

		it('... has a default state array ', () => {
			expect(firstState).to.be.an('array');
		})
		it('... has 3 initial items', () => {
			expect(firstState.length).to.eql(3);
		})
	})

	describe('the setInitialState action creator', () => {

		it('... has a type of "SET_INITIAL_STATE"', () => {
			expect(setInitialState()).to.have.property('type')
				.to.eql('SET_INITIAL_STATE')
		})

		it('... it has a payload prop of "newState" ', () => {
			expect(setInitialState()).to.have.property('payload')
			expect(setInitialState().payload).to.have.property('newState')
		})

	})

	describe('The Set intial state REDUCER', () => {

		let	initialState = [{
				 _id: shortid.generate(), 
				 date: 	'2020-12-31', 
				 completed: false, 
				 task:'New state item', 
				 rank: 'High' 
			}];  

		let newState

		beforeAll(() => {
			store.dispatch(setInitialState(initialState))
			newState = store.getState().todos
		});

		it('... can return a new state array', () => {
			expect(newState).to.be.an('array');
		})

		it('... has replaced the old state', () => {
			expect(newState.length).to.eql(1);
			expect(newState[0].task).to.eql('New state item')
		})
			
	})


})



describe('The TodoReducer action suite', () => {
	let TodoList = store.getState().todos;
	deepFreeze(TodoList);

	let newItem = { 
		_id: 'TestID990077',
		date: '2017-12-31',
		completed: true,
		details: 'Something to try',
		owner: 'Wilbur',
		rank: 'High',
		task: 'Test this component' 
	};

	let _task;


	describe('The ADD_TODO function', () => { 

		beforeEach(() => {
			store.dispatch(addTodo(newItem));
			TodoList = store.getState().todos;
			_task = TodoList[TodoList.length - 1];
		});

		afterEach(() => {
			TodoList.length > 3 ? TodoList.pop() : TodoList;
		});

		it('...can ADD another _task to that list', () => {
			expect(TodoList).to.be.an('array');
			expect(TodoList.length).to.be.above(0);
		});

		// ========= 

		it('... has the expected _id property', () => {
			expect(_task).to.have.property('_id').eql(newItem._id);
		});

		it('... has the expected date property', () => {
			expect(_task).to.have.property('date').eql(newItem.date);
		});

		it('... has the expected completed property', () => {
			expect(_task).to.have.property('completed').eql(newItem.completed);
		});

		it('... has the expected details property', () => {
			expect(_task).to.have.property('details').eql(newItem.details);
		});

		it('... has the expected owner property', () => {
			expect(_task).to.have.property('owner').eql(newItem.owner);
		});

		it('... has the expected rank property', () => {
			expect(_task).to.have.property('rank').eql(newItem.rank);
		});

		it('... has the expected task property', () => {
			expect(_task).to.have.property('task').eql(newItem.task);
		});
	});

	describe('The REMOVE_TODO function', () => {

		let initialSize;

		beforeAll(() => {
			store.dispatch(addTodo(newItem));
			TodoList = store.getState().todos;
			initialSize = TodoList.length;
			_task = TodoList[TodoList.length - 1];
		});

		afterAll(() => {
			TodoList.length > 3 ? TodoList.pop() : TodoList;
		});

		it('... starts with an inital list of at least 1 item', () => {
			expect(initialSize).to.eql(4);
			console.log('***********', _task);
		});

		it('... the last item in the list has an id', () => {
			expect(_task).to.have.property('_id').eql(_task._id);
		});

		it('... it can remove the last item', () => {
			store.dispatch(removeTodo(_task._id));
			let postSize = store.getState().todos.length; 
			expect(postSize).to.eql(initialSize-1);
		});

	});

	xdescribe('The TOGGLE_TODO function', () => {

		it('changes the todo complete status', () => {
			let listB4 = store.getState().todos;
			expect(listB4).to.be.an('array');
			// ensure immutability
			deepFreeze(listB4);

			let _id = listB4[0].id;
			expect(_id).to.be.a('string');
			expect(_id).to.be.equal('0.1HxYz');

			store.dispatch(toggleTodo(_id));

			let listAFT = store.getState().todos;
			expect(listAFT[0].id).to.equal('0.1HxYz');
			let complete = listAFT[0].complete;
			// console.log('*****this is the status:  ', complete, listB4[0].id);

			expect(complete).to.equal(true);
		});
	});

	xdescribe('The UPDATE_TODO function', () => {
		it('changes the todo content', () => {
			let listB5 = store.getState().todos;
			expect(listB5).to.be.an('array');
			// ensure immutability
			deepFreeze(listB5);

			let _id = listB5[0].id;
			expect(_id).to.be.a('string');
			expect(_id).to.be.equal('0.1HxYz');

			store.dispatch(updateTodo(_id,'Task Updated. Whatever!'));

			let listAFT2 = store.getState().todos;
			expect(listAFT2[0].task).to.equal('Task Updated. Whatever!');
		});
	});

	xdescribe('The UPDATE_RANK function', () => {
		it('changes the rank content', () => {
			let listB5 = store.getState().todos;
			expect(listB5).to.be.an('array');
			// ensure immutability
			deepFreeze(listB5);

			let _id = listB5[0].id;
			expect(_id).to.be.a('string');
			expect(_id).to.be.equal('0.1HxYz');

			store.dispatch(updateRank(_id,'Highest'));

			let listAFT2 = store.getState().todos;
			expect(listAFT2[0].rank).to.equal('Highest');

		});
	});

	xdescribe('The UPDATE_DATE function', () => {
		it('changes the DATE content', () => {
			let listB5 = store.getState().todos;
			expect(listB5).to.be.an('array');
			// ensure immutability
			deepFreeze(listB5);

			let _id = listB5[0].id;
			expect(_id).to.be.a('string');
			expect(_id).to.be.equal('0.1HxYz');

			store.dispatch(updateDate(_id,'Jan 25th'));

			let listAFT2 = store.getState().todos;
			expect(listAFT2[0].date).to.equal('Jan 25th');

		});
	});
});
