/* eslint-env jest, mocha, chai */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'enzyme';
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