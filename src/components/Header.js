import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../containers/App.css';
import { IndexLinkContainer } from 'react-router-bootstrap'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../actions/loginActions';
import { readTodos } from '../actions/readActions';

import { Nav, Navbar, NavItem } from 'react-bootstrap';

	const style = {
		color: 'lightblue'
	}
	const brandStyle = {
		color: 'whitesmoke',
		fontSize: '0.75em'
	}

	const logoutStyle ={
		color: 'lime'
	}

// use fixedTop attribute to fix header in place
class Header extends Component {

	logout(e) {
		e.preventDefault();
		this.props.logout();
		this.context.router.history.push('/');
	}

	onClick(e){
		// e.preventDefault();
		this.props.readTodos();
	}

	render() {
		
		const { isAuthenticated, user } = this.props.authApi;

		const userLinks = (
			<Nav pullRight>
				<NavItem onClick = { this.logout.bind(this)} >
					
					<span style = { style }>Welcome {user.username}!</span>
					{ '   :   ' }
					<span style = { logoutStyle }>Log Out</span>
				</NavItem>
			</Nav>
		)

		const guestLinks = (
			<Nav pullRight>
				<IndexLinkContainer to = '/login' style = { style } >
					<NavItem > Sign In </NavItem>
				</IndexLinkContainer>

				<IndexLinkContainer to = '/register' style = { style }>
					<NavItem > Register </NavItem>
				</IndexLinkContainer>
			</Nav>
		)

		return(
			<Navbar inverse collapseOnSelect fixedTop >

				<Navbar.Header>
					<Navbar.Brand>
						<img src={logo} className="App-logo" alt="logo" />
					</Navbar.Brand>
					<Navbar.Brand>
						<IndexLinkContainer to = '/' style = { style }>
							<NavItem style = { brandStyle }> Redux-Todo </NavItem>
						</IndexLinkContainer>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>

				<Navbar.Collapse>
					<Nav>
						<IndexLinkContainer to = '/' style = { style }>
							<NavItem > Home </NavItem>
						</IndexLinkContainer>
					</Nav><Nav>

						<IndexLinkContainer to = '/todos' style = { style }>
							<NavItem onClick = { this.onClick.bind(this) }> Todos </NavItem>
						</IndexLinkContainer>
					</Nav>

					<Nav>
						<IndexLinkContainer to = '/about' style = { style }>
							<NavItem > { isAuthenticated } </NavItem>
						</IndexLinkContainer>
					</Nav>
					{ isAuthenticated ? userLinks : guestLinks }
				</Navbar.Collapse>
				
			</Navbar>
		);
	}
};


Header.propTypes = {
	authApi: PropTypes.object.isRequired,
	logout: PropTypes.func.isRequired,
	readTodos: PropTypes.func.isRequired
}

Header.defaultProps = {
	// authApi: false
}


Header.contextTypes = {
  router: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
	return { 
		authApi: state.authApi,
		user: state.authApi
	}
}

export default connect(mapStateToProps, { logout, readTodos })(Header);