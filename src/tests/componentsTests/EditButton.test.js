/* eslint-env mocha */

import React from 'react';
import ReactDOM from 'react-dom';
import EditButton from '../../containers/EditButton';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<EditButton />
		,div);
});

