import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../containers/App.css';
import logo from '../assets/logo.svg';
import { connect } from 'react-redux';
import { fetchTodos } from '../actions/readActions';
import { IndexLinkContainer } from 'react-router-bootstrap';
import { logout } from '../actions/loginActions';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

const style = { color: 'lightblue', textAlign: 'center' };
const brandStyle = { color: 'whitesmoke', fontSize: '0.5em' };
const logoutStyle ={ color: 'lime', textAlign: 'center' };

// +++++++++   +++++++++ 

class Header extends Component {

	logout(e) {
		e.preventDefault();
		this.props.logout();
		this.context.router.history.push('/');
	}

	onClick(e){
		// e.preventDefault();
		this.props.fetchTodos();
	}

	render() {
	const gridStyle = {
		display: 'grid',
		// gridArea: this.props.placement.gridArea
		gridArea: 'form',
		backgroundColor: 'orange',
	}

		const { isAuthenticated, user } = this.props.authApi;

		const userLinks = (
			<Nav pullRight style = { style }>
				<NavItem onClick = { this.logout.bind(this)} >
					<span style = { logoutStyle }>Log Out</span>
				</NavItem>
			</Nav>
		);

		const guestLinks = (
			<Nav pullRight>

				<IndexLinkContainer to = '/login' style = { style } >
					<NavItem > Sign In </NavItem>
				</IndexLinkContainer>

				<IndexLinkContainer to = '/register' style = { style }>
					<NavItem > Register </NavItem>
				</IndexLinkContainer>

			</Nav>
		);

		const welcome = (
			<span style = { style } > hi { user.username }! </span>
		);

		return (

			<div style = { gridStyle } >

			<Navbar inverse collapseOnSelect fixedTop >

				<Navbar.Header>

					<Navbar.Brand>
						<IndexLinkContainer to = '/' >
							<img src= { logo } className= "App-logo" alt= "logo" />
						</IndexLinkContainer>
					</Navbar.Brand>

					<Navbar.Brand >
						{ isAuthenticated ? welcome : '' } 
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
						<IndexLinkContainer to = '/todos' style = { style }>
							<NavItem onClick = { this.onClick.bind(this) }> Todos </NavItem>
						</IndexLinkContainer>
					</Nav>

					{ isAuthenticated ? userLinks : guestLinks }
					
				</Navbar.Collapse>
				
			</Navbar>

			</div>

		);
	}
}

// +++++++++   +++++++++ 

Header.propTypes = {
	authApi: PropTypes.object.isRequired,
	logout: PropTypes.func.isRequired,
	placement: PropTypes.string,
	fetchTodos: PropTypes.func.isRequired
};

Header.contextTypes = {
	router: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
	return { 
		authApi: state.authApi,
		user: state.authApi
	};
};

export default connect(mapStateToProps, { logout, fetchTodos })(Header);