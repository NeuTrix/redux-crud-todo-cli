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
	todosSetInitialState,
} from '../../actions/todoActions';

// ====================================

xdescribe('The TODOS_SET_INITIAL_STATE reducer', () => {

	xdescribe('The iniital state', () => {
		let	firstState = store.getState().todos;
		deepFreeze(firstState);

		it('... has a default state array ', () => {
			expect(firstState).to.be.an('array');
		});
		it('... has at least 1 initial item', () => {
			expect(firstState.length).to.be.above(0);
		});
	});

	xdescribe('the todosSetInitialState action creator', () => {

		xit('... has a type of "TODOS_SET_INITIAL_STATE"', () => {
			expect(todosSetInitialState()).to.have.property('type')
				.to.eql('TODOS_SET_INITIAL_STATE');
		});

		xit('... it has a payload prop of "newState" ', () => {
			expect(todosSetInitialState()).to.have.property('payload');
			expect(todosSetInitialState().payload).to.have.property('newState');
		});

	});

	xdescribe('The Set intial state REDUCER', () => {

		let	initialState = [{
			_id: shortid.generate(), 
			date: 	'2020-12-31', 
			completed: false, 
			task:'New state item', 
			rank: 'High' 
		}];  

		let newState;

		xbeforeAll(() => {
			store.dispatch(todosSetInitialState(initialState));
			newState = store.getState().todos;
		});

		it('... can return a new state array', () => {
			expect(newState).to.be.an('array');
		});

		it('... has replaced the old state', () => {
			expect(newState.length).to.eql(1);
			expect(newState[0].task).to.eql('New state item');
		});
			
	});
});

describe('The TodoReducer CRUD suite', () => {

	let 
		_id,
		initialTodoList,
		initialLength,
		addedTodoToList,
		modLength, 
		newItem,
		_task

	let matchItem = (item) => {
		return item._id === _id
	};

	beforeAll(() => {
		initialTodoList = store.getState().todos;
		deepFreeze(initialTodoList);
		initialLength = initialTodoList.length
	});

	afterAll(() => {
		initialTodoList = []
	});

	// subsequent CRUD test will depend on ADD_TODO's initial item

	describe('The ADD_TODO function', () => { 

		beforeAll(() => {

			newItem = { 
				date: '2017-12-31',
				completed: true,
				details: '**** ADDED a new TODO ****',
				owner: 'Todo Tester',
				rank: 'High',
				task: 'Testing this component' 
			};

			store.dispatch(addTodo(newItem));
			addedTodoToList = store.getState().todos;
			modLength = addedTodoToList.length;
			_task = addedTodoToList[modLength -1];
			_id = _task._id

		});

		it('... the new "addedTodoToList" is an array', () => {
			expect(addedTodoToList).to.be.an('array');
		})

		it('...can ADD one more _task to the initialTodoList', () => {
			expect(initialLength).to.above(0);
			expect(modLength).to.eql(initialLength + 1)
		})

		it('... has the expected _id property', () => {
			expect(_task).to.have.property('_id');
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
	
	xdescribe('The TOGGLE_TODO function', () => {
		let listBefore, listAfter, _task, _id

		beforeAll(() => {
			listBefore = store.getState().todos;
			// ensure immutability
			deepFreeze(listBefore);

			_task = listBefore[0]
			_id = _task._id;

		});

		it('... listBefore is an array with at least 1 element', () => {
			expect(listBefore).to.be.an('array')
			expect(listBefore.length).to.be.above(0);
		})

		it('... the targeted task has an id prop', () => {
			expect(_task).to.have.property('_id')
				.to.be.a('string')
		})

		it('... it starts with a "false" completed task prop ', () => {
			expect(_task).to.have.property("completed")
				.to.eql(false)
		})

		it('changes the task completed status to true', () => {

			store.dispatch(toggleTodo(_id));

			let listAfter = store.getState().todos;
			let matchId = (task) => { return task._id === _id; };
			let targetIndex = listAfter.findIndex(matchId);
			let updatedTask= listAfter[targetIndex];

			expect(updatedTask).to.be.an('object')
			expect(updatedTask.completed).to.eql(true)

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

	describe('The REMOVE_TODO function', () => {

		let 
			removedTodoFromList, 
			postLength

		beforeAll(() => {
			store.dispatch(removeTodo(_id));
			removedTodoFromList = store.getState().todos
			postLength = removedTodoFromList.length; 
		});

		it('... starts with an inital list of at least 2 items', () => {
			expect(modLength).to.be.above(1);
		});

		it('...the previous array contained the "_task" ', () => {
			let presence = addedTodoToList.some(matchItem)
			expect(presence).to.eql(true)
		})

		it('...it removed the task from the list', () => {
			let presence = removedTodoFromList.some(matchItem)
			expect(presence).to.eql(false)
		});

		it('... the updatedTodoList is now smaller', () => {
			expect(postLength).to.eql(modLength - 1);
		})
	});

});
