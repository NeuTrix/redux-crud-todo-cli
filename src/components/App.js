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
import { logout } from '../actions/loginActions';

import FlashMessageList from './messages/FlashMessageList';
import NavBar from './main/NavBar';
import Home from './main/Home';
import LoginPage from './auth/LoginPage';
import RegisterPage from './auth/RegisterPage';
import TodoPage from './todos/TodoPage';

const style = {
	color: 'darkgrey',
}

// +++++++++ COMPONENT +++++++++ 

class App extends Component {

	render() {
		return (
			<div className = 'App App_wrapper' >

				<div className= 'header' > 
					<NavBar 
						authApi= { this.props.authApi } 
						logout= { this.props.logout }
					/> 
				</div>

				<div className= 'messages'>
					<FlashMessageList/>
				</div>
				
				<div className= 'main'>
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
			</div>
		);
	}
} 

// +++++++++ PROPS +++++++++ 

App.propTypes = { 
	authApi: 	PropTypes.object.isRequired,
	logout: 	PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
	return {
		authApi: 	state.authApi,
	};
}; 

const mapDispatchToProps = (dispatch) => {
	return { 
		logout: () => { dispatch (logout ()); } 
	};
};

export default connect (mapStateToProps, mapDispatchToProps)(App);
