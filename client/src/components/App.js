
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Grid,Row } from 'react-bootstrap';

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
	toggleTodo,
	updateDate,
	updateTodo,
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
				
				<p> Todays Date: { Date() } </p>
				
				<TodoForm 
					addTodo = { this.props.addTodo }
				/>

				<TodoList 
					todoArray=  { this.props.todoArray }
					removeTodo= { this.props.removeTodo }
					toggleTodo= { this.props.toggleTodo }
					updateDate= { this.props.updateDate }
					updateRank= { this.props.updateRank }
					updateTodo= { this.props.updateTodo }
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
		toggleTodo: (id) => {
			dispatch(toggleTodo(id));
		},
		updateDate: (id, date) => {
			dispatch(updateDate(id, date));
		},
		updateRank: (id, rank) => {
			dispatch(updateRank(id,rank));
		},
		updateTodo: (id, task) => {
			dispatch(updateTodo(id,task));
		},
	};
}; // end const

// ===========================================================

App.propTypes = { 
	addTodo:    PropTypes.func.isRequired,
	removeTodo: PropTypes.func.isRequired,
	todoArray: PropTypes.array.isRequired,
	toggleTodo: PropTypes.func.isRequired,
	updateDate: PropTypes.func.isRequired,
	updateRank: PropTypes.func.isRequired,
	updateTodo: PropTypes.func.isRequired,
};

App.defaultProps ={
	addTodo: f=>f,
	removeTodo: f=>f,
	toggleTodo: f=>f,
	updateDate: f=>f,
	updateRank: f=>f,
	updateTodo: f=>f,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
