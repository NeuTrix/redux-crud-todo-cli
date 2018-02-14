// component to display the curret todo list
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Grid,Row } from 'react-bootstrap';

import TodoItem from '../components/TodoItem';
import TodoTitleBar from '../containers/TodoTitleBar';

// ============================ STYLING ============================

const styleMain = {
	border: '1px solid lightblue',
	borderRadius: 5,
};

// =========================== COMPONENT ===========================

class TodoList extends Component {

	render() {

		let todoArray= this.props.todoArray;

		let todos= todoArray.map(item => {
			return <TodoItem 
				key= { item._id }
				item= { item }
				removeTodo= { this.props.removeTodo }
				toggleTodo= { this.props.toggleTodo }
				updateRank= { this.props.updateRank }
			/>;

		});

		return (
		
			<Grid >

				<Row>	
					<TodoTitleBar/>
				</Row>

				<Row className= 'todoItems' style= { styleMain }>
					<Col lg = { 12 }  >
						{todos} 
					</Col>
				</Row>
	
			</Grid>
		);
	}
} // end component

// ========= PropTypes ========= 

TodoList.propTypes = {
	todoArray: PropTypes.array.isRequired,
	removeTodo: PropTypes.func.isRequired,
	toggleTodo: PropTypes.func.isRequired,
	updateRank: PropTypes.func.isRequired,
	// updateTodo: PropTypes.func.isRequired,
};

TodoList.defaultProps = { 
	todoArray: [],
	removeTodo: f=>f,
	toggleTodo: f=>f,
	updateRank: f=>f,
	// updateTodo: f=>f,
};

export default TodoList
