import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { withStyles } from '@material-ui/core/styles';
import TodoItem from './TodoItem';

const propTypes = {
	classes: PropTypes.instanceOf(Object).isRequired,
	deleteTodo: PropTypes.func.isRequired,
	editTodo: PropTypes.func.isRequired,
	todoArray: PropTypes.instanceOf(Array).isRequired,
};

class TodoList extends Component {

	constructor(props) {
		super(props);
		const { todoArray } = this.props;
		this.state = {
			todoArray: todoArray || [],
		};
	}

	componentWillReceiveProps(newProps) {
		this.setState({ todoArray: newProps.todoArray });
	}

	render() {
		const { todoArray } = this.state;
		const { classes, deleteTodo, editTodo } = this.props;

		// generate list of today items for display
		const todos = todoArray.map(item => (
			<TodoItem
				key={shortid.generate()}
				item={item}
				deleteTodo={deleteTodo}
				editTodo={editTodo}
			/>
		));

		return (
			<div className={classes.grid}>
				{ todos.reverse() }
			</div>
		);
	}
}

const styles = {
	grid: {
		display: 'inline-grid',
		gridRowGap: '10px',
		gridTemplateAreas: `
			" todoItems "
		`,
		gridTemplateColumns: '1fr',
		width: '100%',
	},
};

TodoList.propTypes = propTypes;

export default withStyles(styles)(TodoList);
