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
	let props, mountedTodoTask

	const todotaskComp = () => {
		if(!mountedTodoTask) {
			mountedTodoTask = mount (
				<TodoTask { ...props } /> 
			);
		}
		return mountedTodoTask
	};

	beforeEach (() => {
		props = {
			_id: undefined,
			task: " ",
			style: {},
			updateTask: undefined
		}
		mountedTodoTask = undefined
	});

	describe('the wrapping Form component...', () => {

		const form = todotaskComp().find('Form');
		const formCtl = todotaskComp().find('FormControl');
		const wrappingRow = formCtl.first();

		it('always renders an outer FormControl', () => {
			expect(formCtl.length).to.be.eql(1);
		})

		it('always renders a TodoTask component ', () => {
			const dates = todotaskComp().find('TodoTask');
			expect(dates.length).to.be.eql(1);
		})

	});

	describe('when rendering core components, it..', () => {

		const tasks = todotaskComp().find('TodoTask');

		it('TodoTask is passed (4) props', () => {
			expect(Object.keys(tasks.props()).length).to.eql(4)
		})

		it('has an _id prop', () => {
			expect(Object.keys(tasks.props())).to.include('_id')
		})

		it('has an task prop', () => {
			expect(Object.keys(tasks.props())).to.include('task')
		})

		it('has an style prop', () => {
			expect(Object.keys(tasks.props())).to.include('style')
		})

		it('has an updateTask prop', () => {
			expect(Object.keys(tasks.props())).to.include('updateTask')
		})

	})

	xdescribe('The component STATE', () => {

		it('starts out with the default props', () => {

		})

	})

})