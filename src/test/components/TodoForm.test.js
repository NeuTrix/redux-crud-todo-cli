/* eslint-env node, mocha */
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'enzyme';
import TodoForm from '../../components/todos/TodoForm';

xit('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<TodoForm
			createTodo={f => f}
			owner="100"
		/>, div,
	);
});

const wrapper = render(
	<TodoForm
		createTodo={f => f}
		owner = "100"
	/>,
);

xit('...renders the TodoForm ', () => {
	expect(wrapper).toMatchSnapshot();
});
