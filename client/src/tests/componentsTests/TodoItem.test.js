/* eslint-env mocha, chai */

import React from 'react';
import ReactDOM from 'react-dom';

// Testing...
// import { expect } from 'chai';

import TodoItem from '../../components/TodoItem';

// ====================================

// this may want a Provider to work
describe('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<TodoItem />
		, div
	);
});