import React, { Component } from 'react';
import ReactDom from 'react-dom'
import PropTypes from 'prop-types';

import AdminPage from '../components/auth/AdminPage';
import FlashMessageList from '../components/flash/FlashMessageList'
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
import { readTodos } from '../actions/readActions';
import { Col, Grid, Row } from 'react-bootstrap'

class App extends Component {

	componentDidMount() {
		this.props.readTodos();
	}

	render() {

	const style = {
		padding: 10,
	}
		
	const TodosPage = (
		<Row >
			<Col >
				<TaskCounter 
					todos = { this.props.todoArray } 
					readTodos = { this.props.readTodos } 
					/>
			</Col>
			<Col>
				<TodoForm 
					createTodo = { this.props.createTodo } 
					owner = { this.props.user._id }
				/>
			</Col>
			<Col>
				<TodoList 
					todoArray = { this.props.todoArray } 
				/>
			</Col>
		</Row>
	)

		return (

			<Grid >
				<Row>
					<Col xs = { 12 }  >
						<Route path = '/' component = { Header } />
					</Col>
				</Row>

				<Row style = { { paddingTop: 60 } } >

					<Col>
						<FlashMessageList/>
					</Col>
					
					<Col style = { style } >
						<Route exact path = '/' component = { HomePage } />
						<Route path = '/admin' component = { AdminPage } />
						<Route path = '/login' component = { LoginPage } />
						<Route path = '/register' component = { RegisterPage } />
						<Route 
							exact path = '/todos' 
							component = { requireAuth(ReactDom.render = (props) => TodosPage) } 
						/>
					</Col>

				</Row>
					{ this.props.children }
				
			</Grid>
		);
	}
} 

App.propTypes = { 
	createTodo:    PropTypes.func.isRequired,
	todoArray: 	PropTypes.array.isRequired,
	user: PropTypes.object.isRequired
};

App.defaultProps = {
	// createTodo: f => f,
	todoArray: [ ],
	user: "Default USER from APP.js"
};

const mapStateToProps = (state) => {
	return {
		todoArray: state.todos,
		user: state.authApi.user
	};
}; 

const mapDispatchToProps = (dispatch) => {
	return {
		createTodo: (task) => { dispatch (createTodo (task)); },
		readTodos: () => { dispatch(readTodos()); }
	};
}; 

export default connect(mapStateToProps, mapDispatchToProps)(App);
