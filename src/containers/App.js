import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import TodoList from '../containers/TodoList';
import TodoForm from '../components/TodoForm';
import Header from '../components/Header';

import { addTodo } from '../actions/todoActions';
import { createTodo } from '../actions/createActions';
import { BrowserRouter as Router } from 'react-router-dom'

import { startState } from '../actions/Read-Actions'

// ========= 

class App extends Component {
	
	componentDidMount() {
		const api = 'https://redux-todo-api.herokuapp.com/api/todos'
		this.props.startApp(api)
	}

	render() {
		return (
			<Router>
				<div className="App">
					<Header/>					
					<TodoForm addTodo = { this.props.addTodo } />
					<TodoList todoArray=  { this.props.todoArray } />
				</div>
			</Router>
		);
	}
} 

// ========= Props ========= 

App.propTypes = { 
	addTodo:    PropTypes.func.isRequired,
	todoArray: 	PropTypes.array.isRequired
};

App.defaultProps ={
	addTodo: f=>f,
	todoArray: []
};

// ========= Store  ========= 

const mapStateToProps = (state) => {
	return {
		todoArray: state.todos
	};
}; 

const mapDispatchToProps = (dispatch) => {
	return {
		addTodo: (task) => { dispatch(addTodo(task)) },
		startApp: (url) => { dispatch(startState(url)) }
	};
}; 

export default connect(mapStateToProps, mapDispatchToProps)(App);
