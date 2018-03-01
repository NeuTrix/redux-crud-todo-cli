import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../containers/TodoList';
import TodoForm from '../components/TodoForm';
import Header from '../components/Header';
import { connect } from 'react-redux';
import { createTodo } from '../actions/createActions';
import { BrowserRouter as Router } from 'react-router-dom'
import { startState } from '../actions/readActions'

class App extends Component {
	
	componentDidMount() {
		this.props.startApp(this.props.api)
	}

	render() {
		return (
			<Router>
				<div className="App">
					<Header/>					
					<TodoForm 
						createTodo = { this.props.createTodo } 
						api = { this.props.api }
					/>
					<TodoList todoArray = { this.props.todoArray } />
				</div>
			</Router>
		);
	}
} 

App.propTypes = { 
	api:    PropTypes.string.isRequired,
	createTodo:    PropTypes.func.isRequired,
	todoArray: 	PropTypes.array.isRequired
};

App.defaultProps ={
 	api: 'https://redux-todo-api.herokuapp.com/api/todos',
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
		createTodo: (api, task) => { dispatch(createTodo(api, task)) },
		startApp: (url) => { dispatch(startState(url)) }
	};
}; 

export default connect(mapStateToProps, mapDispatchToProps)(App);
