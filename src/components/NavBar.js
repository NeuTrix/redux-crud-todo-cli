import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './NavBar.css';

import logo from '../assets/logo.svg';
import { fetchTodos } from '../actions/readActions';
import { logout } from '../actions/loginActions';

import { IndexLinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, nav } from 'react-bootstrap';

// +++++++++  CSS  +++++++++ 

const style = { 

	grid: {
		display: 'grid',
		gridTemplateArea:`"logo welcome  home todos log" `
	},

	base: {
		color: 'lightblue', 
		textAlign: 'center' 
	},

	logoutStyle:{
		color: 'lime', 
		textAlign: 'center' 
	}

};


// +++++++++ COMPONENT  +++++++++ 

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
		backgroundColor: 'orange',
	}

		const { isAuthenticated, user } = this.props.authApi;

		const userLinks = (
				<nav onClick = { this.logout.bind(this)} >
					<span style = { style.logoutStyle }>Log Out</span>
				</nav>
		);

		const guestLinks = (
			<nav >

				<IndexLinkContainer to = '/login' style = { style } >
					<nav > Sign In </nav>
				</IndexLinkContainer>

				<IndexLinkContainer to = '/register' style = { style }>
					<nav > Register </nav>
				</IndexLinkContainer>

			</nav>
		);

		const welcome = (
			<span style = { style } > hi { user.username }! </span>
		);

		return (

			<div style = { style.grid } >

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
							<nav > Home </nav>
						</IndexLinkContainer>
					</Nav>

					<Nav>
						<IndexLinkContainer to = '/todos' style = { style }>
							<nav onClick = { this.onClick.bind(this) }> Todos </nav>
						</IndexLinkContainer>
					</Nav>

					{ isAuthenticated ? userLinks : guestLinks }
					
				</Navbar.Collapse>
				
			</Navbar>

			</div>

		);
	}
}

// +++++++++ PROPS  +++++++++ 

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