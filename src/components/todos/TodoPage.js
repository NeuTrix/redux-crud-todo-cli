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



class TodoPage extends Component {
	componentDidMount() {
		const { isAuthenticated, handleFetchTodos } = this.props;
		return (isAuthenticated ? handleFetchTodos() : '');
	}

	render() {
		const {
			classes,
			handleCreateTodo,
			handleDeleteTodo,
			handleEditTodo,
			handleFetchTodos,
			todoArray,
			user,
		} = this.props;

		return (
			<div className={classes.grid}>
				<TaskCounter
					className={classes.taskCounter}
					fetchTodos={handleFetchTodos}
					todos={todoArray}
				/>
				<TodoForm
					className={classes.todoForm}
					createTodo={handleCreateTodo}
					owner={user.id}
				/>
				<TodoList
					className={classes.todoList}
					deleteTodo={handleDeleteTodo}
					editTodo={handleEditTodo}
					todoArray={todoArray}
				/>
			</div>
		);
	}
}


const mapStateToProps = state => ({
	isAuthenticated: state.authApi.isAuthenticated,
	todoArray: state.todos,
	user: state.authApi.user,
});

const mapDispatchToProps = dispatch => ({
	handleCreateTodo: (task) => { dispatch(createTodo(task)); },
	handleDeleteTodo: (id) => { dispatch(deleteTodo(id)); },
	handleEditTodo: (id, task) => { dispatch(editTodo(id, task)); },
	handleFetchTodos: () => { dispatch(fetchTodos()); },
});

const StyledTodoPage = withStyles(() => ({
	grid: {
		display: 'grid',
		gridTemplateAreas: `
			"taskCounter"
			"todoForm"
			"todoList"
		`,
		gridAutoRows: 'auto',
		marginTop: '10px',
	},
	taskCounter: { gridArea: 'taskCounter' },
	todoForm: { gridArea: 'todoForm' },
	todoList: { gridArea: 'todoList' },
}))(TodoPage);

const propTypes = {
	classes: PropTypes.instanceOf(Object).isRequired, // MUI classes object from withStyles
	handleCreateTodo: PropTypes.func.isRequired,
	handleDeleteTodo: PropTypes.func.isRequired,
	handleEditTodo: PropTypes.func.isRequired,
	handleFetchTodos: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool.isRequired,
	todoArray: PropTypes.arrayOf(PropTypes.string).isRequired,
	user: PropTypes.instanceOf(Object).isRequired,
};

TodoPage.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(StyledTodoPage);
