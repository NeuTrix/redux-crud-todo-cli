import React from 'react';
import ReactDOM from 'react-dom';
import ProgressBar from '../../components/buttons/ProgressBar';


it('renders without crashing', () => {
	const div = document.createElement('div');

	ReactDOM.render(<ProgressBar />, div);
});
