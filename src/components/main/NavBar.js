import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';

import BrandLogo from './BrandLogo';
import NavigationLinks from './NavigationLinks';
import SearchBar from './SearchBar';

const propTypes = {
	classes: PropTypes.instanceOf(Object).isRequired,
	container: PropTypes.instanceOf(Object),
	isAuth: PropTypes.bool.isRequired,
	logout: PropTypes.func.isRequired,
	theme: PropTypes.instanceOf(Object).isRequired,
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
			theme,
		} = this.props;

		return (
			<div className={`NavBar ${classes.root}`}>
				<AppBar className={classes.grid} position="fixed">
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="Open drawer"
							className={`menuButton ${classes.menuButton}`}
							onClick={this.handleDrawerToggle}
						>
							<MenuIcon />
						</IconButton>
					</Toolbar>
					<IconButton className={classes.brandLogo}>
						<NavLink to="/">
							<BrandLogo />
						</NavLink>
					</IconButton>
					<div className={classes.searchBar}>
						<SearchBar />
					</div>
				</AppBar>
				<nav className={classes.drawer}>
					<Drawer
						id="mainDrawer"
						container={container}
						variant="temporary"
						anchor={theme.direction === 'rtl' ? 'right' : 'left'}
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
		display: 'none',
		gridArea: 'brandLogo',
		[theme.breakpoints.up('sm')]: {
			display: 'inherit',
		},
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			flexShrink: 0,
			width: drawerWidth,
		},
	},
	drawerPaper: {
		width: drawerWidth,
	},
	grid: {
		display: 'grid',
		gridTemplateAreas: `
			" menuButton searchBar "
		`,
		gridTemplateColumns: '1fr 4fr',
		placeItems: 'center',
		[theme.breakpoints.up('sm')]: {
			gridTemplateAreas: `
			" brandLogo searchBar menuButton   "
		`,
			gridTemplateColumns: '2fr 4fr 1fr',
		},
	},
	menuButton: {
		color: theme.palette.contrast, // custom theme prop
		gridArea: 'menuButton',
		marginRight: 20,
	},
	root: { display: 'flex' },
	searchBar: {
		gridArea: 'searchBar',
		padding: theme.spacing.unit,
	},
});

NavBar.propTypes = propTypes;

export default withStyles(styles, { withTheme: true })(NavBar);
