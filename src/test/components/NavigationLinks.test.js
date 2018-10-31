import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'enzyme';
import NavigationLinks from '../../components/main/NavigationLinks';

describe('The NavigationLinks Component w/ ReactDom', () => {
	const wrapper = render(
		<Router>
			<NavigationLinks isAuth={false} logout={f => f} />
		</Router>    
	);

	it('... renders the NavigationLinks component', () => {
		expect(wrapper).toMatchSnapshot({
			// handle randomly generated class names from React
			// class: expect.any(Object)
		});
	});
});
