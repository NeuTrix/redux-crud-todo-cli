import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Grid, Nav, Navbar, NavItem, Row } from 'react-bootstrap';
// import Login from './Login'

const Header = () => {

	const spacing = {
		sm: { icon: 2, brand: 3, home: 2, signup: 2, login: 3}

	}

	return(
			<Navbar inverse collapseOnSelect>

			  <Navbar.Header>
			    <Navbar.Brand>
			      <Link to = '/' >Redux-Todo</Link>
			    </Navbar.Brand>
			    <Navbar.Toggle />
			  </Navbar.Header>

			  <Navbar.Collapse>

			    <Nav>
			      <NavItem eventKey={1}>
				      <Link to = '/#' > *home </Link>
			      </NavItem>
			    </Nav>

			    <Nav>
			      <NavItem eventKey={1} >
				      <Link to = '/#' > *about </Link>
			      </NavItem>
			    </Nav>

			    <Nav pullRight>
			      <NavItem eventKey={1}>
			        <Link to = '/#' > *login </Link>
			      </NavItem>

			      <NavItem eventKey={2}>
			        <Link to = '/#' > *sign up </Link>
			      </NavItem>

			    </Nav>

			  </Navbar.Collapse>
			</Navbar>
	);
};

export default Header;