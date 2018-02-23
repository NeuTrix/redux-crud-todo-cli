import React from 'react';
import ReactDOM from 'react-dom';
import CheckComplete from '../../components/CheckComplete';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<CheckComplete />,
		div);
});


