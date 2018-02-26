/* eslint-env mocha, chai */
// Testing resource: https://medium.freecodecamp.org/the-right-way-to-test-react-components-548a4736ab22

// For debugging. Use (inside of an 'it' test, before 'expect'):
// console.log(mountdTaskCounter.debug())

import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import TaskCounter from '../../components/TaskCounter';

// ========= 

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<TaskCounter  /> 
		, div
	);
});

describe('The TaskCounter Component', () => {
	let 
		props, // default props to clear objects before each test
	 	mountdTaskCounter // the mounted object

	const checkComp = () => {
		if(!mountdTaskCounter) {
			mountdTaskCounter = mount (
				<TaskCounter {...props}/> 
			);
		}
		return mountdTaskCounter
	};

	let _tasks = checkComp().find('TaskCounter'); // wrapper

	beforeAll (() => {
		// inspect properties and object
		// console.log('*** the Component:', mountdTaskCounter.debug())
		// console.log('********** props',  _tasks.props())
		props = {
			todos: [ ]
		}
		mountdTaskCounter = undefined
	});

	describe('the wrapping Badge component...', () => {

		const badges = checkComp().find('Badge');
		const wrappingRow = badges.first();

		it('always renders a TaskCounter component ', () => {
			expect(_tasks.length).to.be.eql(1);
		})

		it('always renders a Badge', () => {
			expect(badges.length).to.be.eql(1)
		})

	});

	describe('... returns a correct count', () => {
		 let props = { todos: [1,2,3]}
		 let _count = props.todos.length
		 let newTC = mount ( <TaskCounter {...props}/> )
		 // let _badgeVal = newTC.badge.children()
		 
		 // console.log("**",newTC.debug())
		 it('... has the correct props length', () => {
			 expect(newTC.props().todos.length).to.eql(_count)
		 })

		xit('... has the correct badge value', () => {
			// research how to do this
		 	expect(_badgeVal).to.eql('100')
		 })

	})

	describe(' Then component PROPS...', () => {

		xit('Inspection for Rendering', () => {
			// to inspect testing objects
			console.log('*** Render the State: ', _state) 
			console.log('*** Render the Props: ', _tasks.props()) 
		})

		it('...TaskCounter is passed (1) props', () => {
			expect(Object.keys(_tasks.props()).length).to.eql(1)		
		})

		it('...has an todos prop', () => {
			expect(Object.keys(_tasks.props())).to.include('todos')
		})

		it('...todos prop is an array', () => {

		})

	})


})