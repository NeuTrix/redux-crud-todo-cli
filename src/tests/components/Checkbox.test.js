import React from 'react';
import ReactDOM from 'react-dom';
import Checkbox from '../../components/Checkbox';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<Checkbox />,
		div);
});


