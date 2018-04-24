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

		// let _currentDate = normalizeDate(new Date()); // formatted date
		
		this.state = {
			date: normalizeDate(new Date()) ,
			task: '', 
			rank: '',
		 	owner: this.props.owner ,
		}

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.createTodo (this.state);
		this.setState ({ task: ''})
		console.log(this.state)
	};

	handleChange(e) {
		e.preventDefault();
		this.setState ({ [ e.target.name ]: e.target.value })
	}

	render () {
		return (
			<form style = { gridStyle } onSubmit = { this.handleSubmit } >

				<input 
					type = 'text'
					name = 'task'
					value = { this.state.task }
					onChange = { this.handleChange }
					style = { placement.task }
					placeholder = 'enter a new task here'
					autoFocus
					required
				/>

				<div 
					id = 'priority' 
					style = { placement.priority } >
			 	</div>

				<input 
					name = 'date' 
					type = 'date'
					onChange = { this.handleChange }
					defaultValue = { this.state.date }
					style = { placement.date } 
				/>

				<button 
					name = 'action' 
					type = "Submit"
					style = { placement.action } 
					
				/> 

			</form>
		)
	}
};

// +++++++++ PROPS +++++++++ 

TodoForm.propTypes = {
	addTodo: PropTypes.func.isRequired,
	createTodo: PropTypes.func.isRequired,
	owner: PropTypes.string.isRequired
};

TodoForm.defaultProps = {
	addTodo: f => f,
	createTodo: f => f,
	owner: 'Default from APP.js'
};

export default TodoForm;