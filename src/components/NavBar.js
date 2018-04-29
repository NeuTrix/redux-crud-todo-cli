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
			<div id= 'logout' onClick= { this.logout.bind(this)} >
				<span >Log Out</span>
			</div>
		);

		const guestLinks= (
			<div>
				<div id= 'login' >
					<Link to= '/login' >Sign In</Link>
				</div>
				<div id= 'register' >
					<Link to= '/register' >Register</Link>
				</div>
			</div>
		);

		const welcome= (
			<div   > hi { user.username }! </div>
		);

		return (

			<nav id= 'NavBar'  >

				<div id= 'logo' >
					<Link to= '/' >
						<img src= { logo } className= "App-logo" alt= "logo" />
					</Link>
				</div>

				<div id= 'welcome' > { isAuthenticated ? welcome : '' }  </div>

				<div id= 'home' >
					<Link to= '/' >
						<p > Home </p>
					</Link>
				</div>

				<div id= 'todos' >
					<Link to= '/todos' >
						<nav onClick= { this.onClick.bind(this) }> Todos </nav>
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