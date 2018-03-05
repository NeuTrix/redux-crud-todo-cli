import React from 'react';
import logo from '../assets/logo.svg';
import '../containers/App.css';
import { Link, NavLink, } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Nav, Navbar, NavItem } from 'react-bootstrap';

	const style = {
		color: 'lime'
	}
	const brandStyle = {
		color: 'whitesmoke'
	}

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
					<NavLink to = '/todos' style = { brandStyle }>Redux-Todo</NavLink>
				</Navbar.Brand>

				<Navbar.Toggle />
			</Navbar.Header>

			<Navbar.Collapse>

				<Nav>
					<NavItem >
						<NavLink to = '/' style = { style }>Home</NavLink>
					</NavItem>
				</Nav>

				<Nav>
					<NavItem >
						<NavLink to = '/about' style = { style }>About</NavLink>
					</NavItem>
				</Nav>

				<Nav pullRight>

					<NavItem >
						<NavLink to = '/login' style = { style } >Login</NavLink>
					</NavItem>

					<NavItem >
						<NavLink to = '/signup' style = { style }>Signup</NavLink>
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