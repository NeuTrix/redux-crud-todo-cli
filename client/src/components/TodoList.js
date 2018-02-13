// component to display the curret todo list
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Grid,Row } from 'react-bootstrap';

import TodoItem from '../components/TodoItem';
import TodoTitleBar from '../containers/TodoTitleBar';

// connect to the store
import { connect } from 'react-redux';

// function to gather initial state
import { startState } from '../actions/apiActions';

// ============================ STYLING ============================

const styleMain = {
	border: '1px solid lightblue',
	borderRadius: 5,
	// padding: 10,
};

// =========================== COMPONENT ===========================

class TodoList extends Component {

	/*componentDidMount() {
		// let url = 'http://localhost:3003/api/todos'
		this.props.setData('http://localhost:3003/api/todos');
	}
*/
	render() {

		let todoArray= this.props.todoArray;

		let todos= todoArray.map(item => {
			return <TodoItem 
				key= { item._id }
				item= { item }
				removeTodo= { this.props.removeTodo }
				toggleTodo= { this.props.toggleTodo }
				updateDate= { this.props.updateDate }
				updateRank= { this.props.updateRank }
				updateTodo= { this.props.updateTodo }
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

// ==================================================================

TodoList.propTypes = {
	todoArray: PropTypes.array.isRequired,
	removeTodo: PropTypes.func.isRequired,
	toggleTodo: PropTypes.func.isRequired,
	updateDate: PropTypes.func.isRequired,
	updateRank: PropTypes.func.isRequired,
	updateTodo: PropTypes.func.isRequired,
};

TodoList.defaultProps = { 
	todoArray: [],
	removeTodo: f=>f,
	toggleTodo: f=>f,
	updateDate: f=>f,
	updateRank: f=>f,
	updateTodo: f=>f,
};

const mapStateToProps = (state) => {
	return {
		todos: state.todos,
		hasErrored: state.todosHasErrored,
		isLoading: state.todosIsLoading
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		// setData:(url) => dispatch(startState(url))
		setData: (url) => {
			dispatch(startState(url));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);