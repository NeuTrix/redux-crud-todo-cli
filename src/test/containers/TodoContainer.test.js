/* eslint-env chai, jest, mocha */
import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../store/store';
import TodoContainer from '../../components/todos/TodoContainer';

describe('The TodoContainer renders', () => {
	const user = { _id: 'placeholder' };
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<Provider store={store}>
				<TodoContainer
					user="user"
				/>
			</Provider>,
			div,
		);
	});
});

xdescribe('The TodoContainer store connection', () => {
	xit('... can connect to the store', () => {
		//  how to test for this?
	});
});

xdescribe('The TodoContainer dispatch props', () => {
	let mountedTodoPage; // the mounted object

	const todopageComp = () => {
		if (!mountedTodoPage) {
			mountedTodoPage = mount(<TodoContainer {...props} />);
		}
		return mountedTodoPage;
	};

	console.log('===>', mountedTodoPage.children());

	it('... has a create prop', () => {

	});

	it('... has a read prop', () => {

	});

	it('... has a update prop', () => {

	});

	it('... has a delete prop', () => {

	});
});


xdescribe('The TodoContainer Component', () => {
	const _state = todopageComp().state(); // mounted component state

	xdescribe('the wrapping Form component...', () => {
		const formCtl = todopageComp().find('FormControl');

		it('always renders an outer FormControl', () => {
			expect(formCtl.length).to.be.eql(1);
		});
	});

	xdescribe(' When rendering, for Props...', () => {
		xit('Inspection for Rendering', () => {
			// to inspect testing objects
			// console.log('*** the Component: ', mountedTodoPage.debug())
			console.log('*** Render the State: ', _state);
			console.log('*** Render the Props: ', _tasks.props());
		});

		it('...TodoContainer is passed (3) props', () => {
			expect(Object.keys(_tasks.props()).length).to.eql(3);
		});
	});
});
