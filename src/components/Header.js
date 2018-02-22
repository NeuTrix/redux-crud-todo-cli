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
			      <Link to = '/' >React-Todo App</Link>
			    </Navbar.Brand>
			    <Navbar.Toggle />
			  </Navbar.Header>

			  <Navbar.Collapse>
			    <Nav>
			      <NavItem eventKey={1}>
				      <Link to = '/' > home
				      </Link>
			      </NavItem>
			    </Nav>

			    <Nav pullRight>
			      <NavItem eventKey={1}>
			        <Link to = '/login' >
				        login
			        </Link>
			      </NavItem>

			      <NavItem eventKey={2}>
			        <Link to = '/signup' >
				        sign up
			        </Link>
			      </NavItem>

			    </Nav>

			  </Navbar.Collapse>
			</Navbar>
	);
};


// ========= ========= ========= 

// <Grid>
// 			<Row className= "header" > 

// 			<Col sm = {spacing.sm.icon} >
// 				 icon
// 			</Col>
			
// 			<Col sm = {spacing.sm.home} >
// 				 home
// 			</Col>
			
// 			<Col sm = {spacing.sm.brand} >
// 				 brand
// 			</Col>
			
// 			<Col sm = {spacing.sm.login} >
// 				 login
// 			</Col>
			
// 			<Col sm = {spacing.sm.signup} >
// 				 signup
// 			</Col>
			
// 			</Row>
// 	</Grid>
export default Header;