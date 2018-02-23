import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import Rank from '../components/Rank';
import DeleteBtn from '../components/DeleteBtn';
import CalendarBtn from '../components/CalendarBtn';
import TodoTask from '../components/TodoTask';

import * as todoActions from '../actions/todoActions';

// ========= Component 

class TodoItem extends Component {

	constructor(props) {
		super(props)
		this.state = {
			item: this.props.item,
			date: this.props.date
		}
	}

	render () {

		// ========= Styling 

		const spacing = { 
			xs: { task: 12, rank: 3, date: 5, delBtn: 3},
			sm: { task: 6, rank: 2, date: 2, delBtn: 1}
		};

		const todosBox = {
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


		// ========= 

		return (
			<Row style = { todosBox }  >

				<Col 
					xs = { spacing.xs.task } 
					sm = { spacing.sm.task } 
				>
					<TodoTask
						item = { this.state.item }
						updateTask = { this.props.updateTask }
						toggleComplete = { this.props.toggleComplete }   
					/>
				</Col>

				<Col 
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
					xs = { spacing.xs.date }
					sm = { spacing.sm.date }
				>
					<CalendarBtn
						_id = { this.state.item._id }
						date = { this.state.item.date }
						style = { styleCompleteTask }
						updateDate = { this.props.updateDate }   
					/>
				</Col>
	
				<Col 
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
	}
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