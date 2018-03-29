/* eslint-env jest, mocha, chai */
/*eslint no-undef: "error"*/
import deepFreeze from 'deep-freeze';
import { expect } from 'chai';
import store from '../../store/store';
import shortid from 'shortid';
import * as mod from '../../actions/todoActions';
import TodoReducer from '../../reducers/todoReducer'

describe ('The TODOS_INITIAL_STATE reducer', () => {

		let	firstState = store.getState().todos;
		deepFreeze (firstState);

	describe ('The Edit action', () => {

	});	

	describe ('The iniital state', () => {
		it ('... has a default state array ', () => {
			expect (firstState).to.be.an ('array');
		});

		// ui starts empty
		it ('... starts with not todo items', () => {
			expect (firstState.length).to.eql(0);
		});
	});

	describe ('the todosSetInitialState action creator', () => {
		it ('... has a type of "TODOS_INITIAL_STATE"', () => {
			expect (mod.todosSetInitialState ()).to.have.property('type').to.eql ('TODOS_INITIAL_STATE');
		});

		it ('... it has a payload prop of "newState" ', () => {
			expect (mod.todosSetInitialState ()).to.have.property('payload');
			expect (mod.todosSetInitialState ().payload).to.have.property('newState');
		});
	});

	describe ('The Set intial state REDUCER', () => {
		let	initialState = [{
			_id: shortid.generate(), 
			date: 	'2020-12-31', 
			completed: false, 
			task:'New state item', 
			rank: 'High' 
		}];  

		let newState;

		beforeAll(() => {
			store.dispatch (mod.todosSetInitialState (initialState));
			newState = store.getState ().todos;
		});

		it ('... can return a new state array', () => {
			expect (newState).to.be.an ('array');
		});

		it ('... has replaced the old state', () => {
			expect (newState.length).to.eql (1);
			expect (newState[0].task).to.eql ('New state item');
		});
	});
});

describe ('The TodoReducer CRUD suite', () => {
	let 
		initialTodoList,
		addedTodoToList,
		toggledTodoToList,
		initialLength,
		modLength, 
		newItem,
		_task,
		_id;
	let matchItem = (item) => {
		return item._id === _id;
	};

	beforeAll(() => {
		initialTodoList = store.getState ().todos;
		deepFreeze(initialTodoList);
		initialLength = initialTodoList.length;
	});

	afterAll(() => {
		initialTodoList = [];
	});
	
	describe ('The ADD_TODO function', () => { 
		beforeAll(() => {

			newItem = { 
				_id: 'createdID',
				date: '2017-12-31',
				completed: true,
				details: 'TodoReducer test suite',
				owner: 'Todo Tester',
				rank: 'High',
				task: '**** ADDED a new TODO ****',
			};

			store.dispatch (mod.addTodo(newItem));
			addedTodoToList = store.getState ().todos;
			modLength = addedTodoToList.length;
			_task = addedTodoToList[modLength -1];
			_id = _task._id;
			// console.log(_task)
		});

		it ('... the new "addedTodoToList" is an array', () => {
			expect (addedTodoToList).to.be.an ('array');
		});

		it ('...can ADD one more _task to the initialTodoList', () => {
			expect (initialLength).to.above(0);
			expect (modLength).to.eql (initialLength + 1);
		});

		it ('... has an _id property', () => {
			expect (_task).to.have.property('_id');
		});

		it ('... has the expected date property', () => {
			expect (_task).to.have.property('date').eql (newItem.date);
		});

		it ('... has the expected completed property', () => {
			expect (_task).to.have.property('completed').eql (newItem.completed);
		});

		it ('... has the expected details property', () => {
			expect (_task).to.have.property('details').eql (newItem.details);
		});

		it ('... has the expected owner property', () => {
			expect (_task).to.have.property('owner').eql (newItem.owner);
		});

		it ('... has the expected rank property', () => {
			expect (_task).to.have.property('rank').eql (newItem.rank);
		});

		it ('... has the expected task property', () => {
			expect (_task).to.have.property('task').eql (newItem.task);
		});
	});
	
	describe ('The REMOVE_TODO function', () => {
		let removedTodoFromList, postLength;

		beforeAll (() => {
			store.dispatch (mod.removeTodo (_id));
			removedTodoFromList = store.getState ().todos;
			postLength = removedTodoFromList.length; 
		});

		it ('... starts with an inital list of at least 2 items', () => {
			expect (modLength).to.be.above (1);
		});

		it ('...the previous array contained the "_task" ', () => {
			let presence = addedTodoToList.some (matchItem);
			expect (presence).to.eql (true);
		});

		it ('...it removed the task from the list', () => {
			let presence = removedTodoFromList.some (matchItem);
			expect (presence).to.eql (false);
		});

		it ('... the updatedTodoList is now smaller', () => {
			expect (postLength).to.eql (modLength - 1);
		});
	});
});
