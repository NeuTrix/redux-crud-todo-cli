import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import { createTodo } from '../../actions/createActions';
import { deleteTodo } from '../../actions/deleteActions';
import { editTodo } from '../../actions/editActions';
import { fetchTodos } from '../../actions/readActions';
import TaskCounter from './TaskCounter';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const propTypes = {
	classes: PropTypes.instanceOf(Object).isRequired, // MUI classes object from withStyles
	handleCreateTodo: PropTypes.func.isRequired, // create a new todo
	handleDeleteTodo: PropTypes.func.isRequired, // delete a todo item
	handleEditTodo: PropTypes.func.isRequired, // edit a todo item
	handleFetchTodos: PropTypes.func.isRequired, // fetch new todos
	isAuthenticated: PropTypes.bool.isRequired, // validate authentication
	todoArray: PropTypes.arrayOf(PropTypes.object).isRequired, // collect todos in array
	user: PropTypes.instanceOf(Object).isRequired, // user profile
};

const mapStateToProps = state => ({
	isAuthenticated: state.authApi.isAuthenticated,
	todoArray: state.todos,
	user: state.authApi.user,
});

const mapDispatchToProps = dispatch => ({
	handleCreateTodo: (task) => { dispatch(createTodo(task)); },
	handleDeleteTodo: (_id) => { dispatch(deleteTodo(_id)); },
	handleEditTodo: (_id, task) => { dispatch(editTodo(_id, task)); },
	handleFetchTodos: () => { dispatch(fetchTodos()); },
});

class TodoPage extends Component {

	componentDidMount() {
		const { isAuthenticated, handleFetchTodos } = this.props;
		return (isAuthenticated ? handleFetchTodos() : '');
	}

	render() {
		const {
			classes, // from MUI for styling
			handleCreateTodo,
			handleDeleteTodo,
			handleEditTodo,
			handleFetchTodos,
			todoArray,
			user,
		} = this.props;

		return (
			<div className={classes.grid}>
				<div className={classes.taskCounter}>
					<TaskCounter
						fetchTodos={handleFetchTodos}
						todos={todoArray}
					/>
				</div>

				<div className={classes.todoForm}>
					<TodoForm
						createTodo={handleCreateTodo}
						owner={user._id}
					/>
				</div>

				<div className={classes.todoList}>
					<TodoList
						deleteTodo={handleDeleteTodo}
						editTodo={handleEditTodo}
						todoArray={todoArray}
					/>
				</div>

			</div>
		);
	}
}

const styles = {
	grid: {
		display: 'grid',
		gridAutoRows: 'auto',
		gridTemplateAreas: `
      "taskCounter"
      "todoForm"
      "todoList"
    `,
	},
	taskCounter: {
		gridArea: 'taskCounter',
		marginBottom: 25,
	},

	todoForm: {
		gridArea: 'todoForm',
	},

	todoList: {
		gridArea: 'todoList',
	},
};

TodoPage.propTypes = propTypes; // connect prop-types validation

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TodoPage));
