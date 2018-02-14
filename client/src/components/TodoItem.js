import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { Col, Form, FormControl, Row, } from 'react-bootstrap';
import { connect } from 'react-redux';

// import action creators
import { 
	toggleComplete,
	updateDate,
	updateRank,
	updateTask,			
	removeTodo
} from '../actions/todoActions';

import Checkbox from '../containers/Checkbox';
import PriorityRadio from '../containers/PriorityRadio';
import DeleteBtn from '../containers/DeleteBtn';
   
// ========= STYLING =========

const centered = {
	marginBottom: 5,	
};

const todosBox = {
	marginTop: 20,
	marginBottom: 20
};

// ========= Component =========

class TodoItem extends Component {

	render () {

		let item = this.props.item;
		let oldTask = item.task;
		let _task;
		let _date;

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

		const handleDateChange = (event) => {
			event.preventDefault();
			let newDate = _date.value;
			return this.props.updateDate(item._id, newDate );
		};

		const spacing = [1, 1, 2, 7, 1] // control spacing of elements

		return (
			
			<Row style = { todosBox }  >

				<Col sm = { spacing[0] } className = 'checkBox'>
					<Checkbox
						toggleComplete = { this.props.toggleComplete }   
						id = { item._id }
						completed = { item.completed }/>
				</Col >
				
				<Col sm = { spacing[1] } className= 'rank' style = { centered } >
					<PriorityRadio
						updateRank= { this.props.updateRank }   
						id = { item._id }
						currRank = { item.rank }/>
				</Col >

				<Col 	sm = { spacing[2] } className='date' >
					<Form onChange = { handleDateChange } >
						<FormControl 
							inputRef = { (ref) => { _date = ref;} } 
							type = 'date'
							defaultValue = { item.date } 
							bsSize = 'sm'
							required /> 
					</Form>
				</Col>
	
				<Col sm = { spacing[3] } className= 'currentTask' >
					<Form 
						onClick = { validateEditable }
						onChange = { handleTaskEdit } 
						onFocus = { onFocusStyle } 
						onBlur = { onBlurStyle } >
						<FormControl 
							inputRef = { (input) => { _task = input;} } 
							type = 'text'  
							defaultValue= { item.task }
							size = { 55 } 
							style = { styleCompleteTask } /> 
					</Form>
				</Col>
	
				<Col sm = { spacing[4] } className= 'deleteBtn' style = { centered } >
					<DeleteBtn 
						removeTodo = { this.props.removeTodo }   
						id = { item._id } />
				</Col>
	
			</Row>
		);
	}
} 

// ========= Props ========= 

TodoItem.propTypes = { 
	item: PropTypes.object.isRequired,
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
	}
};

const mapStateToProps = (state) => {
	return {
		todos: state.todos
	};	
};

const mapDispatchToProps = (dispatch) => {
	return {
		removeTodo: 		(id) => dispatch(removeTodo(id)),
		toggleComplete: (id, task) => dispatch(toggleComplete(id, task)),
		updateDate: 		(id, date) => dispatch(updateDate(id, date)),
		updateTask: 		(id, task) => dispatch(updateTask(id, task)),
		updateRank: 		(id, rank) => dispatch(updateRank(id, rank)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);