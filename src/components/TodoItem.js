import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { Col, Form, FormControl, Row } from 'react-bootstrap';
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

// ========= Component =========

class TodoItem extends Component {

	render () {

		let item = this.props.item;
		let oldTask = item.task;
		let _task;
		let _date;

		// ========= Functions
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

		// ========= Styling 

		const spacing = { 
			xs: {checkBox: 1, task: 11, rank: 3, date: 5, deleteBtn: 3},
			sm: {checkBox: 1, task: 6, rank: 2, date: 2, deleteBtn: 1} 
		};

		const todosBox = {
			marginTop: 10,
			marginBottom: 10,
			paddingBottom: 10,
			borderBottom:'2px solid lightgrey'
		};

		const styleCompleteTask =  {
			marginBottom: 10,
			backgroundColor: item.completed ? 'whitesmoke' : 'white', 
			color: item.completed ? 'lightgrey' : 'black',
			textDecoration: item.completed ? 'line-through' : 'none',
		};

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

		// ========= 

		return (
			<Row style = { todosBox }  >
				<Col 
					className = 'checkBox'
					xs = { spacing.xs.checkBox } 
					sm = { spacing.sm.checkBox } 
				>
					<Checkbox
						toggleComplete = { this.props.toggleComplete }   
						id = { item._id }
						completed = { item.completed }
					/>

				</Col >

				<Col 
					className= 'task' 
					xs = { spacing.xs.task } 
					sm = { spacing.sm.task } 
				>
					<Form 
						onClick = { validateEditable }
						onChange = { handleTaskEdit } 
						onFocus = { onFocusStyle } 
						onBlur = { onBlurStyle } 
					>
						<FormControl 
							inputRef = { (input) => { _task = input;} } 
							type = 'text'  
							defaultValue= { item.task }
							style = { styleCompleteTask }
						/> 

					</Form>
				</Col>

				<Col 
					className= 'rank' 
					xs = { spacing.xs.rank } 
					sm = { spacing.sm.rank }
				>
					<PriorityRadio
						id = { item._id }
						updateRank= { this.props.updateRank }   
						currRank = { item.rank }
					/>

				</Col >

				<Col 	
					className='date' 
					xs = { spacing.xs.date }
					sm = { spacing.sm.date }
				>
					<Form onChange = { handleDateChange } >
						
						<FormControl 
							inputRef = { (ref) => { _date = ref;} } 
							type = 'date'
							defaultValue = { item.date } 
							bsSize = 'sm'
							required 
						/> 

					</Form>
				</Col>
	
				<Col 
					className= 'deleteBtn' 
					xs = { spacing.xs.deleteBtn } 
					sm = { spacing.sm.deleteBtn }
				>
					<DeleteBtn 
						removeTodo = { this.props.removeTodo }   
						id = { item._id } 
					/>

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