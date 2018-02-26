// component to display the curret todo list
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Grid, Row } from 'react-bootstrap';

import TodoItem from '../components/TodoItem';
import TaskCounter from '../components/TaskCounter';

// ========= Component ========= 

class TodoList extends Component {

	render() {

		let todoArray = this.props.todoArray;

		let todos = todoArray.map(item => {
			return <TodoItem key = { item._id } item = { item } />;
		});

		return (
			<Grid >
				<Row className = 'todoItems' >
					<Col lg = { 12 } >
						<TaskCounter todos = { todoArray } />
					</Col>
					<Col lg = { 12 } >
						{ todos.reverse() } 
					</Col>
				</Row>
			</Grid>
		);
	}
} 

// ========= PropTypes ========= 

TodoList.propTypes = {
	todoArray: PropTypes.array.isRequired,
};

TodoList.defaultProps = { 
	todoArray: [],
};

export default TodoList;
