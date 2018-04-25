import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../components/TodoItem';
import shortid from 'shortid';

const style = {
	display: 'grid',
	gridTemplateColumns: '1fr',
	gridTemplateRows: 'auto',
	gridRowGap: 5,
}

class TodoList extends Component {
	
	constructor (props) {
		super(props);
		this.state = { 
			todoArray: this.props.todoArray			
		};
	}

	componentWillReceiveProps (newProps) {
		this.setState({ todoArray: newProps.todoArray });
	}

	render() {
		let _todoArray = this.state.todoArray; 
		
		let todos = _todoArray.map (item => {
			return <TodoItem 
				key = { shortid.generate() } 
				item = { item } 
				deleteTodo = { this.props.deleteTodo }
				editTodo = { this.props.editTodo }
			/>;
		});

		return (
			<div className = 'todoItems' style = { style } >
					{ todos.reverse() } 
			</div>
		);
	}
} 

// +++++++++   +++++++++ 

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
