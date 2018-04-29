/* eslint-env jest, mocha, chai */
import React from 'react';
import ReactDom from 'react-dom';

import { shallow, mount, render } from 'enzyme';
import NavBar from '../../components/main/NavBar';

describe('The NabBar Component w/ ReactDom', () => {

	xit('..renders the NabBar component w/ReactDom', () => {
		const div = document.createElement('div');
		ReactDom.render(
			<NabBar/>,
			div
		);
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



