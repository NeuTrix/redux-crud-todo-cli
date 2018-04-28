// vendor
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// +++++++++   +++++++++ 
import { connect } from 'react-redux';
// custom
import './NavBar.css';
import logo from '../assets/logo.svg';

import { fetchTodos } from '../actions/readActions';
import { logout } from '../actions/loginActions';

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

class NavBar extends Component {

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
		
		const { isAuthenticated, user } = this.props.authApi;

		const userLinks = (
			<div onClick = { this.logout.bind(this)} >
				<span style = { style.logoutStyle }>Log Out</span>
			</div>
		);

		const guestLinks = (
			<div >
				<Link to = '/login' style = { style } >Sign In</Link>
				<Link to = '/register' style = { style }>Register</Link>
			</div>
		);

		const welcome = (
			<span style = { style } > hi { user.username }! </span>
		);

		return (

			<nav style = { style.grid } >
				<Link to = '/' >
					<img src= { logo } className= "App-logo" alt= "logo" />
				</Link>

				<div > { isAuthenticated ? welcome : '' }  </div>

				<Link to = '/' style = { style }>
					<p > Home </p>
				</Link>

				<Link to = '/todos' style = { style }>
					<nav onClick = { this.onClick.bind(this) }> Todos </nav>
				</Link>

				{ isAuthenticated ? userLinks : guestLinks }
			</nav>
		);
	}
}

// +++++++++ PROPS  +++++++++ 

NavBar.propTypes = {
	authApi: PropTypes.object.isRequired,
	logout: PropTypes.func.isRequired,
	placement: PropTypes.string,
	fetchTodos: PropTypes.func.isRequired
};

NavBar.contextTypes = {
	router: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
	return { 
		authApi: state.authApi,
		user: state.authApi
	};
};

export default connect(mapStateToProps, { logout, fetchTodos })(NavBar);