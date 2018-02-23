/* eslint-env mocha, chai */
// Testing resource: https://medium.freecodecamp.org/the-right-way-to-test-react-components-548a4736ab22

// For debugging. Use (inside of an 'it' test, before 'expect'):
// console.log(mountedTodoTask.debug())

import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../store/store';

import TodoTask from '../../components/TodoTask';

// ========= 

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<TodoTask  /> 
		, div
	);
});

describe('The TodoTask Component', () => {
	let 
	 	mountedTodoTask, // the mounted object
	 	_state, // the state of the mounted object
		_tasks // the wrapper of the ounted object

	const todotaskComp = () => {
		if(!mountedTodoTask) {
			mountedTodoTask = mount (
				<TodoTask /> 
			);
		}
		return mountedTodoTask
	};

	beforeEach (() => {
		mountedTodoTask = undefined
		_state = todotaskComp().state();
		_tasks = todotaskComp().find('TodoTask');
	});

	describe('the wrapping Form component...', () => {

		const form = todotaskComp().find('Form');
		const formCtl = todotaskComp().find('FormControl');
		const wrappingRow = formCtl.first();

		it('always renders an outer FormControl', () => {
			expect(formCtl.length).to.be.eql(1);
		})

		it('always renders a TodoTask component ', () => {
			expect(_tasks.length).to.be.eql(1);
		})

	});

	describe(' When rendering, for Props...', () => {

		xit('Inspection', () => {
			// to inspect testing objects
 			console.log('*** the Component: ', mountedTodoTask.debug())
			console.log('*** the State: ', _state) 
			console.log('*** the Props: ', _tasks.props()) 
		})

		it('...TodoTask is passed (3) props', () => {
			expect(Object.keys(_tasks.props()).length).to.eql(3)
		})

		it('...has an item prop', () => {
			expect(Object.keys(_tasks.props())).to.include('item')
		})

		it('...has an style prop', () => {
			expect(Object.keys(_tasks.props())).to.include('style')
		})

		it('...has an updateTask prop', () => {
			expect(Object.keys(_tasks.props())).to.include('updateTask')
		})

	})

	describe('The component STATE', () => {

		it('...has (5) state items', () => {
			expect(Object.keys(_state).length).to.eql(5)
		})

		it('... starts with a false isEditing ', () => {
			expect(_state).to.have.property('isEditing')
				.to.eql(false)
		})

		it('...has isCompleted ', () => {
			expect(_state).to.have.property('isCompleted')
		})

		it('...has _id ', () => {
			expect(_state).to.have.property('_id')
		})

		it('...has _task ', () => {
			expect(_state).to.have.property('_task')
		})

		it('...has _style ', () => {
			expect(_state).to.have.property('_style')
		})

	})

})