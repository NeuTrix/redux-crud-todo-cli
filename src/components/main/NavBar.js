// This component holds the full navigation bar 
import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../../helpers/cssConstants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//  === @material-ui
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import BrandLogo from './BrandLogo';

// === components ===
const StyledAppBar = withStyles({
	root: {
		background: 'orange',
		display: 'grid',
		gridArea: 'main',
		gridTemplateAreas: `'menu logo search login' `,
		gridTemplateColumns: '1fr 1fr 1fr 1fr',
		placeItems: 'center',
		height: 20,
	}
})(AppBar);

// ===  Main Component  === 
const NavBar = (props) => {
	const { auth, logout } = props;

	return (
		<div>
			<StyledAppBar className='navBar'>
				<BrandLogo/> 
			</StyledAppBar>
		</div>
	);
};

// === Props  === 
NavBar.propTypes = {
	auth: PropTypes.bool,
	logout: PropTypes.func.isRequired,
	classes: PropTypes.object.isRequired,
};

NavBar.defaultProps = {
	auth: false,
	logout: (f) => 'Default action: Navbar logout fn',
};

// NavBar.contextTypes = { router: PropTypes.object.isRequired };

export default NavBar;
