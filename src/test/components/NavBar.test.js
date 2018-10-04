/* eslint-env jest, mocha, chai */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'enzyme';
import NavBar from '../../components/main/NavBar';

describe('The NavBar Component w/ ReactDom', () => {
	const wrapper = render(
		<Router>
			<NavBar/>
		</Router>    
	);

	it('... renders the NavBar component', () => {
		// handle randomly generated class names from React
		expect(wrapper).toMatchSnapshot({
			class: expect.any(String)
		});
	});
});
