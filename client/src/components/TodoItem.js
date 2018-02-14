import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { Col, Form, Row, } from 'react-bootstrap';
import { connect } from 'react-redux';

// import action creators
import { 
	updateDate,
	updateTask,			
	removeTodo
	 } from '../actions/todoActions'

import Checkbox from '../containers/Checkbox';
import PriorityRadio from '../containers/PriorityRadio';
import CalendarBtn from '../containers/CalendarBtn';
import DeleteBtn from '../containers/DeleteBtn';
   
// ========= STYLING =========

const centered = {
	marginBottom: 5,	
};

	// ========= The Component =========
	class TodoItem extends Component {

	render () {

	let item = this.props.item;
	let oldTask = item.task;
	let _task;

	const styleCompleteTask =  {
		backgroundColor: item.completed ? 'whitesmoke' : 'white', 
		color: item.completed ? 'lightgrey' : 'black',
		textDecoration: item.completed ? 'line-through' : 'none',
	};

	// Code is WET
	const onFocusStyle = (event) => {
		event.preventDefault();
		_task.style.backgroundColor = 'whitesmoke';
		_task.style.color = 'blue';
		_task.setSelectionRange(0, _task.value.length);
	};

	const onBlurStyle = (event) => {
		event.preventDefault();
		_task.style.backgroundColor = 'white';
		_task.style.color = 'black';
	};

	// =============== Event Functions ===============

	const validateEditable = (event) => {
		event.preventDefault();

		if(item.completed === true) {
			return alert('To Edit, uncheck task completed checkbox');
		}
	};

	const handleTaskEdit = (event) => {
		event.preventDefault();
		let newTask = _task.value;
			
		if (newTask === oldTask) {
			return _task.style.backgroundColor = 'white';
		}

		_task.style.backgroundColor = 'white';
		return this.props.updateTask(item._id, newTask);
	};

	let _date

	const handleChange = (event) => {
		event.preventDefault();
		this.props.updateTask(item.id, _date.value);
	};

		return (
	
			<Row >
	
				<Col 
					className= 'checkBox' 
					sm= { 1 } 
				>
				
					<Checkbox
						toggleTodo= { this.props.toggleTodo }   
						id= { item._id }
						completed= { item.completed }
					/>
				</Col >
				
				<Col 
					className= 'priorityRadio' 
					sm = { 1 } 
					style={ centered } 
				>
				
					<PriorityRadio
						updateRank= { this.props.updateRank }   
						id= { item._id }
						currRank = { item.rank }
					/>
				</Col >
	
				<Col 
					className= 'date' 
					sm = { 1 } 
				>
					<input 
						ref = { (value) => _date = value}
						id = { item._id }
						type = 'date'  
						defaultValue = { item.date } 
						required
					/>
					<input type= 'date' />
				</Col >
	
				<Col 
					className= 'currentTask' 
					sm ={ 8 } 
				>
	
					<Form 
						onClick= { validateEditable }
						onChange= { handleTaskEdit } 
						onFocus= { onFocusStyle } 
						onBlur= { onBlurStyle } 
					>
	
						<input 
							ref= { (input) => _task = input } 
							type = 'text'  
							defaultValue= { item.task }
							size= { 55 } 
							style= { styleCompleteTask } 
						/> 
	
					</Form>
				</Col>
	
				<Col 
					className= 'deleteBtn' 
					sm = { 1 } 
					style= { centered } 
				>
	
					<DeleteBtn 
						removeTodo= { this.props.removeTodo }   
						id= { item._id } 
					/>
				</Col>
	
			</Row>
		);
	}
}; // end Component

//===============================================

TodoItem.propTypes = { 
	item: PropTypes.object.isRequired,
	// removeTodo: PropTypes.func,
	toggleTodo: PropTypes.func,
	updateDate: PropTypes.func,
	updateRank: PropTypes.func,
	// updateTask: PropTypes.func,
};

TodoItem.defaultProps ={
	item: { 
		id: '0.3HxYz',
		completed: false,
		details: 'needed',
		date: '2018-12-31',
		owner: 'Bhudah',
		task: 'Celebrate life!',
		rank: 'Low', 
	},
	// removeTodo: f=>f,
	toggleTodo: f=>f,
	updateDate: f=>f,
	updateRank: f=>f,
	// updateTask: f=>f,
};

const mapStateToProps = (state) => {
	return {
		todos: state.todos
	};	
};

const mapDispatchToProps = (dispatch) => {
	return {
		setCalender: 	(date) => dispatch(updateDate(date)),
		removeTodo: 	(id) => dispatch(removeTodo(id)),
		updateTask: 	(id, task) => dispatch(updateTask(id, task))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);

// export default TodoItem;
