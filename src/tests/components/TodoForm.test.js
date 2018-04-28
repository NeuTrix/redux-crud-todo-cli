/* eslint-env node, mocha */
import React from 'react';
import ReactDOM from 'react-dom';
import TodoForm from '../../components/tasks/TodoForm';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<TodoForm />, div
	);
});
