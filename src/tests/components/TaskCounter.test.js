/* eslint-env mocha, chai */
// vendor
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { expect } from 'chai';
import { mount } from 'enzyme';
// custom
import TaskCounter from '../../components/tasks/TaskCounter';

it ('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<TaskCounter/>, div
	);
});

describe ('The TaskCounter Component', () => {
	let props; // default props to clear objects before each test
	let mountdTaskCounter; // the mounted object

	const checkComp = () => {
		if (!mountdTaskCounter) {
			mountdTaskCounter = mount (<TaskCounter {...props}/>);
		}
		return mountdTaskCounter;
	};
	let _tasks = checkComp().find ('TaskCounter'); // wrapper

	beforeAll (() => {
		props = { todos: [ ] };
		mountdTaskCounter = undefined;
	});

	describe ('the wrapping Badge component...', () => {
		const badges = checkComp().find('Badge');
		// const wrappingRow = badges.first();

		it ('always renders a TaskCounter component ', () => {
			expect (_tasks.length).to.be.eql(1);
		});

	/*	it ('always renders a Badge', () => {
			expect (badges.length).to.be.eql(1);
		});*/
	});

	describe ('... returns a correct count', () => {
		let props = { todos: [1,2,3]};
		let _count = props.todos.length;
		let newTC = mount ( <TaskCounter {...props}/> );
		it ('... has the correct props length', () => {
			expect (newTC.props().todos.length).to.eql(_count);
		});
	});

	describe (' Then component PROPS...', () => {
		xit ('Inspection for Rendering', () => {
			// to inspect testing objects
			console.log('*** Render the State: ', _state); 
			console.log('*** Render the Props: ', _tasks.props()); 
		});

		it ('...TaskCounter is passed (2) props', () => {
			expect (Object.keys(_tasks.props()).length).to.eql(2);		
		});

		it ('...has an todos prop', () => {
			expect (Object.keys(_tasks.props())).to.include('todos');
		});
	});
});