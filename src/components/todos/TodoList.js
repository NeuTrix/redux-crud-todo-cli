import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { withStyles } from '@material-ui/core/styles';
import TodoItem from './TodoItem';

const propTypes = {
	classes: PropTypes.instanceOf(Object).isRequired,
	deleteTodo: PropTypes.func.isRequired,
	editTodo: PropTypes.func.isRequired,
	todoArray: PropTypes.array.isRequired,
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
		const _todoArray = this.state.todoArray;
		const { classes } = this.props;

		const todos = _todoArray.map(item => (
			<TodoItem
				key={shortid.generate()}
				item={item}
				deleteTodo={this.props.deleteTodo}
				editTodo={this.props.editTodo}
			/>
		));

		return (
			<div className={classes.list}>
				{ todos.reverse() }
			</div>
		);
	}
}

const styles = theme => ({
	list: {
		display: 'inline-grid',
		gridTemplateAreas: `
			" todoItems "
		`,
		gridTemplateColumns: '1fr',
		gridRowGap: '10px', 
	}
});

TodoList.propTypes = propTypes;

export default withStyles(styles)(TodoList);
