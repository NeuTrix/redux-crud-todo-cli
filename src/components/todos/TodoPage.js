// vendor
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// custom
import './TodoPage.grid.css';
import { createTodo } from '../../actions/createActions';
import { deleteTodo } from '../../actions/deleteActions';
import { editTodo } from '../../actions/editActions';
import { fetchTodos } from '../../actions/readActions';

import TaskCounter from './TaskCounter';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

// +++++++++ CSS +++++++++ 

const placement = {
	header: { gridArea: 'header',paddingBottom: 40 },
	status_bar: { gridArea: 'status_bar', margin: 10 },
	new_todo: { gridArea: 'new_todo'},
	main: { gridArea: 'main', paddingBottom: 50 },
}

// +++++++++ COMPONENT +++++++++ 

class TodoPage extends Component {

	componentDidMount() {
		if (this.props.isAuthenticated) { 
			return this.props.fetchTodos(); 
		}
	}

	render() {
		return (
			<div className = 'TodoPage' >
				
				<div id = 'app_task_count' style = { placement.status_bar } >
						<TaskCounter 
							todos = { this.props.todoArray } 
							fetchTodos = { this.props.fetchTodos } 
						/>  
				</div>

				<div id = 'app_new_todo' style = { placement.new_todo } >
						<TodoForm 
							createTodo = { this.props.createTodo } 
							owner = { this.props.user._id }
						/> 
				</div>

				<div>
						<TodoList 
							todoArray = { this.props.todoArray }
							deleteTodo = { this.props.deleteTodo }	
							editTodo = { this.props.editTodo }	
						/>
				</div>
			</div>
		);
	}
} 

// +++++++++ PROPS +++++++++ 

TodoPage.propTypes = { 
	createTodo:    		PropTypes.func.isRequired,
	deleteTodo:    		PropTypes.func.isRequired,
	fetchTodos:    		PropTypes.func.isRequired,
	isAuthenticated: 	PropTypes.bool,
	todoArray: 				PropTypes.array.isRequired,
	user: 						PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
	return {
		isAuthenticated: 	state.authApi.isAuthenticated,
		todoArray: 				state.todos,
		user: 						state.authApi.user,
	};
}; 

const mapDispatchToProps = (dispatch) => {
	return {
		createTodo: (task) => { dispatch (createTodo (task)); },
		deleteTodo: (_id) => { dispatch (deleteTodo (_id)); },
		editTodo: (_id, task) => { dispatch (editTodo (_id, task)); },
		fetchTodos: () => 		{ dispatch(fetchTodos()); },
	};
}; 

export default connect (mapStateToProps, mapDispatchToProps) (TodoPage);
