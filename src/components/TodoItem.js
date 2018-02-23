import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Col, Form, FormControl, Row } from 'react-bootstrap';

import * as todoActions from '../actions/todoActions';

import Checkbox from '../components/Checkbox';
import PriorityRadio from '../components/PriorityRadio';
import DeleteBtn from '../components/DeleteBtn';

// ========= Component 

class TodoItem extends Component {

	constructor(props) {
		super(props)
		this.state = {
			item: this.props.item
		}

	}

	render () {

		// let this.state.item = this.props.this.state.item;
		let oldTask = this.state.item.task;
		let _task;
		let _date;

		// ========= Functions
		const validateEditable = (event) => {
			event.preventDefault();
			if(this.state.item.completed === true) {
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
			return this.props.updateTask(this.state.item._id, newTask);
		};

		const handleDateChange = (event) => {
			event.preventDefault();
			let newDate = _date.value;
			return this.props.updateDate(this.state.item._id, newDate );
		};

		// ========= Styling 

		const spacing = { 
			xs: {checkBox: 1, task: 11, rank: 3, date: 5, deleteBtn: 3},
			sm: {checkBox: 1, task: 6, rank: 2, date: 2, deleteBtn: 1} 
		};

		const todosBox = {
			// marginTop: 10,
			marginBottom: 10,
			paddingTop: 10,
			paddingBottom: 10,
			border: '1px solid lightgrey',
			borderRadius: 5,
			backgroundColor: 'whitesmoke'
		};

		const styleCompleteTask =  {
			marginBottom: 10,
			backgroundColor: this.state.item.completed ? 'whitesmoke' : 'white', 
			color: this.state.item.completed ? 'lightgrey' : 'black',
			textDecoration: this.state.item.completed ? 'line-through' : 'none',
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
					<h4> Owner: { this.state.item.owner } </h4>

				<Col 
					className = 'checkBox'
					xs = { spacing.xs.checkBox } 
					sm = { spacing.sm.checkBox } 
				>
					<Checkbox
						toggleComplete = { this.props.toggleComplete }   
						id = { this.state.item._id }
						completed = { this.state.item.completed }
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
							defaultValue= { this.state.item.task }
							style = { styleCompleteTask }
						/> 

					</Form>
				</Col>

				<Col 
					className= 'rank' 
					xs = { spacing.xs.rank } 
					sm = { spacing.sm.rank }
				>
					<Form>
						<PriorityRadio
							id = { this.state.item._id }
							updateRank= { this.props.updateRank }   
							currRank = { this.state.item.rank }
						/>
					</Form>

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
							defaultValue = { this.state.item.date.slice(0,10) } 
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
						id = { this.state.item._id } 
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
		rank: "High",
		task: 'Celebrate life!',
	}
};

const mapStateToProps = (state, ownProps) => {
	return {
		todos: state.todos,
		item: ownProps.item
	};	
};

const mapDispatchToProps = (dispatch) => {
	return {
		removeTodo: (id) => dispatch(todoActions.removeTodo(id)),
		toggleComplete: (id, task) => dispatch(todoActions.toggleComplete(id, task)),
		updateDate: (id, date) => dispatch(todoActions.updateDate(id, date)),
		updateTask: (id, task) => dispatch(todoActions.updateTask(id, task)),
		updateRank: (id, rank) => dispatch(todoActions.updateRank(id, rank)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);