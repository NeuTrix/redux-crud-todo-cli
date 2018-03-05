import React from 'react';
import logo from '../assets/logo.svg';
import '../containers/App.css';
import { Link, } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Nav, Navbar, NavItem } from 'react-bootstrap';

	const style = {
		color: 'lightblue'
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
					<div to = '/todos' style = { brandStyle }>Redux-Todo</div>
				</Navbar.Brand>

				<Navbar.Toggle />
			</Navbar.Header>

			<Navbar.Collapse>

				<Nav>
					<NavItem >
						<Link to = '/' style = { style }>Home</Link>
					</NavItem>
				</Nav>

				<Nav>
					<NavItem >
						<Link to = '/about' style = { style }>About</Link>
					</NavItem>
				</Nav>

				<Nav pullRight>

					<NavItem >
						<Link to = '/login' style = { style } >Login</Link>
					</NavItem>

					<NavItem >
						<Link to = '/register' style = { style }>Register</Link>
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