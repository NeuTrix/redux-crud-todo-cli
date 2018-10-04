/* eslint-env jest, mocha, chai */
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { shallow, mount, render } from 'enzyme';
import NavBar from '../../components/main/NavBar';

describe('The NavBar Component w/ ReactDom', () => {
	const wrapper = render(
		<Router>
			<NavBar/>
		</Router>    
	);
	it('... renders the navbar', () => {
		expect(wrapper).toMatchSnapshot();
	});

});

xdescribe('The NabBar Component', () => {

	let _NabBar;
	beforeEach(() => {
		_NabBar = shallow(<NabBar/>);
		jest.mock('../../components/Login');
	});

	it('..renders the component class "Navbar" ', () => {
		console.log(_NabBar);
		expect(
			_NabBar
				.find('Navbar.NabBar')
				.length
		).toBe(1);
	});

	it('..renders a Login component ', () => {
		expect(
			_NabBar
				.find('Login')
				.length
		).toBe(1);
	});

	it('..has a login link', () => {
		expect();
	});

});



