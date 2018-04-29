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
import NavBar from './NavBar';
import Home from './Home';
import LoginPage from './auth/LoginPage';
import RegisterPage from './auth/RegisterPage';

import TaskCounter from './todos/TaskCounter';
import TodoList from './todos/TodoList';
import TodoForm from './todos/TodoForm';

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
			<div className = 'App wrapper'  id = 'app_grid'>

				<div id = 'app_status_bar' style = { placement.status_bar } >
					<FlashMessageList />
				</div>

				<div id = 'app_header'  style = { placement.header } >
					<Route  path = '/' component = { NavBar } />
				</div>

				<div id = 'app_new_todo' style = { placement.new_todo } >
					<Route exact path = '/todos' render = { props =>
						<TodoForm 
							createTodo = { this.props.createTodo } 
							owner = { this.props.user._id }
						/> 
					} />
				</div>

				<div id = 'app_main' style = { placement.main } >
					<Route exact path = '/' component = { Home } />
					<Route path = '/login' component = { LoginPage } />
					<Route path = '/register' component = { RegisterPage } />
					<Route exact path = '/todos' component = { 
						requireAuth ( ReactDom.render = props => 
						<TodoList 
							todoArray = { this.props.todoArray }
							deleteTodo = { this.props.deleteTodo }	
							editTodo = { this.props.editTodo }	
						/>)
					} />
				</div>

				<div id = 'app_task_count' style = { placement.status_bar } >
					<Route exact path = '/todos' render = { props =>
						<TaskCounter 
							todos = { this.props.todoArray } 
							fetchTodos = { this.props.fetchTodos } 
						/>  
					} />
				</div>
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
