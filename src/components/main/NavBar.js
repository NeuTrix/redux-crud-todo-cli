// This component holds the full navigation bar 
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//  ===Components===
import AppBar from '@material-ui/core/AppBar';
import MenuBar from './MenuBar';
import BrandLogo from './BrandLogo';
import LoginSwitch from './LoginSwitch';
import Navigation from './Navigation';

const Grid = withStyles({
	root: {
		gridArea: 'main',
		gridTemplateAreas: `'nav brandLogo login' `,
		display: 'grid',
		placeItems: 'center',
	}
})(AppBar);


export default function NavBar (props) {
  const { auth, logout } = props;

	return (
		<div>
			<Grid className='navBar'>
				<MenuBar style={{ gridArea: 'nav' }} />
				{/* <Navigation style={{ gridArea: 'nav' }} auth={ auth } logout={ logout }/> */}
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
