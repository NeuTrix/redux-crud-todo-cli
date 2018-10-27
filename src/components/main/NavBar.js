// This component holds the full navigation bar 
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//  ===Components===
import AppBar from '@material-ui/core/AppBar';
import BrandLogo from './BrandLogo';
import LoginSwitch from './LoginSwitch';
import MenuBar from './MenuBar';

const Grid = withStyles({
	root: {
		gridArea: 'main',
		gridTemplateAreas: `'menu brandLogo login' `,
		display: 'grid',
		placeItems: 'center',
	}
})(AppBar);

export default function NavBar (props) {
  const { auth, logout } = props;

	return (
		<div>
			<Grid className='navBar'>
				<MenuBar/>
				<BrandLogo/> 
				<LoginSwitch auth={ auth } logout={ logout } />
			</Grid>
		</div>
	);
};

NavBar.propTypes = {
	auth: PropTypes.bool,
	logout: PropTypes.func.isRequired,
};

NavBar.defaultProps = {
	auth: false,
	logout: (f) => 'Default action: Navbar logout fn',
};
