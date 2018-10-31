import React from 'react';
import ReactDOM from 'react-dom';
import BrandLogo from '../../components/main/BrandLogo';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<BrandLogo />, div);
});
