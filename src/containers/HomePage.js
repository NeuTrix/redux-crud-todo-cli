import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../assets/logo.svg';
import './HomePage.css';
import PropTypes from 'prop-types';
import TodoList from '../containers/TodoList';
import TodoForm from '../components/TodoForm';
import { addTodo } from '../actions/todoActions';

// import { startState } from '../actions/apiActions'

// ========= 

class HomePage extends Component {
	
	// componentDidMount() {
	// 	const api = 'https://redux-todo-api.herokuapp.com/api/todos'
	// 	this.props.startApp(api)
	// 	console.log('it mounted!');
	// }

	render() {
		return (
			<div className="HomePage">
	
				<header className="HomePage-header">
					<img src={logo} className="HomePage-logo" alt="logo" />
					<h1 className="HomePage-title">
						React/Redux Todo (LocalStorage)
					</h1>
				</header>
				
				<p> Todays Date: { new Date().toDateString() } </p>
				
				<TodoForm addTodo = { this.props.addTodo } />

				<TodoList todoArray=  { this.props.todoArray } />

			</div>
		);
	}
} 

// ========= Props ========= 

HomePage.propTypes = { 
	addTodo:    PropTypes.func.isRequired,
	todoArray: 	PropTypes.array.isRequired
};

HomePage.defaultProps ={
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
