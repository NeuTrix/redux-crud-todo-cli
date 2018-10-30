// vendor
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
// custom
import { createTodo } from '../../actions/createActions';
import { deleteTodo } from '../../actions/deleteActions';
import { editTodo } from '../../actions/editActions';
import { fetchTodos } from '../../actions/readActions';

import TaskCounter from './TaskCounter';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

// +++++++++ CSS +++++++++

const Grid = styled.div`
	
`;

const Counter = styled(TaskCounter)`
	grid-area: count;
`;

const NewItem = styled(TodoForm)`
	grid-area: new;
`;

const List = styled(TodoList)`
	grid-area: list;
`;



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
			<Grid className={classes.grid}>
				<Counter
					fetchTodos={handleFetchTodos}
					todos={todoArray}
				/>
				<NewItem
					createTodo={handleCreateTodo}
					owner={user.id}
				/>
				<List
					deleteTodo={handleDeleteTodo}
					editTodo={handleEditTodo}
					todoArray={todoArray}
				/>
			</Grid>
		);
	}
}

TodoPage.propTypes = {
	handleCreateTodo: PropTypes.func.isRequired,
	handleDeleteTodo: PropTypes.func.isRequired,
	handleEditTodo: PropTypes.func.isRequired,
	handleFetchTodos: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool.isRequired,
	todoArray: PropTypes.arrayOf(PropTypes.string).isRequired,
	user: PropTypes.instanceOf(Object).isRequired,
};

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

const StyledTodoPage = withStyles((theme) => ({
	grid: {
		display: "grid",
		gridTemplateAreas:`
			"count"
			"new"
			"list"
		`,
		gridAutoRows: "auto",
		marginTop: "10px",
	}
}))(TodoPage)

export default connect(mapStateToProps, mapDispatchToProps)(StyledTodoPage);
