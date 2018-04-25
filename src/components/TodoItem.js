// ... Component to create new Todo items
import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
	task: { 
		gridArea: 'task',
		paddingLeft: '1em',
	},
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
			completed: this.props.item.completed,
			// date: normalizeDate(this.props.item.date),
			date: this.props.item.date.slice(0,10),
			rank: this.props.item.rank,
			task: this.props.item.task, 
		 	owner: this.props.item.owner,
		}

		this.handleBlur 	= this.handleBlur.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleDelete = this.handleDelete.bind(this)
		this.handleEdit 	= this.handleEdit.bind(this)
		this.handleFocus 	= this.handleFocus.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

// *
	handleBlur(e) {
		// const { task } = this.state;
		e.preventDefault();
		this.props.editTodo(this.props.item._id, this.state)
	}

// *
	handleChange(e) {
		e.preventDefault();
		this.setState ({ [ e.target.name ]: e.target.value })
	}

// *
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
		// let _confirmed = confirm(`Do you want to delete the task : \n\t  "${this.props.item.task}" ?` ) 
		// if (_confirmed) {
		// 	this.props.deleteTodo(this.props.item._id)
		// } 
	}

// *
	handleFocus(e) {
		e.preventDefault();
		e.target.setSelectionRange(0, e.target.value.length);
	}

// *
	handleSubmit(e) {
		e.preventDefault ();
		this.props.editTodo (this.props.item._id, this.state);
	};

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
					defaultValue = { this.state.task }
					onChange = { this.handleChange }
					onFocus = { this.handleFocus }
					onBlur = { this.handleBlur }
				/>
{(this.state.date)}
				<input
					name = 'complete'
					style = { placement.done }
					type = 'checkbox'
				/>

				<select
					name = 'rank'
					style = { placement.priority } 
					type = 'select'
					defaultValue = { this.state.rank }
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
					defaultValue = { this.state.date }
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
	deleteTodo: PropTypes.func.isRequired,
	editTodo: PropTypes.func.isRequired,
	item: PropTypes.object.isRequired,
	owner: PropTypes.string.isRequired
};

TodoItem.defaultProps = {
	deleteTodo: f => alert("default function triggered"),
	editTodo: f => alert("default function triggered"),
	owner: 'Default from APP.js'
};

export default TodoItem;