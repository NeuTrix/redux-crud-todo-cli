import React, { Component } from 'react';
import ReactDom from 'react-dom'
import PropTypes from 'prop-types';

import AdminPage from '../components/auth/AdminPage';
import FlashMessageList from '../components/flash/FlashMessageList'
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import LoginPage from '../components/auth/LoginPage';
import RegisterPage from '../components/auth/RegisterPage';
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
		this.props.readTodos()
	}	

	render() {
		
		const TodosPage = (
			<Row >
				<TodoForm createTodo = { this.props.createTodo } />
				<TodoList todoArray = { this.props.todoArray } />
			</Row>
		)

		return (
			<Grid>
				<Row>
					<Route path = '/' component = { Header } />
				</Row>

				<Row style = { { paddingTop: 60 } } >
					<Col>
						<FlashMessageList/>
					</Col>

					<Col>
					<Route path = '/admin' component = { AdminPage } />
					<Route path = '/register' component = { RegisterPage } />
					<Route path = '/login' component = { LoginPage } />
					<Route exact path = '/' component = { HomePage } />
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

// +++++++++ ? this.props.children  +++++++++ 

App.propTypes = { 
	createTodo:    PropTypes.func.isRequired,
	todoArray: 	PropTypes.array.isRequired
};

App.defaultProps = {
	createTodo: f => f,
	todoArray: [ ]
};

const mapStateToProps = (state) => {
	return {
		todoArray: state.todos
	};
}; 

const mapDispatchToProps = (dispatch) => {
	return {
		createTodo: (task) => { dispatch (createTodo (task)); },
		readTodos: () => { dispatch(readTodos()); }
	};
}; 

export default connect(mapStateToProps, mapDispatchToProps)(App);
