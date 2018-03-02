/* eslint-env mocha, chai */
import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../store/store';
import TodoTask from '../../components/TodoTask';

it ('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<TodoTask  />, div
	);
});

describe ('The TodoTask Component', () => {
	let props; // default props to clear objects before each test
	let mountedTodoTask; // the mounted object

	const todotaskComp = () => {
		if (!mountedTodoTask) {
			mountedTodoTask = mount (<TodoTask {...props}/>);
		}
		return mountedTodoTask;
	};

	let _state = todotaskComp().state(); // mounted component state 
	let _tasks = todotaskComp().find('TodoTask'); // component wrapper

	beforeEach (() => {
		props = {
			item: { 
				_id: 'default',
				completed: false,
				details: 'default',
				date: '2018-12-31',
				owner: 'default',
				rank: 'default',
				task: 'default'
			},
			style: { },
			updateTask: f => f
		};
		mountedTodoTask = undefined;
	});

	afterEach (() => {
		_state.isCompleted = false,
		_state.isEditing = false;
	});

	xit ('Inspection beforeEach', () => {
		// to inspect testing objects
		// console.log('*** the Component: ', mountedTodoTask.debug())
		console.log('********** state beforeEach',  _state);
		console.log('********** props beforeEach',  _tasks.props());
	});

	xit ('Inspection afterEach', () => {
		console.log('********** state afterEach',  _state);
		console.log('********** props afterEach',  _tasks.props());
	});

	describe ('the wrapping Form component...', () => {
		const form = todotaskComp().find('Form');
		const formCtl = todotaskComp().find('FormControl');
		const wrappingRow = formCtl.first();

		it ('always renders an outer FormControl', () => {
			expect (formCtl.length).to.be.eql(1);
		});

		it ('always renders a TodoTask component ', () => {
			expect (_tasks.length).to.be.eql(1);
		});

	});

	describe (' When rendering, for Props...', () => {
		xit ('Inspection for Rendering', () => {
			// to inspect testing objects
			// console.log('*** the Component: ', mountedTodoTask.debug())
			console.log('*** Render the State: ', _state); 
			console.log('*** Render the Props: ', _tasks.props()); 
		});

		it ('...TodoTask is passed (4) props', () => {
			expect (Object.keys(_tasks.props()).length).to.eql(4);
		});

		it ('...has an item prop', () => {
			expect (Object.keys(_tasks.props())).to.include('item');
		});

		it ('...has an style prop', () => {
			expect (Object.keys(_tasks.props())).to.include('style');
		});

		it ('...has an editTodo prop', () => {
			expect (Object.keys(_tasks.props())).to.include('editTodo');
		});
	});

	describe ('The component STATE', () => {
		it ('...has (3) state items', () => {
			expect (Object.keys(_state).length).to.eql(3);
		});

		it ('...has style ', () => {
			expect (_state).to.have.property('style');
		});

		it ('... starts with a false isEditing ', () => {
			expect (_state).to.have.property('isEditing')
				.to.eql(false);
		});

		it ('...has isCompleted ', () => {
			expect (_state).to.have.property('isCompleted');
		});
		
	});

	xdescribe ('..when editing', () => {
		beforeEach(() => {
			_state.isCompleted = true ,
			_state.isEditing = true; 
		});

		xit ('Inspection: Editing', () => {
			// to inspect testing objects
			console.log('*** Edit State: ', _state); 
			console.log('*** Edit Props: ', _tasks.props()); 
			console.log('*** Edit Props: ', _tasks); 
		});
	});
});