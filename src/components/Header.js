import React from 'react';
import logo from '../assets/logo.svg';
import '../containers/App.css';
import { Link, NavLink, } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Nav, Navbar, NavItem } from 'react-bootstrap';


// use fixedTop attribute to fix header in place
const Header = (props) => {

	return (
		<Navbar inverse collapseOnSelect fixedTop 
		>
			<Navbar.Header>
				<Navbar.Brand>
					<img src={logo} className="App-logo" alt="logo" />
				</Navbar.Brand>

				<Navbar.Brand>
					<NavLink to = '/todos'>Redux-Todo</NavLink>
				</Navbar.Brand>

				<Navbar.Toggle />
			</Navbar.Header>

			<Navbar.Collapse>

				<Nav>
					<NavItem eventKey={ 2 } href = '/' >
			*home 
					</NavItem>
				</Nav>

				<Nav>
					<NavItem eventKey={ 2 } href = '/about' >
			*about 
					</NavItem>
				</Nav>

				<Nav pullRight>
					<NavLink to = '/login'>Login</NavLink>

					<NavItem eventKey={ 4 } href = '/signup' >
			*sign up
					</NavItem>
				</Nav>

			</Navbar.Collapse>
		</Navbar>
	);
};

Header.propTypes = {
	location: PropTypes.object
}

Header.defaultProps = {
	location: {}
}

export default Header;