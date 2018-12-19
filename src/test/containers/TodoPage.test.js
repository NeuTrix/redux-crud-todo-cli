/* eslint-env chai, jest, mocha */
import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../store/store';
import TodoPage from '../../components/todos/TodoPage'

describe ('The TodoPage renders', () => {
	const user = {_id: 'placeholder'}
	it ('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(
		<Provider store= { store } >
			<TodoPage 
				user="user"
			/>
		</Provider>
		, div);
	});
});

xdescribe ('The TodoPage store connection', () => {

	xit ('... can connect to the store', () => {
		//  how to test for this?
	});

});

xdescribe ('The TodoPage dispatch props', () => {

	let mountedTodoPage; // the mounted object

	const todopageComp = () => {
		if (!mountedTodoPage) {
			mountedTodoPage = mount (<TodoPage {...props}/>);
		}
		return mountedTodoPage;
	};

	console.log('===>',mountedTodoPage.children())

	it ('... has a create prop', () => {

	});

	it ('... has a read prop', () => {

	});

	it ('... has a update prop', () => {

	});

	it ('... has a delete prop', () => {

	});


});




xdescribe ('The TodoPage Component', () => {
	

	let _state = todopageComp().state(); // mounted component state 

	xdescribe ('the wrapping Form component...', () => {

		const formCtl = todopageComp().find('FormControl');

		it ('always renders an outer FormControl', () => {
			expect (formCtl.length).to.be.eql(1);
		});

	});

	xdescribe (' When rendering, for Props...', () => {
		xit ('Inspection for Rendering', () => {
			// to inspect testing objects
			// console.log('*** the Component: ', mountedTodoPage.debug())
			console.log('*** Render the State: ', _state); 
			console.log('*** Render the Props: ', _tasks.props()); 
		});

		it ('...TodoPage is passed (3) props', () => {
			expect (Object.keys(_tasks.props()).length).to.eql(3);
		});

	});

	
});