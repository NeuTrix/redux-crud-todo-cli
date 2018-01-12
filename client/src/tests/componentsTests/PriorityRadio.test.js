/* eslint-env node, mocha */

import React from 'react';
import ReactDOM from 'react-dom';
import PriorityRadio from '../../containers/PriorityRadio';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<PriorityRadio />
		, div);
});


