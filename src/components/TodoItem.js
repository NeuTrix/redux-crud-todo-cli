import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import Rank from '../components/Rank';
import DeleteBtn from '../components/DeleteBtn';
import CalendarBtn from '../components/CalendarBtn';
import CheckComplete from '../components/CheckComplete'
import TodoTask from '../components/TodoTask'

import * as todoActions from '../actions/todoActions';
import { deleteTodo } from '../actions/deleteActions'

// ========= Styling 
const spacing = { 
	xs: { chkbx: 1, task: 11, rank: 3, date: 5, delBtn: 3},
	sm: { chkbx: 1, task: 11, rank: 2, date: 3, delBtn: 6}
}

const todosBoxStyle = {
	marginTop: 10,
	paddingBottom: 10,
	paddingTop: 10,
	border: '1px solid lightgrey',
	borderRadius: 5,
	backgroundColor: 'whitesmoke',

};

const defaultStyle = {
	backgroundColor: 'white', 
	color: 'black', 
}

const isCompletedStyle = {
		backgroundColor: 'whitesmoke', 
		color: 'lightgrey',
		textDecoration: 'line-through' 
}

// ========= Component 

class TodoItem extends Component {

	render () {

		let style = {}
		
		if (this.props.item.completed) {
			style = isCompletedStyle 
		} else {
			style = defaultStyle 
		}

		return (
			<Row 
				className = 'todoItem'
				style = { todosBoxStyle }  >

				<Col 
						className = 'checkComplete'
						xs = { spacing.xs.chkbx } 
						sm = { spacing.sm.chkbx } 
					>
					<CheckComplete
						_id = { this.props.item._id }
						completed = { this.props.item.completed }
						toggleComplete = { this.props.toggleComplete }   	
					/>

				</Col>

				<Col 
					className = 'todoTask'
					xs = { spacing.xs.task } 
					sm = { spacing.sm.task } 
					style = { { marginBottom: 10 } }
				>
					<TodoTask 
						className= 'task' 
						type = 'text'  
						item = { this.props.item }
						style = { style }
						updateTask = { this.props.updateTask }
						required
					/> 
				</Col>

				<Col 
					className = 'rank'
					xs = { spacing.xs.rank } 
					sm = { spacing.sm.rank }
				>
					<Rank
						_id = { this.props.item._id }
						currRank = { this.props.item.rank }
						updateRank= { this.props.updateRank }   
					/>
				</Col >

				<Col 	
					className = 'calendarBtn'
					xs = { spacing.xs.date }
					sm = { spacing.sm.date }
				>
					<CalendarBtn
						_id = { this.props.item._id }
						date = { this.props.item.date }
						updateDate = { this.props.updateDate }   
					/>
				</Col>
	
				<Col 
					className = 'deleteBtn'
					xs = { spacing.xs.delBtn } 
					sm = { spacing.sm.delBtn }
				>
					<DeleteBtn 
						api = { this.props.api }
						_id = { this.props.item._id } 
						deleteTodo = { this.props.deleteTodo }   
					/>
				</Col>
			</Row>
		);
	}
} 

// ========= Props ========= 
TodoItem.propTypes = {
	api: PropTypes.string.isRequired,
	item: PropTypes.object.isRequired,
	todos: PropTypes.array.isRequired
};

TodoItem.defaultProps ={
 	api: 'https://redux-todo-api.herokuapp.com/api/todos',
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
		// todos: state.todos
		item: ownProps.item,
	};	
};

const mapDispatchToProps = (dispatch) => {
	return {
		removeTodo: 
			(_id) => dispatch(todoActions.removeTodo(_id)),
		deleteTodo:
			(api, _id) => dispatch(deleteTodo(api, _id)),
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