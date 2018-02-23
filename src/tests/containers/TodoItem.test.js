/* eslint-env mocha, chai */
// Testing resource: https://medium.freecodecamp.org/the-right-way-to-test-react-components-548a4736ab22

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

	describe('when rendering its components', () => {

		it('always renders a single Row', () => {
			const rows = todoItem().find('Row');
			expect(rows.length).to.be.eql(1);
		})

		it('always renders (5) Cols', () => {
			const cols = todoItem().find('Col');
			expect(cols.length).to.be.eql(5  );
		})

		it('always renders a Checkbox component', () => {
			const checkboxes = todoItem().find('Checkbox');
			expect(checkboxes.length).to.be.eql(1);
		})

		it('always renders (2) Forms ', () => {
			const forms = todoItem().find('Form');
			expect(forms.length).to.be.eql(2);
		})

		it('always renders a FormControl for "task" ', () => {
			const tasks = todoItem().find('FormControl.task');
			expect(tasks.length).to.be.eql(1);
		})

		it('always renders a FormControl for "date" ', () => {
			const dates = todoItem().find('FormControl.date');
			console.log(mountedTodoItem.debug())
			expect(dates.length).to.be.eql(1);
		})

		it('always renders a Rank component for rank ', () => {
			const ranks = todoItem().find('Rank');
			expect(ranks.length).to.be.eql(2);
		})

	})



})