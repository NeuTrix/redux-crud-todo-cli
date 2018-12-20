// /* eslint-env mocha, chai */
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { expect } from 'chai';
// import { mount } from 'enzyme';
// import DeleteButton from '../../components/buttons/DeleteButton';

xit ('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render (
		<DeleteButton/>, div
	);
});

// describe ('The DeleteButton Component', () => {
// 	let props; // default props to clear objects before each test
// 	let mountDeleteBtn; // the mounted object

// 	const deleteComp = () => {
// 		if(!mountDeleteBtn) {
// 			mountDeleteBtn = mount (
// 				<DeleteButton /> 
// 			);
// 		}
// 		return mountDeleteBtn;
// 	};

// 	let _deletebtns = deleteComp().find('DeleteButton'); // wrapper
// 	let _buttons = deleteComp().find('Button'); // wrapper

// 	beforeEach (() => {
// 		props = { 
// 			api: 'https://redux-todo-api.herokuapp.com/api/todos',
// 			deleteTodo: f => f,
// 			removeTodo: f => f,
// 			_id: 'default',
// 		};
// 		mountDeleteBtn = undefined;
// 	});

// 	// to inspect test objects
// 	// console.log('*** the Component:', mountDeleteBtn.debug())
// 	xit ('Inspection beforeEach', () => {
// 		console.log('***> DeleteBtns props beforeEach',  _deletebtns.props());
// 		console.log('***> Button props beforeEach', _buttons.props());
// 	});

// 	describe ('the wrapping DeleteButton component...', () => {
// 		const deleteButtons = deleteComp().find('DeleteButton');
// 		const wrappingRow = deleteButtons.first();

// 		it ('always renders (1) outer DeleteButton', () => {
// 			expect (deleteButtons.length).to.be.eql(1);
// 		});

// 		// xit ('always renders (1) inner Button component ', () => {
// 		// 	expect (_buttons.length).to.be.eql(1);
// 		// });
// 	});

// 	describe (' Then component PROPS...', () => {

// 		it ('...DeleteButton is passed (3) props', () => {
// 			expect (Object.keys(_deletebtns.props()).length).to.eql(3);		
// 		});

// 		it ('...has an deleteTodo prop', () => {
// 			expect (Object.keys(_deletebtns.props())).to.include('deleteTodo');
// 		});

// 		it ('...has an task prop', () => {
// 			expect (Object.keys(_deletebtns.props())).to.include('task');
// 		});

// 		it ('...has an _id prop', () => {
// 			expect (Object.keys(_deletebtns.props())).to.include('_id');
// 		});
// 	});
// });