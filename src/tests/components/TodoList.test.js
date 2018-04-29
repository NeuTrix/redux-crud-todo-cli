/* eslint-env chai, jest, mocha */
//  vendor
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../../store/store';
//  custom
import TodoList from '../../components/todos/TodoList';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<Provider store={ store } >
			<TodoList />
		</Provider>
		, div);
});


