import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../containers/TodoList';
import TodoForm from '../components/TodoForm';
import Header from '../components/Header';
import Login from '../components/auth/Login';
import RegisterPage from '../components/auth/RegisterPage';
import { connect } from 'react-redux';
import { createTodo } from '../actions/createActions';
import { Route } from 'react-router-dom';
import { Col, Grid, Row } from 'react-bootstrap'
import { startState } from '../actions/readActions';
import FlashMessageList from '../components/flash/FlashMessageList'

class App extends Component {

	componentDidMount() {
		this.props.startApp()
	}	

	render() {
		
		const HomePage = (
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
					<Route exact path = '/' render = { (props) => HomePage } />
					<Route path = '/login' component = { Login } />
					<Route path = '/register' component = { RegisterPage } />
					</Col>
				</Row>
				
					{ this.props.children }
			</Grid>
		);
	}
} 

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
		startApp: () => { dispatch(startState()); }
	};
}; 

export default connect(mapStateToProps, mapDispatchToProps)(App);
