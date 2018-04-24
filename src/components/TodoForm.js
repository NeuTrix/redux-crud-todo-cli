// ... Component to create new Todo items
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import normalizeDate from '../helpers/normalizeDate';

// +++++++++ CSS  +++++++++ 

const gridStyle = {
	display: 'grid',
	gridTemplateAreas: 
	` "task task task " 
		" priority date action" ` ,
	gridTemplateColumn: '30px 30px 30px',
	gridTemplateRow: 50,
	gridGap: 5,

	backgroundColor: 'transparent',
	padding: 5,
	border: '2px solid lime',
	borderRadius: 5,
}

const placement = {
	task: { gridArea: 'task' },
	action: { gridArea: 'action' },
	priority: { gridArea: 'priority' },
	date: { gridArea: 'date' },
}

// +++++++++ COMPONENT +++++++++ 

class TodoForm extends Component {

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
	}

	handleSubmit(e) {
		e.preventDefault ();
		this.props.createTodo (this.state);
		this.setState ({ task: ''})
	};

	handleChange(e) {
		e.preventDefault();
		this.setState ({ [ e.target.name ]: e.target.value })
	}

	render () {
		return (
			<form 
				className = 'TodoForm' 
				style = { gridStyle } 
				onSubmit = { this.handleSubmit } 
			>
				<input 
					id = 'new_item_task'
					style = { placement.task }
					type = 'text'
					name = 'task'
					value = { this.state.task }
					onChange = { this.handleChange }
					placeholder = 'enter a new task here'
					autoFocus
					required
				/>

				<select
					id = 'new_item_priority' 
					style = { placement.priority } 
					name = 'rank'
					type = 'select'
					value = { this.state.rank }
					onChange = { this.handleChange }
			 	> 
					<option value = 'High'> High	</option>
					<option value = 'Med'>	Med		</option>
					<option value = 'Low'>	Low		</option>
				</select>

				<input 
					id = 'new_item_date'
					style = { placement.date } 
					name = 'date' 
					type = 'date'
					onChange = { this.handleChange }
					defaultValue = { this.state.date }
				/>

				<button 
					id = 'new_item_submit'
					style = { placement.action } 
					type = "Submit"
				> Add </button> 

			</form>
		)
	}
};

// +++++++++ PROPS +++++++++ 

TodoForm.propTypes = {
	// addTodo: PropTypes.func.isRequired,
	createTodo: PropTypes.func.isRequired,
	owner: PropTypes.string.isRequired
};

TodoForm.defaultProps = {
	// addTodo: f => f,
	createTodo: f => f,
	owner: 'Default from APP.js'
};

export default TodoForm;