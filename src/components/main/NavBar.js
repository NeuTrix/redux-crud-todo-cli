// This component holds the full navigation bar 
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//  ===Components===
import AppBar from '@material-ui/core/AppBar';
import BrandLogo from './BrandLogo';
import MenuBar from './MenuBar';
import Navigation from './Navigation';
import SearchBar from './SearchBar';

// const mediaWidth = '650px'
const styles = (theme) => ({
	root: {
		gridArea: 'main',
		gridTemplateAreas: `'menu search ' `,
		// gridTemplateColumns: `1fr 6fr 3fr 1fr`,
		gridColumnGap: `5px`,
		display: 'grid',
		placeItems: 'center',
		['@media (min-width: 650px)']: {
			gridTemplateAreas: `'brand nav search ' `,			
		}
	},
	brand: {
		gridArea: 'brand',
		display: 'none',
		['@media (min-width: 650px)']: {
			display: 'flex',
		},
	},
	menu: {
		gridArea: 'menu',
		['@media (min-width: 650px)']: {
			display: 'none',
		},
	},
	nav: {
		gridArea: 'nav',
		display: 'none',
		['@media (min-width: 650px)']: {
			display: 'flex',
		}
	},
	 dropDown: {
    background: 'lime', // !!! set to  theme background color
    width: '100%',
    position: 'absolute',
    top: 50,
    left: 0,
    ['@media (max-width: 600px)'] : {
      display: 'none' // !!! do this conditionally for @media
    }
	},
	search: {
		gridArea: 'search'
	},
	
});

function NavBar (props) {
  const { auth, classes, logout } = props;

	return (
		<AppBar className={ classes.root }>
			<div className={ classes.dropDown } > 
        <Navigation />
      </div>
			<span className={ classes.menu }>
				<MenuBar/>
			</span>
			<span className={ classes.nav }>
				<Navigation auth={ auth } logout={ logout }/>
			</span>
			<span className={ classes.brand }>
				<BrandLogo/>  
			</span>
			<span className={ classes.search }>
				<SearchBar />
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
