/* eslint-env node, mocha */
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'enzyme';
import Rank from '../../components/todos/Rank';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<Rank
			value="med"
		/>, div,
	);
});

const wrapper = render(
	<Rank
		value="med"
	/>,
);

it('...renders the Rank ', () => {
	expect(wrapper).toMatchSnapshot();
});
