// This component holds the full navigation bar 
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//  ===Components===
import AppBar from '@material-ui/core/AppBar';
import BrandLogo from './BrandLogo';

const Grid = withStyles({
	root: {
		gridArea: 'main',
		gridTemplateAreas: `'menu brandLogo search login' `,
		gridTemplateColumns: 'repeat(4, 1fr)',
		display: 'grid',
		placeItems: 'center',
	}
})(AppBar);

export default function NavBar (props) {

	return (
		<div>
			<Grid className='navBar'>
					<BrandLogo/> 
			</Grid>
		</div>
	);
};
