// vendor
import './NavBar.css'; 
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// +++++++++   +++++++++ 
import { connect } from 'react-redux';
// custom
import logo from '../assets/logo.svg';

import { fetchTodos } from '../actions/readActions';
import { logout } from '../actions/loginActions';

// +++++++++  CSS  +++++++++ 

const style = {

	navbox: {
		height: '3em',

	},

	welcome: {
		color:'steelblue',
		justifyContent: 'left',
	}
}



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

		const { isAuthenticated, user }= this.props.authApi;

		const userLinks= (
			<div 
				id= 'logout_link' 
				className= 'ctr' 
				onClick= { this.logout.bind(this)} >
				<span >Log Out</span>
			</div>
		);

		const guestLinks= (
			<div>
				<div id= 'login_link' className= 'ctr'>
					<Link to= '/login' >Sign In</Link>
				</div>
				<div id= 'register_link' className= 'ctr'>
					<Link to= '/register' >Register</Link>
				</div>
			</div>
		);

		const welcome= (
			<div style= { style.welcome } > {`Welcome ${ user.username }!`} </div>
		);

		return (

			<nav className= 'engrBox paper' id= 'NavGrid' style= {style.navbox} >

				<div id= 'logo_link' className= 'ctr'>
					<Link to= '/' >
						<div className= "engr App-logo ctr fa fa-gg fa-2x" alt= "logo" />
					</Link>
				</div>

				<div id= 'welcome_link' className= 'ctr'> 
					{ isAuthenticated ? welcome : '' }  
				</div>

				<div id= 'home_link' className= 'ctr' >
					<Link to= '/' > Home </Link>
				</div>

				<div id= 'todos_link' className= 'ctr'>
					<Link to= '/todos' >
						<span onClick= { this.onClick.bind(this) }> Todos </span>
					</Link>
				</div>

					{ isAuthenticated ? userLinks : guestLinks }

			</nav>
		);
	}
}

// +++++++++ PROPS  +++++++++ 

NavBar.propTypes= {
	authApi: PropTypes.object.isRequired,
	logout: PropTypes.func.isRequired,
	placement: PropTypes.string,
	fetchTodos: PropTypes.func.isRequired
};

NavBar.contextTypes= {
	router: PropTypes.object.isRequired,
};

const mapStateToProps= (state) => {
	return { 
		authApi: state.authApi,
		user: state.authApi
	};
};

export default connect(mapStateToProps, { logout, fetchTodos })(NavBar);