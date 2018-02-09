import React from 'react';
import ReactDOM from 'react-dom';
import TodoTitleBar from '../../containers/TodoTitleBar';


it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<div>
			<TodoTitleBar />
		</div>
		, div);
});


