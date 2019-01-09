import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
// @material-ui
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import { withWidth } from '@material-ui/core';
// custom components
import BrandLogo from './BrandLogo';
import NavigationLinks from './NavigationLinks';
import SearchBar from './SearchBar';

const propTypes = {
	classes: PropTypes.instanceOf(Object).isRequired,
	container: PropTypes.instanceOf(Object),
	isAuth: PropTypes.bool.isRequired,
	logout: PropTypes.func.isRequired,
	width: PropTypes.string.isRequired,
};

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showMenu: false,
		};
		this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
	}

	handleDrawerToggle(e) {
		e.preventDefault();
		this.setState(previousState => ({ showMenu: !previousState.showMenu }));
	}

	render() {
		const { showMenu } = this.state;
		const {
			isAuth,
			classes,
			container,
			logout,
			width,
		} = this.props;

		const displayDrawer = width === 'xs' ? 'top' : 'right';
		return (
			<div className={`NavBar ${classes.root}`}>
				<AppBar className={classes.grid} position="fixed">
					<Toolbar className={classes.muitoolbar}>
						<IconButton
							color="inherit"
							aria-label="Open drawer"
							className={`menuButton ${classes.menuButton}`}
							onClick={this.handleDrawerToggle}
						>
							<MenuIcon />
						</IconButton>
					</Toolbar>
					<IconButton className={classes.brandLogo} disableRipple>
						<NavLink to="/">
							<BrandLogo />
						</NavLink>
					</IconButton>
					{/* <div className={classes.searchBar}>
						<SearchBar />
					</div> */}
				</AppBar>
				<nav className={classes.drawer}>
					<Drawer
						id="mainDrawer"
						className={classes.test}
						container={container}
						variant="temporary"
						anchor={displayDrawer}
						open={showMenu}
						classes={{ paper: classes.drawerPaper }}
						// Better open performance on mobile.
						ModalProps={{ keepMounted: true }}
						onClick={this.handleDrawerToggle}
					>
						<Divider />
						<NavigationLinks
							isAuth={isAuth}
							logout={logout}
							toggle={this.handleDrawerToggle}
						/>
						<Divider />
					</Drawer>
				</nav>
			</div>
		);
	}
}

const drawerWidth = 264;
const styles = theme => ({
	brandLogo: {
		gridArea: 'brandLogo',
		placeContent: 'flex-start',		
		[`&:hover`]: {
			background: 'none',
		}
	},

	drawer: {
		[theme.breakpoints.up('sm')]: {
			flexShrink: 0,
			width: drawerWidth,
		},
	},

	drawerPaper: {
		[theme.breakpoints.down('xs')]: {
			width: '100%',
		},
		width: drawerWidth,
	},

	grid: {
		display: 'grid',
		gridTemplateAreas: `
			"brandLogo menuButton"
		`,
	},

	menuButton: {
		color: theme.palette.contrast, // custom theme prop
		gridArea: 'menuButton',
	},

	muitoolbar: {
		placeContent: 'flex-end',
	},

	root: { display: 'flex' },
	searchBar: {
		gridArea: 'searchBar',
		padding: theme.spacing.unit,
	},

	test: {
		anchor: 'bottom',
	},
});

NavBar.propTypes = propTypes;

export default withWidth()(withStyles(styles, {
	withTheme: true,
})(NavBar));
