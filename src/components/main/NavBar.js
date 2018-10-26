// This component holds the full navigation bar 
import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../../helpers/cssConstants';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo-white.png';
//  === @material-ui
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

// === components ===
// import NavSection from './NavSection';

const styles ={
	root: {
		background: 'orange',
		display: 'grid',
		gridArea: 'main',
		gridTemplateAreas: `'menu logo search login' `,
		gridTemplateColumns: '1fr 1fr 1fr 1fr'
	}
};

const Logo = styled.div`
	grid-area: logo;
`;


// ===  Main Component  === 
const NavBar = (props) => {
	const { auth, classes, logout } = props;

	return (
		<AppBar
			className='navBar'
			classes={{root: classes.root}}
		>
			<Logo > XXX </Logo>
		</AppBar>
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

export default withStyles(styles)(NavBar);
