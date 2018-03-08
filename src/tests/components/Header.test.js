/* eslint-env jest, mocha, chai */
import React from 'react';
import ReactDom from 'react-dom';

import { shallow, mount, render } from 'enzyme';
import Header from '../../components/Header';



describe('The Header Component w/ ReactDom', () => {

	xit('..renders the Header component w/ReactDom', () => {
		const div = document.createElement('div');
		ReactDom.render(
			<Header/>,
			div
		);
	});
});

xdescribe('The Header Component', () => {

	let _Header;
	beforeEach(() => {
		_Header = shallow(<Header/>);
		jest.mock('../../components/Login');
	});

	it('..renders the component class "Navbar" ', () => {
		console.log(_Header);
		expect(
			_Header
				.find('Navbar.Header')
				.length
		).toBe(1);
	});

	it('..renders a Login component ', () => {
		expect(
			_Header
				.find('Login')
				.length
		).toBe(1);
	});

	it('..has a login link', () => {
		expect();
	});

});



