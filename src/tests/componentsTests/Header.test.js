import React from 'react';
import ReactDom from 'react-dom';

import { shallow, mount, render } from 'enzyme';
import Header from '../../containers/Header';

// ======== eslint
/*global describe:true*/
/*global it:true*/
/*global xit:true*/
/*global expect:true*/
/*global render:true*/
/*global mount:true*/
/*global beforeEach:true*/
/*eslint no-undef: "error"*/

describe('The Header Component w/ ReactDom', () => {

	xit('..renders the Header component w/ReactDom', () => {
		const div = document.createElement('div');
		ReactDom.render(
			<Header/>,
			div
		);
	});
});

describe('The Header Component', () => {

	let _Header;
	beforeEach(() => {
		_Header = shallow(<Header/>);
		jest.mock('../../containers/Login');
	});

	it('..renders the component class "header" ', () => {
		expect(
			_Header
				.find('div.header')
				.length
		).toBe(1);
	});

	xit('..renders a Login component ', () => {
		expect(
			_Header
				.find('Login')
				.length
		).toBe(1);
	});

	xit('..has a login link', () => {
		expect();
	});

});



