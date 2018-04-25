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
			date: (this.props.item.date ? this.props.item.date.slice(0,10) :''),
			rank: this.props.item.rank,
			task: this.props.item.task, 
		}

		this.styleComplete = {
			gridArea: 'task',
			paddingLeft: '1em',
			backgroundColor: 'whitesmoke',
			textDecoration: 'line-through',
			color: '#bbbbbb',
		}

		this.handleBlur 	= this.handleBlur.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleDelete = this.handleDelete.bind(this)
		this.handleEdit 	= this.handleEdit.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

isComplete() {
	let basic = this.styleBasic;
	let comp = this.styleComplete;
	return this.state.completed ? comp : placement.task
}

// *
	handleBlur(e) {
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
		if (! this.state.completed) {
			e.target.setSelectionRange(0, e.target.value.length);
			
		} else {

			// let completedStyle = { 
			// 	textDecoration: 'line-through', 
			// 	backgroundColor: 'lightgrey', 
			// 	color: 'darkgrey'
			// }

			// placement.task = {...placement.task, ...completedStyle }
			alert('Please uncheck `completed` box before editing')
		}
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
					style = { this.isComplete() }
					type = 'text'
					defaultValue = { this.state.task }
					onBlur = { this.handleBlur }
					onChange = { this.handleChange }
					onFocus = { this.handleEdit }
				/>

				<CheckComplete
					name = 'complete'
					_id = { this.props.item._id }
					completed = { this.state.completed }
					editTodo = { this.props.editTodo }
					style = { placement.done }
				/>

				<select
					name = 'rank'
					style = { placement.priority } 
					type = 'select'
					defaultValue = { this.state.rank }
					onBlur = { this.handleBlur }
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
					onBlur = { this.handleBlur }
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
	item: {},
	deleteTodo: f => alert("default function triggered"),
	editTodo: f => alert("default function triggered"),
	owner: 'Default from APP.js'
};

export default TodoItem;