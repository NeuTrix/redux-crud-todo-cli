import React, { Component } from 'react';
import shortid from 'shortid';
import styled from 'styled-components';
// custom
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

// +++++++++ CSS +++++++++

const Grid = styled.div`
	display: grid;
	grid-template-areas: " todoItems ";
	grid-template-columns: 1fr;
	grid-template-rows: auto;
	grid-row-gap: 10px;
`;

// +++++++++ COMPONENT  +++++++++

class TodoList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			todoArray: this.props.todoArray,
		};
	}

	componentWillReceiveProps(newProps) {
		this.setState({ todoArray: newProps.todoArray });
	}

	render() {
		const _todoArray = this.state.todoArray;

		const todos = _todoArray.map(item => (
			<TodoItem
				key={shortid.generate()}
				item={item}
				deleteTodo={this.props.deleteTodo}
				editTodo={this.props.editTodo}
			/>
		));

		return (
			<Grid
				className={`TodoList ${this.props.className} `}
			>
				{ todos.reverse() }
			</Grid>
		);
	}
}

// +++++++++ PROPS +++++++++

TodoList.propTypes = {
	todoArray: PropTypes.array.isRequired,
	deleteTodo: PropTypes.func.isRequired,
	editTodo: PropTypes.func.isRequired,
};

TodoList.defaultProps = {
	todoArray: [],
	deleteTodo: f => alert('default function.  check component props'),
	editTodo: f => alert('default function.  check component props'),
};

export default TodoList;
