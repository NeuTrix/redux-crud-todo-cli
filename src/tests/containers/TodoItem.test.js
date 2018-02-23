/* eslint-env mocha, chai */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../../store/store';
import { expect } from 'chai';
import TodoItem from '../../components/TodoItem';

// ========= 

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<Provider store = { store } >
			<TodoItem />
		</Provider>
		, div
	);
});
