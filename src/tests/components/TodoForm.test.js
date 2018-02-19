/* eslint-env node, mocha */

import React from 'react';
import ReactDOM from 'react-dom';
import TodoForm from '../../components/TodoForm';

// ========= 

// this may want a Provider to work
it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<TodoForm />
		, div
	);

});
