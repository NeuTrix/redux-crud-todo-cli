/* eslint-env node, mocha */
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'enzyme';
import TaskEntry from '../../components/todos/TaskEntry';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<TaskEntry
			value="med"
		/>, div,
	);
});

const wrapper = render(
	<TaskEntry
		value="med"
	/>,
);

it('...renders the TaskEntry ', () => {
	expect(wrapper).toMatchSnapshot();
});
