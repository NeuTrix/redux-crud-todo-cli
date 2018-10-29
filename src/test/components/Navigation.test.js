/* eslint-env jest, mocha, chai */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'enzyme';
import Navigation from '../../components/main/Navigation';


it('renders without crashing', () => {
	const div = document.createElement('div');
	
	ReactDOM.render(
		<Router>
			<Navigation />
		</Router>
		, div);
});

describe('The Navigation Component w/ ReactDom', () => {
	const wrapper = render(
		<Router>
			<Navigation/>
		</Router>    
	);

	it('... renders the Navigation component', () => {
		expect(wrapper).toMatchSnapshot({
			// handle randomly generated class names from React
			// class: expect.any(Object)
		});
	});
});
