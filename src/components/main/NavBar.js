// This component holds the full navigation bar 
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//  ===Components===
import AppBar from '@material-ui/core/AppBar';
import BrandLogo from './BrandLogo';
import LoginSwitch from './LoginSwitch';
import MenuBar from './MenuBar';
import Navigation from './Navigation';
import SearchBar from './SearchBar';

const styles = (theme) => ({
	root: {
		gridArea: 'main',
		gridTemplateAreas: `'menu search login test' `,
		gridTemplateColumns: `1fr 6fr 3fr 1fr`,
		gridColumnGap: `5px`,
		display: 'grid',
		placeItems: 'center',
		// color: 'purple',
	},
	menu: {
		gridArea: 'menu',
		['@media (min-width: 600px)']: {
			display: 'none' 
		},
	}
});

const test = {
	// color: 'orangered'
}

function NavBar (props) {
  const { auth, classes, logout } = props;

	return (
		<AppBar className={ classes.root }>
			<span className={ classes.menu } >
				<MenuBar/>
			</span>
			{/* <Navigation style={{ gridArea: 'nav' }} auth={ auth } logout={ logout }/> */}
			{/* <BrandLogo/>  */} 
			<SearchBar />
			<LoginSwitch auth={ auth } logout={ logout } />
		</AppBar>
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

export default withStyles(styles)(NavBar)
