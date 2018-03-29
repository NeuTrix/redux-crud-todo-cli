/* eslint-env mocha, chai */
import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../store/store';
import CheckComplete from '../../components/CheckComplete';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render (
		<CheckComplete  />, div
	);
});

describe('The CheckComplete Component', () => {
	let props; // default props to clear objects before each test
	let mountdCheckComplete; // the mounted object

	const checkComp = () => {
		if(!mountdCheckComplete) {
			mountdCheckComplete = mount (
				<CheckComplete {...props}/> 
			);
		}
		return mountdCheckComplete;
	};

	let _state = checkComp().state(); // mounted state 
	let _tasks = checkComp().find('CheckComplete'); // wrapper

	beforeEach (() => {
		props = { completed: false };
		mountdCheckComplete = undefined;
	});

	afterEach =(() => {
		_state.isChecked = false;
	});

	// to inspect test objects
	//console.log('*** the Component:', mountdCheckComplete.debug())
	xit('Inspection beforeEach', () => {
		console.log('********** state beforeEach',  _state);
		console.log('********** props beforeEach',  _tasks.props());
	});

	xit('Inspection afterEach', () => {
		console.log('********** state afterEach',  _state);
		console.log('********** props afterEach',  _tasks.props());
	});

	describe('the wrapping Checkbox component...', () => {
		const checkboxes = checkComp().find('Checkbox');
		const wrappingRow = checkboxes.first();

		/*xit('always renders an outer FormControl', () => {
			expect(checkboxes.length).to.be.eql(1);
		});*/

		it('always renders a CheckComplete component ', () => {
			expect(_tasks.length).to.be.eql(1);
		});
	});

	describe(' Then component PROPS...', () => {
		xit('Inspection for Rendering', () => {
			// to inspect testing objects
			console.log('*** Render the State: ', _state); 
			console.log('*** Render the Props: ', _tasks.props()); 
		});

		it('...CheckComplete is passed (3) props', () => {
			expect(Object.keys(_tasks.props()).length).to.eql(3);		
		});

		it('...has an completed prop', () => {
			expect(Object.keys(_tasks.props())).to.include('completed');
		});

		it('...has an editTodo prop', () => {
			expect(Object.keys(_tasks.props())).to.include('editTodo');
		});

		it('...has an _id prop', () => {
			expect(Object.keys(_tasks.props())).to.include('_id');
		});

	});

	describe('The component STATE', () => {
		it('...has (1) state items', () => {
			expect(Object.keys(_state).length).to.eql(1);
		});

		it('... has an isChecked state ', () => {
			expect(_state).to.have.property('isChecked');
		});
	});

});