/* eslint-env jest, mocha, chai */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'enzyme';
import MenuDrawer from '../../components/main/MenuDrawer';

describe('The MenuDrawer Component w/ ReactDom', () => {
	const wrapper = render(
		<Router>
			<MenuDrawer/>
		</Router>    
	);

	it('... renders the MenuDrawer component', () => {
		expect(wrapper).toMatchSnapshot({
			// handle randomly generated class names from React
			// class: expect.any(Object)
		});
	});
});
