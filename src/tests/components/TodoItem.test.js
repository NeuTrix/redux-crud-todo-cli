/* eslint-env mocha, chai */
// For debugging. Use (inside of an 'it' test, before 'expect'):
// console.log(mountedTodoItem.debug())

// vendor
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../../store/store';
import { expect } from 'chai';
import { mount } from 'enzyme';
// custom
import TodoItem from '../../components/tasks/TodoItem';

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
	let props, mountedTodoItem;
	const todoItem = () => {
		if(!mountedTodoItem) {
			mountedTodoItem = mount (
				<Provider store = { store } >
					<TodoItem {...props} />
				</Provider>
			);
		}
		return mountedTodoItem;
	};

	let _state = todoItem().state(); // mounted state 
	let _tasks = todoItem().find('CheckComplete'); // wrapper
	beforeEach (() => {
		props = {
			todos: undefined,
			item: undefined
		};
		mountedTodoItem = undefined;
	});

	describe('the wrapping Row component...', () => {
		const rows = todoItem().find('Row');
		const wrappingRow = rows.first();

		xit ('Inspection beforeEach', () => {
			// to inspect testing objects
			console.log('********** state beforeEach',  _state);
			console.log('********** props beforeEach',  _tasks.props());
		});

		xit (' renders (2) outer Rows', () => {
			expect(div.length).to.be.eql(2);
		});

		xit ('renders an outer Row that wraps all components', () => {
			expect (wrappingRow.children()).to.eql(todoItem().children());
		});

		xit ('always renders (7) Cols', () => {
			const cols = todoItem().find('Col');
			expect(cols.length).to.be.eql(7);
		});
	});

	describe('when rendering core components, it..', () => {
		xit ('always renders a CheckComplete component', () => {
			const checkboxes = todoItem().find('CheckComplete');
			expect(checkboxes.length).to.be.eql(1);
		});
		
		xit ('always renders a FormControl for "task" ', () => {
			const tasks = todoItem().find('FormControl.task');
			expect(tasks.length).to.be.eql(1);
		});

		xit ('always renders a Rank component for rank ', () => {
			const ranks = todoItem().find('Rank');
			expect(ranks.length).to.be.eql(1);
		});

		xit ('always renders a CalendarBtn component ', () => {
			const dates = todoItem().find('CalendarBtn');
			expect(dates.length).to.be.eql(1);
		});

		xit ('CalendarBtn is passed (4) props', () => {
			const checkboxes = todoItem().find('CalendarBtn');
			expect(Object.keys(checkboxes.props()).length).to.eql(4);
		});

		xit ('always renders a DeleteBtn component ', () => {
			const deleteBtn = todoItem().find('DeleteBtn');
			expect(deleteBtn.length).to.be.eql(1);
		});
	});
});