
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Col, Grid,Row } from 'react-bootstrap';

import logo from '../assets/logo.svg';
import './App.css';
import PropTypes from 'prop-types';

// ============ COMPONENTS ============ 
// import { Button, Row, Col } from 'react-bootstrap'
import TodoList from '../components/TodoList';
import TodoForm from '../containers/TodoForm';

// ============ FUNCTIONS ============ 
import { 
	addTodo, 
	removeTodo,
	toggleComplete,
	updateDate,
	updateTask,
	updateRank,
} from '../actions/todoActions';
  
// ===================================
class App extends Component {

	// constructor(props) {
	//   super(props)
	// }
	
	render() {

		return (
			<div className="App">
	
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">React/Redux Todo List</h1>
				</header>
				
				<p> Todays Date: { new Date().toDateString() } </p>
				
				<TodoForm 
					addTodo = { this.props.addTodo }
				/>

				<TodoList 
					todoArray=  { this.props.todoArray }
					removeTodo= { this.props.removeTodo }
					toggleComplete= { this.props.toggleComplete }
					updateDate= { this.props.updateDate }
					updateRank= { this.props.updateRank }
					updateTask= { this.props.updateTask }
				/>

			</div>
		);
	}
} // end Class

// ===========================================================

const mapStateToProps = (state) => {
	return {
		todoArray: state.todos
	};
}; // end const

const mapDispatchToProps = (dispatch) => {
	return {
		addTodo: (task) => {
			dispatch(addTodo(task));
		},
		removeTodo: (id) => {
			dispatch(removeTodo(id));
		},
		toggleComplete: (id) => {
			dispatch(toggleComplete(id));
		},
		updateDate: (id, date) => {
			dispatch(updateDate(id, date));
		},
		updateRank: (id, rank) => {
			dispatch(updateRank(id,rank));
		},
		updateTask: (id, task) => {
			dispatch(updateTask(id,task));
		},
	};
}; // end const

// ===========================================================

App.propTypes = { 
	addTodo:    PropTypes.func.isRequired,
	removeTodo: PropTypes.func.isRequired,
	todoArray: PropTypes.array.isRequired,
	toggleComplete: PropTypes.func.isRequired,
	updateDate: PropTypes.func.isRequired,
	updateRank: PropTypes.func.isRequired,
	updateTask: PropTypes.func.isRequired,
};

App.defaultProps ={
	addTodo: f=>f,
	removeTodo: f=>f,
	toggleComplete: f=>f,
	updateDate: f=>f,
	updateRank: f=>f,
	updateTask: f=>f,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
