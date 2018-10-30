// vendor
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
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
	/* mobile view */

	display: grid;
	grid-template-areas: 
		" count "
		" new "
		" list "
	;
	grid-auto-rows: auto;
	margin-top: 10px;
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
			handleCreateTodo,
			handleDeleteTodo,
			handleEditTodo,
			handleFetchTodos,
			todoArray,
			user,
		} = this.props;

		return (
			<Grid className="TodoPage">
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

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
