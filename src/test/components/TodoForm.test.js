/* eslint-env node, mocha */
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'enzyme';
import TodoForm from '../../components/todos/TodoForm';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<TodoForm
			createTodo={f => f}
		/>, div,
	);
});

const wrapper = render(
	<TodoForm
		createTodo={f => f}
	/>,
);

it('...renders the TodoForm ', () => {
	expect(wrapper).toMatchSnapshot();
});
