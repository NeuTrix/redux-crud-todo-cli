/* eslint-env node, mocha */
import React from 'react';
import ReactDOM from 'react-dom';
import Rank from '../../components/Rank';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<Rank />, div);
});


