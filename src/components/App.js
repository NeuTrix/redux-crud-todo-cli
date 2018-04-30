// vendor
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
// custom
import './App.css';
import './App.grid.css';
import requireAuth from '../helpers/requireAuth';
import { createTodo } from '../actions/createActions';
import { deleteTodo } from '../actions/deleteActions';
import { editTodo } from '../actions/editActions';
import { fetchTodos } from '../actions/readActions';

import FlashMessageList from './messages/FlashMessageList';
import NavBar from './main/NavBar';
import Home from './main/Home';
import LoginPage from './auth/LoginPage';
import RegisterPage from './auth/RegisterPage';

import TaskCounter from './todos/TaskCounter';
import TodoForm from './todos/TodoForm';
import TodoList from './todos/TodoList';
import TodoPage from './todos/TodoPage';

// +++++++++ CSS +++++++++ 

const placement = {
	header: { gridArea: 'header',paddingBottom: 40 },
	status_bar: { gridArea: 'status_bar', margin: 10 },
	new_todo: { gridArea: 'new_todo'},
	main: { gridArea: 'main', paddingBottom: 50 },
}

// +++++++++ COMPONENT +++++++++ 

class App extends Component {

	componentDidMount() {
		if (this.props.isAuthenticated) { 
			return this.props.fetchTodos(); 
		}
	}

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
	createTodo:    		PropTypes.func.isRequired,
	deleteTodo:    		PropTypes.func.isRequired,
	fetchTodos:    		PropTypes.func.isRequired,
	isAuthenticated: 	PropTypes.bool,
	todoArray: 				PropTypes.array.isRequired,
	user: 						PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
	return {
		isAuthenticated: 	state.authApi.isAuthenticated,
		todoArray: 				state.todos,
		user: 						state.authApi.user,
	};
}; 

const mapDispatchToProps = (dispatch) => {
	return {
		createTodo: (task) => { dispatch (createTodo (task)); },
		deleteTodo: (_id) => { dispatch (deleteTodo (_id)); },
		editTodo: (_id, task) => { dispatch (editTodo (_id, task)); },
		fetchTodos: () => 		{ dispatch(fetchTodos()); },
	};
}; 

export default connect (mapStateToProps, mapDispatchToProps) (App);
