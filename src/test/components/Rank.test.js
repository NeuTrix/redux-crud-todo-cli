/* eslint-env node, mocha */
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'enzyme';
import Rank from '../../components/todos/Rank';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<Rank
			rank="med"
			handleChange={f => f}		
		/>, div,
	);
});

const wrapper = render(
	<Rank
		rank="med"
		handleChange={f => f}
	/>,
);

it('...renders the Rank ', () => {
	expect(wrapper).toMatchSnapshot();
});
