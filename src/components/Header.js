import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../containers/App.css';

import { 
	Col, 
	Grid, 
	Nav, 
	Navbar, 
	NavItem, 
	Row 
} from 'react-bootstrap';


const Header = () => {

	return(
		<Navbar inverse collapseOnSelect fixedTop >

		  <Navbar.Header>
		    <Navbar.Brand>
					<img src={logo} className="App-logo" alt="logo" />
		    </Navbar.Brand>

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