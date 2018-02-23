/* eslint-env mocha, chai */

import React from 'react';
import ReactDOM from 'react-dom';

// ========= connect test component to store
import { Provider } from 'react-redux';
import store from '../../store/store';

// Testing...
import { expect } from 'chai';

import TodoItem from '../../components/TodoItem';

// ====================================

// this may want a Provider to work
it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<Provider store = { store } >
			<TodoItem />
		</Provider>
		, div
	);
});

// Could not find "store" in either the context or props of "Connect(TodoItem)"