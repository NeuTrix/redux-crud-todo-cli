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
		gridTemplateAreas: `'menu nav search login' `,
		// gridTemplateColumns: `1fr 6fr 3fr 1fr`,
		gridColumnGap: `5px`,
		display: 'grid',
		placeItems: 'center',
	},
	menu: {
		gridArea: 'menu',
		// hide menu display at larger screen sizes
		['@media (min-width: 650px)']: {
			display: 'none' 
		},
	},
	nav: {
		gridArea: 'nav',
		display: 'none',
		['@media (min-width: 650px)']: {
			display: 'flex',
		}
	},
	search: { gridArea: 'search' },
	login: { gridArea: 'login' },
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
			<span className={ classes.nav } >
				<Navigation auth={ auth } logout={ logout }/>
			</span>
				{/* <BrandLogo/>  */} 
			<span className={ classes.search } >
				<SearchBar />
			</span>
			<span className={ classes.login } >
				<LoginSwitch auth={ auth } logout={ logout } />
			</span>
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
