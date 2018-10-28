// This component holds the full navigation bar 
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//  ===Components===
import AppBar from '@material-ui/core/AppBar';
import BrandLogo from './BrandLogo';
import LoginSwitch from './LoginSwitch';
// import MenuBar from './MenuBar';
import NavSection from './NavSection'

const Grid = withStyles({
	root: {
		gridArea: 'main',
		gridTemplateAreas: `'navSection brandLogo login' `,
		display: 'grid',
		placeItems: 'center',
	}
})(AppBar);

export default function NavBar (props) {
  const { auth, logout } = props;

	return (
		<div>
			<Grid className='navBar'>
				<NavSection auth={ auth } logout={ logout }/>
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
