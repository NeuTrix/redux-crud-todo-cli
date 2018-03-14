import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import Rank from '../components/Rank';
import DeleteBtn from '../components/DeleteBtn';
import CalendarBtn from '../components/CalendarBtn';
import CheckComplete from '../components/CheckComplete';
import TodoTask from '../components/TodoTask';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions/deleteActions';
import { editTodo } from '../actions/editActions';
import * as _a from '../actions/todoActions';

// +++++++++ Styling 
const spacing = { 
	xs: { chkbx: 1, task: 10, rank: 2, date: 4, delBtn: 3},
	sm: { chkbx: 1, task: 10, rank: 2, date: 4, delBtn: 3},
	md: { chkbx: 1, task: 10, rank: 2, date: 4, delBtn: 3},
	lg: { chkbx: 1, task: 10, rank: 2, date: 4, delBtn: 3},
};

const todosBoxStyle = {
	marginTop: 10,
	paddingBottom: 10,
	padding: 10,
	border: '1px solid lightgrey',
	borderRadius: 5,
	backgroundColor: 'whitesmoke'
};

const defaultStyle = {
	backgroundColor: 'white', 
	color: 'black'
};

const isCompletedStyle = {
	backgroundColor: 'whitesmoke', 
	color: 'lightgrey',
	textDecoration: 'line-through' 
};

// +++++++++ 

class TodoItem extends Component {

	render () {

		let style = {};
		if (this.props.item.completed) {
			style = isCompletedStyle; 
		} else {
			style = defaultStyle; 
		}

		return (
			<Row 
				className = 'todoItem'
				style = { todosBoxStyle }  >

				<Col 
					className = 'checkComplete'
					xs = { spacing.xs.chkbx } 
					sm = { spacing.sm.chkbx } 
					md = { spacing.md.chkbx } 
					lg = { spacing.lg.chkbx } 
				>
					<CheckComplete
						completed = { this.props.item.completed }
						editTodo = { this.props.editTodo }
						_id = { this.props.item._id }
						toggleComplete = { this.props.toggleComplete }   	
					/>
				</Col>

				<Col 
					className = 'todoTask'
					xs = { spacing.xs.task } 
					sm = { spacing.sm.task } 
					md = { spacing.md.task } 
					lg = { spacing.lg.task } 
					style = { { marginBottom: 10 } }
				>
					<TodoTask 
						className= 'task' 
						item = { this.props.item }
						required
						style = { style }
						type = 'text'  
						editTodo = { this.props.editTodo }
					/> 
				</Col>

				<Col 
					className = 'rank'
					xs = { spacing.xs.rank } 
					sm = { spacing.sm.rank }
					md = { spacing.md.rank }
					lg = { spacing.lg.rank }
				>
					<Rank
						editTodo = { this.props.editTodo }
						_id = { this.props.item._id }
						currRank = { this.props.item.rank }
						updateRank= { this.props.updateRank }   
					/>
				</Col >

				<Col 	
					className = 'calendarBtn'
					xs = { spacing.xs.date }
					sm = { spacing.sm.date }
					md = { spacing.md.date }
					md = { spacing.lg.date }
				>
					<CalendarBtn
						date = { this.props.item.date }
						editTodo = { this.props.editTodo }
						_id = { this.props.item._id }
						updateDate = { this.props.updateDate }   
					/>
				</Col>
	
				<Col 
					className = 'deleteBtn'
					xs = { spacing.xs.delBtn } 
					sm = { spacing.sm.delBtn }
					md = { spacing.md.delBtn }
					lg = { spacing.lg.delBtn }
					mdPull = { 2 }
				>
					<DeleteBtn 
						deleteTodo = { this.props.deleteTodo } 
						task = { this.props.item.task }  
						_id = { this.props.item._id } 
					/>
				</Col>
			</Row>
		);
	}
} 

TodoItem.propTypes = {
	item: PropTypes.object.isRequired,
};

TodoItem.defaultProps ={
	item: { 
		_id: 'Client default from TodoItem.js',
		completed: false,
		details: 'Client default from TodoItem.js',
		date: '1935-05-24',
		owner: 'Client default from TodoItem.js',
		rank: 'Client default from TodoItem.js',
		task: 'Client defaul from TodoItem.jst'
	}, 
};

const mapStateToProps = (state, ownProps) => {
	return { item: ownProps.item };	
};

const mapDispatchToProps = (dispatch) => {
	return {
		deleteTodo:
			(_id) => dispatch (deleteTodo (_id)),
		editTodo:
			(_id, update) => dispatch (editTodo (_id, update)), 
		removeTodo: 
			(_id) => dispatch (_a.removeTodo (_id)),
		toggleComplete: 
			(_id, task) => dispatch (_a.toggleComplete (_id, task)),
		updateDate: 
			(_id, date) => dispatch (_a.updateDate (_id, date)),
		updateTask: 
			(_id, task) => dispatch (_a.updateTask (_id, task)),
		updateRank: 
			(_id, rank) => dispatch (_a.updateRank (_id, rank)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);