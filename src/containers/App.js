import React, { Component } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import image from '../assets/futureBack.png';
import './App.css';

import AboutPage from '../components/AboutPage';
import FlashMessageList from '../components/flash/FlashMessageList';
import Header from '../containers/Header';
import HomePage from '../components/HomePage';
import LoginPage from '../components/auth/LoginPage';
import RegisterPage from '../components/auth/RegisterPage';
import TaskCounter from '../components/TaskCounter';
import TodoList from '../containers/TodoList';
import TodoForm from '../components/TodoForm';
import requireAuth from '../helpers/requireAuth';

import { connect } from 'react-redux';
import { createTodo } from '../actions/createActions';
import { Route } from 'react-router-dom';
import { fetchTodos } from '../actions/readActions';
import { Col, Grid, Row } from 'react-bootstrap';

// +++++++++ CSS  +++++++++ 

const gridStyle = {
	display: 'grid',
	gridTemplateAreas: ' "header" "message" "counter" "new_todo"  "main" ',
	gridTemplateColumn: '1fr',
	gridTemplateRows: 'auto',
}

const placement = {
	header: { gridArea: 'header',paddingBottom: 60 },
	message: { gridArea: 'message', margin: 10 },
	counter: { gridArea: 'counter' },
	new_todo: { gridArea: 'new_todo'},
	main: { gridArea: 'main', paddingBottom: 50 },
}

// +++++++++  COMPONENT +++++++++ 

class App extends Component {

	componentDidMount() {
		if (this.props.isAuthenticated) { 
			return this.props.fetchTodos(); 
		}
	}

	render() {

		const authTodoList = ( 
			requireAuth ( ReactDom.render = (props) => 
				<TodoList todoArray = { this.props.todoArray } /> 
			)
		)


		return (
			<div className = 'App'  id = 'app_grid' style = { gridStyle } >

				<div id = 'app_message' style = { placement.message } >
					<FlashMessageList />
				</div>

				<div id = 'app_header'  style = { placement.header } >
					<Route  path = '/' component = { Header } />
				</div>

				<div id = 'app_new_todo' style = { placement.new_todo } >
					<Route exact path = '/todos' render = { props =>
						<TodoForm 
							createTodo = { this.props.createTodo } 
							owner = { this.props.user._id }
						/> 
					}/>
				</div>

				<div id = 'app_main' style = { placement.main } >
					<Route exact path = '/' component = { HomePage } />
					<Route path = '/about' component = { AboutPage } />
					<Route path = '/login' component = { LoginPage } />
					<Route path = '/register' component = { RegisterPage } />
					<Route exact path = '/todos' component = { authTodoList }/>
				</div>

				<div id = 'app_task_count' style = { placement.counter } >
					<Route exact path = '/todos' render = { props =>
						<TaskCounter 
							todos = { this.props.todoArray } 
							fetchTodos = { this.props.fetchTodos } 
						/>  } 
				 />
				</div>

			</div>
		);
	}
} 

// +++++++++   +++++++++ 

App.propTypes = { 
	createTodo:    PropTypes.func.isRequired,
	fetchTodos:    PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
	todoArray: 	PropTypes.array.isRequired,
	user: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.authApi.isAuthenticated,
		todoArray: state.todos,
		user: state.authApi.user,
	};
}; 

const mapDispatchToProps = (dispatch) => {
	return {
		createTodo: (task) => { dispatch (createTodo (task)); },
		fetchTodos: () => { dispatch(fetchTodos()); }
	};
}; 

export default connect(mapStateToProps, mapDispatchToProps)(App);
