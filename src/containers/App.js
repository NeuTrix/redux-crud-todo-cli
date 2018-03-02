import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../containers/TodoList';
import TodoForm from '../components/TodoForm';
import Header from '../components/Header';
import { connect } from 'react-redux';
import { createTodo } from '../actions/createActions';
import { BrowserRouter as Router } from 'react-router-dom';
import { startState } from '../actions/readActions';

class App extends Component {
	
	componentDidMount() {
		this.props.startApp();
	}

	render() {
		return (
			<Router>
				<div className="App">
					<Header/>					
					<TodoForm 
						createTodo = { this.props.createTodo } 
					/>
					<TodoList todoArray = { this.props.todoArray } />
				</div>
			</Router>
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
