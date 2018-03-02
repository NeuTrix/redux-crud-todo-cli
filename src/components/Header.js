import React from 'react';
import logo from '../assets/logo.svg';
import '../containers/App.css';

import { Nav, Navbar, NavItem } from 'react-bootstrap';


// use fixedTop attribute to fix header in place
const Header = () => {

	return(
		<Navbar inverse collapseOnSelect fixedTop >
			<Navbar.Header>
				<Navbar.Brand>
					<img src={logo} className="App-logo" alt="logo" />
				</Navbar.Brand>

				<Navbar.Brand>
					<a href = '/' >Redux-Todo </a>
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
					<NavItem eventKey={ 3 } href = '/login' >
			*login 
					</NavItem>

					<NavItem eventKey={ 4 } href = '/signup' >
			*sign up
					</NavItem>
				</Nav>

			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;