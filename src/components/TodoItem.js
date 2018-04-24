// ... Component to create new Todo items
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import normalizeDate from '../helpers/normalizeDate';
import CheckComplete from './CheckComplete';

// +++++++++ CSS +++++++++ 

const gridStyle = {
	display: 'grid',
	gridTemplateAreas: 
	` "task task task task " 
		"done priority date action" ` ,
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
	done: { 
		gridArea: 'done',
		justifySelf: 'center',
		alignSelf: 'center',		
	 },
	action: { gridArea: 'action' },
	priority: { gridArea: 'priority' },
	date: { gridArea: 'date' },
}

// +++++++++ COMPONENT +++++++++ 

class TodoItem extends Component {

	constructor (props) {

		super(props);

		this.state = {
			date: this.props.item.date.slice(0.10),
			task: '', 
			rank: 'Med',
		 	owner: this.props.owner ,
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleDelete = this.handleDelete.bind(this)
		this.handleDelete = this.handleDelete.bind(this)
		this.handleEdit 	= this.handleEdit.bind(this)
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

	handleDelete(e) {
		e.preventDefault();
		// allow restricted global use of `confirm`
		//eslint-disable-next-line
		let _confirmed = confirm(`Do you want to delete the task : \n\t  "${this.props.item.task}" ?` ) 
		if (_confirmed) {
			this.props.deleteTodo(this.props.item._id)
		} 
	}

	handleEdit(e) {
		e.preventDefault();
		// allow restricted global use of `confirm`
		//eslint-disable-next-line
		let _confirmed = confirm(`Do you want to delete the task : \n\t  "${this.props.item.task}" ?` ) 
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
					name = 'task'
					style = { placement.task }
					type = 'text'
					value = { this.props.item.task }
					onChange = { this.handleChange }
				/>

				<input
					name = 'complete'
					style = { placement.done }
					type = 'checkbox'
				/>

				<select
					name = 'rank'
					style = { placement.priority } 
					type = 'select'
					value = { this.props.item.rank }
					onChange = { this.handleChange }
			 	> 
					<option value = 'High'> High	</option>
					<option value = 'Med'>	Med		</option>
					<option value = 'Low'>	Low		</option>
				</select>

				<input 
					name = 'date' 
					style = { placement.date } 
					type = 'date'
					onChange = { this.handleChange }
					value = { this.props.item.date.slice(0,10) }
				/>

				<button 
					name = 'delete'
					style = { placement.action } 
					type = "button"
					onClick = { this.handleDelete}
				> Delete </button> 

			</form>
		)
	}
};

// +++++++++ PROPS +++++++++ 

TodoItem.propTypes = {
	createTodo: PropTypes.func.isRequired,
	deleteTodo: PropTypes.func.isRequired,
	editTodo: PropTypes.func.isRequired,
	item: PropTypes.object.isRequired,
	owner: PropTypes.string.isRequired
};

TodoItem.defaultProps = {
	createTodo: f => alert("default function triggered"),
	deleteTodo: f => alert("default function triggered"),
	editTodo: f => alert("default function triggered"),
	owner: 'Default from APP.js'
};

export default TodoItem;