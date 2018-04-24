// ... Component to create new Todo items
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import normalizeDate from '../helpers/normalizeDate';

// +++++++++ CSS  +++++++++ 

const gridStyle = {
	display: 'grid',
	gridTemplateAreas: 
	` "task task task task " 
		" done priority date action" ` ,
	gridTemplateColumn: 'repeat (4, 1fr)',
	gridTemplateRow: 50,
	gridGap: 5,

	backgroundColor: 'whitesmoke',
	padding: 5,
	border: '2px solid grey',
	borderRadius: 5,
}

const placement = {
	task: { gridArea: 'task' },
	action: { gridArea: 'action' },
	priority: { gridArea: 'priority' },
	date: { gridArea: 'date' },
}

// +++++++++ COMPONENT +++++++++ 

class TodoItem extends Component {

	constructor (props) {

		super(props);

		this.state = {
			date: normalizeDate(new Date()) ,
			task: '', 
			rank: 'Med',
		 	owner: this.props.owner ,
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleClick = this.handleClick.bind(this)
	}

	handleSubmit(e) {
		e.preventDefault ();
		// this.props.createTodo (this.state);
		this.setState ({ task: ''})
	};

	handleChange(e) {
		e.preventDefault();
		this.setState ({ [ e.target.name ]: e.target.value })
	}

	handleClick(e) {
		e.preventDefault();
		console.log(this.props.item._id)
		// allow restricted global use of `confirm`
		//eslint-disable-next-line
		let _confirmed = confirm(`You are deleting the task : \n\t  "${this.props.item.task}" \n  Are you sure ?` ) 
			
		if (_confirmed) {
			this.props.deleteTodo(this.props.item._id)
		} 
	}

	render () {
		return (
			<form 
				className = 'TodoItem' 
				style = { gridStyle } 
				onSubmit = { this.handleSubmit } 
			>
				<input 
					style = { placement.task }
					type = 'text'
					name = 'task'
					value = { this.props.item.task }
					onChange = { this.handleChange }
				/>

				<select
					style = { placement.priority } 
					name = 'rank'
					type = 'select'
					value = { this.props.item.rank }
					onChange = { this.handleChange }
			 	> 
					<option value = 'High'> High	</option>
					<option value = 'Med'>	Med		</option>
					<option value = 'Low'>	Low		</option>
				</select>

				<input 
					style = { placement.date } 
					name = 'date' 
					type = 'date'
					onChange = { this.handleChange }
					defaultValue = { this.props.item.date }
				/>

				<button 
					style = { placement.action } 
					type = "button"
					onClick = { this.handleClick}
				> Delete </button> 

			</form>
		)
	}
};

// +++++++++ PROPS +++++++++ 

TodoItem.propTypes = {
	item: PropTypes.object.isRequired,
	deleteTodo: PropTypes.func.isRequired,
	createTodo: PropTypes.func.isRequired,
	owner: PropTypes.string.isRequired
};

TodoItem.defaultProps = {
	deleteTodo: f => f,
	createTodo: f => f,
	owner: 'Default from APP.js'
};

/*const mapStateToProps = (state, ownProps) => {
	return { item: ownProps.item };	
};

const mapDispatchToProps = (dispatch) => {
	return {
		deleteTodo: (_id) => dispatch (deleteTodo (_id)),
		editTodo: (_id, edit) => dispatch (editTodo (_id, edit)), 
		removeTodo: (_id) => dispatch (removeTodo (_id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);*/

export default TodoItem;