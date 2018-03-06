import React from 'react';
import logo from '../assets/logo.svg';
import '../containers/App.css';
import { IndexLinkContainer } from 'react-router-bootstrap'
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
		<Navbar inverse collapseOnSelect fixedTop >

			<Navbar.Header>
				<Navbar.Brand>
					<img src={logo} className="App-logo" alt="logo" />
				</Navbar.Brand>
				<Navbar.Brand>
					<div to = '/todos' style = { brandStyle }> Redux-Todo </div>
				</Navbar.Brand>
				<Navbar.Toggle />
			</Navbar.Header>

			<Navbar.Collapse>
				<Nav>
					<IndexLinkContainer to = '/' style = { style }>
						<NavItem > Home </NavItem>
					</IndexLinkContainer>
				</Nav>

				<Nav>
					<IndexLinkContainer to = '/about' style = { style }>
						<NavItem > About </NavItem>
					</IndexLinkContainer>
				</Nav>

				<Nav pullRight>
					<IndexLinkContainer to = '/login' style = { style } >
						<NavItem > Login </NavItem>
					</IndexLinkContainer>

					<IndexLinkContainer to = '/register' style = { style }>
						<NavItem > Register </NavItem>
					</IndexLinkContainer>
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