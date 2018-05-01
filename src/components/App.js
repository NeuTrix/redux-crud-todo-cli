// vendor
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import styled from 'styled-components'
// custom
// import './App.grid.css';
import './material.css';
import requireAuth from '../helpers/requireAuth';
import { logout } from '../actions/loginActions';

import FlashMessageList from './messages/FlashMessageList';
import NavBar from './main/NavBar';
import Home from './main/Home';
import LoginPage from './auth/LoginPage';
import RegisterPage from './auth/RegisterPage';
import TodoPage from './todos/TodoPage';

// +++++++++ COMPONENT +++++++++

const App = (props) => {

	const Grid_ = styled.div`
		display: grid;
		grid-template-areas:   
			" header " 
			" messages "  
			" main "  
		;
		grid-template-columns: 1fr;
		/*grid-template-rows: auto;*/
		grid-gap: 10px;
		padding: 0px 10px 0px 10px;
	`; 

	const Header_ = styled.div `
		grid-area: header;
		margin-bottom: 40px;
	`;

	const Messages_ = styled.div `
		grid-area: messages;
	`;

	const Main_ = styled.div `
		grid-area: main;
	`;

	return (

		<Grid_ className = 'App ' >

			<Header_ className= '_header' > 
				<NavBar 
					authApi= { props.authApi } 
					logout= { props.logout }
				/> 
			</Header_>

			<Messages_ className= '_messages'>
				<FlashMessageList/>
			</Messages_>
			
			<Main_ className= '_main'>
				<Route exact path = '/' component = { Home } />
				<Route path = '/login' component = { LoginPage } />
				<Route path = '/register' component = { RegisterPage } />
				<Route 
					exact path = '/todos' 
					component = { requireAuth( ReactDom.render = props => 
						<TodoPage/> 
					)}
				/>
			</Main_>
		</Grid_>
	);
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
		logout: () => { dispatch (logout ()); }, 
	};
};

export default connect (mapStateToProps, mapDispatchToProps)(App);