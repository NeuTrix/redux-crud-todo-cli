// vendor
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
// custom
import './App.grid.css';
import './material.css';
import requireAuth from '../helpers/requireAuth';

import FlashMessageList from './messages/FlashMessageList';
import NavBar from './main/NavBar';
import Home from './main/Home';
import LoginPage from './auth/LoginPage';
import RegisterPage from './auth/RegisterPage';
import TodoPage from './todos/TodoPage';

// +++++++++ COMPONENT +++++++++ 

class App extends Component {

	render() {
		return (
			<div className = 'App wrapper' >

				<NavBar/>
				<FlashMessageList />

				<Route exact path = '/' component = { Home } />
				<Route path = '/login' component = { LoginPage } />
				<Route path = '/register' component = { RegisterPage } />
				<Route 
					exact path = '/todos' 
					component = { requireAuth( ReactDom.render = props => 
						<TodoPage/> 
					)}
				/>
			</div>
		);
	}
} 

// +++++++++ PROPS +++++++++ 

App.propTypes = { 
	isAuthenticated: 	PropTypes.bool,
	user: 						PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
	return {
		isAuthenticated: 	state.authApi.isAuthenticated,
		user: 						state.authApi.user,
	};
}; 

export default connect (mapStateToProps) (App);
