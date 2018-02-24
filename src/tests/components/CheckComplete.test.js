/* eslint-env mocha, chai */
// Testing resource: https://medium.freecodecamp.org/the-right-way-to-test-react-components-548a4736ab22

// For debugging. Use (inside of an 'it' test, before 'expect'):
// console.log(mountdCheckComplete.debug())

import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../store/store';

import CheckComplete from '../../components/CheckComplete';

// ========= 

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<CheckComplete  /> 
		, div
	);
});

describe('The CheckComplete Component', () => {
	let 
		props, // default props to clear objects before each test
	 	mountdCheckBComplete // the mounted object

	const checkComp = () => {
		if(!mountdCheckBComplete) {
			mountdCheckBComplete = mount (
				<CheckComplete {...props}/> 
			);
		}
		return mountdCheckBComplete
	};

	let _state = checkComp().state(); // mounted state 
	let _tasks = checkComp().find('CheckComplete'); // wrapper

	beforeEach (() => {
		props = {
			_id: "default",
			isCompleted: false,
			toggleComplete: f => f
		}
		mountdCheckBComplete = undefined
	});

	afterEach =(() => {
		_state.isChecked = false
	});

		//console.log('*** the Component:', mountdCheckBComplete.debug())
	xit('Inspection beforeEach', () => {
		// to inspect testing objects
		console.log('********** state beforeEach',  _state)
		console.log('********** props beforeEach',  _tasks.props())
	})

	xit('Inspection afterEach', () => {
		// to inspect testing objects
		//console.log('** the Component: ', mountdCheckBComplete.debug())
		console.log('********** state afterEach',  _state)
		console.log('********** props afterEach',  _tasks.props())
	})

	describe('the wrapping Checkbox component...', () => {

		const checkboxes = checkComp().find('Checkbox');
		const wrappingRow = checkboxes.first();

		it('always renders an outer FormControl', () => {
			expect(checkboxes.length).to.be.eql(1);
		})

		it('always renders a CheckComplete component ', () => {
			expect(_tasks.length).to.be.eql(1);
		})

	});

	describe(' Then component Props...', () => {

		xit('Inspection for Rendering', () => {
			// to inspect testing objects
			console.log('*** Render the State: ', _state) 
			console.log('*** Render the Props: ', _tasks.props()) 
		})

		it('...CheckComplete is passed (3) props', () => {
			expect(Object.keys(_tasks.props()).length).to.eql(3)
		})

		it('...has an _id prop', () => {
			expect(Object.keys(_tasks.props())).to.include('_id')
		})

		it('...has an isCompleted prop', () => {
			expect(Object.keys(_tasks.props())).to.include('isCompleted')
		})

		it('...has an toggleComplete prop', () => {
			expect(Object.keys(_tasks.props())).to.include('toggleComplete')
		})

	})

	describe('The component STATE', () => {

		it('...has (2) state items', () => {
			expect(Object.keys(_state).length).to.eql(2)
		})

		it('... has an isChecked state ', () => {
			expect(_state).to.have.property('isChecked')
		})

		it('...has an isCompleted state ', () => {
			expect(_state).to.have.property('isCompleted')
		})

	})

	xdescribe('..when editing', () => {

		beforeEach(() => {
			_state.isCompleted = true ,
			_state.isEditing = true 
		});

		xit('Inspection: Editing', () => {
			// to inspect testing objects
			console.log('*** Edit State: ', _state) 
			console.log('*** Edit Props: ', _tasks.props()) 
			console.log('*** Edit Props: ', _tasks) 
		})

		xit('...changes font color to red', () => {

		})

	})

})