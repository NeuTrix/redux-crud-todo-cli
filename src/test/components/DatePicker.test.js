/* eslint-env node, mocha */
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'enzyme';
import DatePicker from '../../components/todos/DatePicker';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<DatePicker
			rank="med"
		/>, div,
	);
});

const wrapper = render(
	<DatePicker
		rank="med"
	/>,
);

it('...renders the DatePicker ', () => {
	expect(wrapper).toMatchSnapshot();
});
