import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import Rank from '../components/Rank';
import CalendarBtn from '../components/CalendarBtn';
import CheckComplete from '../components/CheckComplete';
import TodoTask from '../components/TodoTask';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { deleteTodo, removeTodo } from '../actions/deleteActions';
import { editTodo } from '../actions/editActions';

const spacing = { 
	xs: { chkbx: 1, task: 11, rank: 4, date: 6},
	sm: { chkbx: 1, task: 6, rank: 3, date: 2 },
	md: { chkbx: 1, task: 6, rank: 2, date: 2 },
};

const todosBoxStyle = {
	marginTop: 10,
	paddingTop: 5,
	paddingBottom: 5,
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

// +++++++++   +++++++++ 

class TodoItem extends Component {

	render () {

		let style; 

		if (this.props.item.completed) {
			style = isCompletedStyle; 
		} else {
			style = defaultStyle; 
		}

		return (
			<Row 
				className = 'todoItem'
				style = { todosBoxStyle }  
			>
				<Col 
					className = 'checkComplete'
					xs = { spacing.xs.chkbx } 
					sm = { spacing.sm.chkbx } 
					md = { spacing.md.chkbx } 
				>
					<CheckComplete
						completed = { this.props.item.completed }
						editTodo = { this.props.editTodo }
						_id = { this.props.item._id }
					/>
				</Col>

				<Col 
					className = 'todoTask'
					xs = { spacing.xs.task }  
					sm = { spacing.sm.task } 
					md = { spacing.md.task } 
				>
					<TodoTask 
						className= 'task' 
						item = { this.props.item }
						required
						style = { style }
						type = 'text'  
						editTodo = { this.props.editTodo }
						deleteTodo = { this.props.deleteTodo } 
					/> 
				</Col>

				<Col 
					className = 'rank'
					xs = { spacing.xs.rank }  xsOffset = {1}
					sm = { spacing.sm.rank }
					md = { spacing.md.rank }
				>
					<Rank
						_id = { this.props.item._id }
						currRank = { this.props.item.rank }
						editTodo= { this.props.editTodo }   
					/>
				</Col >

				<Col 	
					className = 'calendarBtn'
					xs = { spacing.xs.date }
					sm = { spacing.sm.date }
					md = { spacing.md.date }
				>
					<CalendarBtn
						date = { this.props.item.date }
						_id = { this.props.item._id }
						editTodo = { this.props.editTodo }   
					/>
				</Col>
			</Row>
		);
	}
} 

// +++++++++   +++++++++ 

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
		deleteTodo: (_id) => dispatch (deleteTodo (_id)),
		editTodo: (_id, edit) => dispatch (editTodo (_id, edit)), 
		removeTodo: (_id) => dispatch (removeTodo (_id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);