/* eslint-env jest, mocha, chai */
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { shallow, mount, render } from 'enzyme';
import NavSection from '../../components/main/NavSection';

describe('The NavSection Component w/ ReactDom', () => {
	const wrapper = render(
		<Router>
			<NavSection/>
		</Router>    
	);

	it('...renders the NavSection component', () => {
		// handle randomly generated class names from React
		expect(wrapper).toMatchSnapshot({
			class: expect.any(String)
		});
	});
});