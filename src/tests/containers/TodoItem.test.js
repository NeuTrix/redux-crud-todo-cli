/* eslint-env mocha, chai */
// Testing resource: https://medium.freecodecamp.org/the-right-way-to-test-react-components-548a4736ab22

// For debugging. Use (inside of an 'it' test, before 'expect'):
// console.log(mountedTodoItem.debug())

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../../store/store';

import { expect } from 'chai';
import { mount } from 'enzyme';

import TodoItem from '../../components/TodoItem';

// ========= 

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<Provider store = { store } >
			<TodoItem />
		</Provider>
		, div
	);
});

describe('The TodoItem Component', () => {
	let props, mountedTodoItem

	const todoItem = () => {
		if(!mountedTodoItem) {
			mountedTodoItem = mount (
				<Provider store = { store } >
					<TodoItem {...props} />
				</Provider>
				);
		}
		return mountedTodoItem
	};

	beforeEach (() => {
		props = {
			todos: undefined,
			item: undefined
		}
		mountedTodoItem = undefined
	});

	describe('the wrapping Row component...', () => {
		const rows = todoItem().find('Row');
		const wrappingRow = rows.first();

		it('always renders an outer Row', () => {
			expect(rows.length).to.be.eql(1);
		})

		it('renders an outer Row that wraps all components', () => {
			expect (wrappingRow.children()).to.eql(todoItem().children())
		})

		it('always renders (5) Cols', () => {
			const cols = todoItem().find('Col');
			expect(cols.length).to.be.eql(5  );
		})
	});

	describe('when rendering core components, it..', () => {
		it('always renders a CheckComplete component', () => {
			const checkboxes = todoItem().find('CheckComplete');
			expect(checkboxes.length).to.be.eql(1);
		})
		
		it('CheckComplete is passed (3) props', () => {
			const checkboxes = todoItem().find('CheckComplete');
			expect(Object.keys(checkboxes.props()).length).to.eql(3)
		})

		it('always renders a FormControl for "task" ', () => {
			const tasks = todoItem().find('FormControl.task');
			expect(tasks.length).to.be.eql(1);
		})

		it('always renders a Rank component for rank ', () => {
			const ranks = todoItem().find('Rank');
			expect(ranks.length).to.be.eql(1);
		})

		it('always renders a CalendarBtn component ', () => {
			const dates = todoItem().find('CalendarBtn');
			expect(dates.length).to.be.eql(1);
		})

		it('CalendarBtn is passed (4) props', () => {
			const checkboxes = todoItem().find('CalendarBtn');
			expect(Object.keys(checkboxes.props()).length).to.eql(4)

		})

		it('always renders a DeleteBtn component ', () => {
			const deleteBtn = todoItem().find('DeleteBtn');
			expect(deleteBtn.length).to.be.eql(1);
		})
	})

	describe('The component STATE', () => {

		it('starts out with the default props', () => {

		})

	})

})