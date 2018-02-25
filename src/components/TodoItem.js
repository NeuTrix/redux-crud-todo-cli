import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import Rank from '../components/Rank';
import DeleteBtn from '../components/DeleteBtn';
import CalendarBtn from '../components/CalendarBtn';
import TodoTask from '../components/TodoTask';
import CheckComplete from '../components/CheckComplete'

import * as todoActions from '../actions/todoActions';

// ========= Styling 
const spacing = { 
	xs: { task: 12, rank: 3, date: 5, delBtn: 3},
	sm: { task: 6, rank: 2, date: 2, delBtn: 1}
};

const todosBoxStyle = {
	marginBottom: 10,
	paddingTop: 10,
	paddingBottom: 10,
	border: '1px solid lightgrey',
	borderRadius: 5,
	backgroundColor: 'whitesmoke'
};

// ========= Component 
class TodoItem extends Component {

	constructor(props) {
		super(props)
		this.state = {
			item: this.props.item,
			isCompleted: this.props.item.completed
		}
	}

	render () {

		
		
		return (
			<Row 
				className = 'todoItem'
				style = { todosBoxStyle }  >

				<Col 
						className = 'checkComplete'
						xs = { spacing.xs.check } 
						sm = { spacing.sm.check } 
					>
					<CheckComplete
						_id = { this.props.item._id }
						completed = { this.state.isCompleted}
						toggleComplete = { this.props.toggleComplete }   	
					/>

				</Col>

				<Col 
					className = 'todoTask'
					xs = { spacing.xs.task } 
					sm = { spacing.sm.task } 
				>
					<TodoTask
						item = { this.state.item }
						updateTask = { this.props.updateTask }
					/>
				</Col>

				<Col 
					className = 'rank'
					xs = { spacing.xs.rank } 
					sm = { spacing.sm.rank }
				>
					<Rank
						_id = { this.state.item._id }
						currRank = { this.state.item.rank }
						updateRank= { this.props.updateRank }   
					/>
				</Col >

				<Col 	
					className = 'calendarBtn'
					xs = { spacing.xs.date }
					sm = { spacing.sm.date }
				>
					<CalendarBtn
						_id = { this.state.item._id }
						date = { this.state.item.date }
						updateDate = { this.props.updateDate }   
					/>
				</Col>
	
				<Col 
					className = 'deleteBtn'
					xs = { spacing.xs.delBtn } 
					sm = { spacing.sm.delBtn }
				>
					<DeleteBtn 
						_id = { this.state.item._id } 
						removeTodo = { this.props.removeTodo }   
					/>
				</Col>
			</Row>
		);
	}
} 

// ========= Props ========= 
TodoItem.propTypes = {
	item: PropTypes.object.isRequired,
	todos: PropTypes.array.isRequired
};

TodoItem.defaultProps ={
	item: { 
		_id: 'default',
		completed: false,
		details: 'default',
		date: '1935-05-24',
		owner: 'default',
		rank: 'default',
		task: 'default'
	}, 
	todos: []
};

const mapStateToProps = (state, ownProps) => {
	return {
		todos: state.todos,
		item: ownProps.item,
	};	
};

const mapDispatchToProps = (dispatch) => {
	return {
		removeTodo: 
			(_id) => dispatch(todoActions.removeTodo(_id)),
		toggleComplete: 
			(_id, task) => dispatch(todoActions.toggleComplete(_id, task)),
		updateDate: 
			(_id, date) => dispatch(todoActions.updateDate(_id, date)),
		updateTask: 
			(_id, task) => dispatch(todoActions.updateTask(_id, task)),
		updateRank: 
			(_id, rank) => dispatch(todoActions.updateRank(_id, rank)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);