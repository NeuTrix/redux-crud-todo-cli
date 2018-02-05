// component to display the curret todo list
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Grid,Row } from 'react-bootstrap';

// import { connect } from 'react-redux';
import { getTodosData } from '../reducers/apiReducer'

import TodoItem from '../components/TodoItem';

// ============================ STYLING ============================

const styleTitle= {
	background: '#006699',
	color: 'lightblue',
	borderRadius: 5,
	marginBottom: 10,
};

const styleItems= { 
	padding: 7, 
};

const styleMain = {
	border: '1px solid lightblue',
	borderRadius: 5,
	paddingTop: 20,
	paddingBottom: 20,
};

// =========================== COMPONENT ===========================

class TodoList extends Component {

	/*let data
	componentDidMount() {
		 data= getTodosData('http://localhost:3003/api/todos')
		console.log(data);
		// alert("howdy")
	}*/

		render() {

			/*let todoArray= this.props.todoArray;

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

			});*/

			let todos =[];

			return (
		
				<Grid >
	
					<Row 
						className= 'tableHeaders'
						style= { styleTitle } 
					>
						<Col sm= { 1 } style={ styleItems } >
							<input type='checkbox' checked disabled />
						
						</Col >
						<Col sm={1} style={ styleItems } >Rank</Col>
						<Col sm={2} style={ styleItems } >Due Date</Col>
						<Col sm={7} style={ styleItems } >Task</Col>
						<Col sm={1} style={ styleItems } >Delete</Col>
					</Row>
	
					<Row className= 'todoItems' >
						<Col sm= { 12 } style= { styleMain } >
							{todos} 
						</Col>
					</Row>
	
				</Grid>
			);
		}
}; // end component

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

export default TodoList;