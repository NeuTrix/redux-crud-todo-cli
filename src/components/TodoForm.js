// ... used to create new Todo items
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import normalizeDate from '../helpers/normalizeDate';
import { 
	Button, 
	Col, 
	Form, 
	FormControl, 
	Glyphicon, 
	Grid, 
	Row 
} from 'react-bootstrap';

// +++++++++ CSS  +++++++++ 

const gridStyle = {
	display: 'grid',
	gridTemplateAreas: 
	` "task task task " 
		"action priority date" ` ,
	gridTemplateColumn: '30px 30px 30px',
	gridTemplateRow: 50,
	height: 50,
	width: 'auto'
}

const placement = {
	task: { 
		gridArea: 'task', 
},
	action: { gridArea: 'action' },
	priority: { gridArea: 'priority' },
	date: { gridArea: 'date' },
}

// +++++++++ COMPONENT +++++++++ 

class TodoForm extends Component {

	constructor (props) {

		super(props);

		let _currentDate = normalizeDate(new Date()); // formatted date
		
		this.state = {
			date: normalizeDate(new Date()),
			task: 'enter a new task here', 
			rank: '',
		 	owner: this.props.owner ,
		}

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.createTodo (this.state);
	};

	handleChange(e) {
		e.preventDefault();
		this.setState({ [ e.target.name ]: e.target.value})
		console.log(this.state)
	}

	render () {
		return (
			<form style = { gridStyle } onSubmit = { this.handleSubmit } >

				<input 
					placeholder = { this.state.task } 
					onChange = { this.handleChange }
					style = { placement.task }
					name = 'task'
					autoFocus
					required
				/>

				<button 
					id = 'action' 
					type = "Submit"
					style = { placement.action } 
				> 
					Submit 
				</button>


				<div id = 'priority' style = { placement.priority } >
					{this.state.task}
			 	</div>

				<div id = 'date' style = { placement.date } >
					date
			 	</div>



			</form>
		)
	}
};

// +++++++++   +++++++++ 

TodoForm.propTypes = {
	addTodo: PropTypes.func.isRequired,
	createTodo: PropTypes.func.isRequired,
	_date: PropTypes.string.isRequired,
	_rank: PropTypes.string.isRequired,
	_task: PropTypes.string.isRequired,
	owner: PropTypes.string.isRequired
};

TodoForm.defaultProps = {
	addTodo: f => f,
	createTodo: f => f,
	_date: '2020-12-31',
	_rank: '',
	_task: 'Default- not connected',
	owner: 'Default from APP.js'
};

export default TodoForm;