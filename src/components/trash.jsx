// ... used to create new Todo items
import React from 'react';
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
	gridTemplateArea: ' "task task task " "action priority date" ',
	gridTemplateColumn: 'repeat (3, 30px)',
	gridTemplateRow: 50,
	height: 50,
	width: 'auto'
}

const placement = {
	task: { gridArea: 'task' },
	action: { gridArea: 'action' },
	priority: { gridArea: 'priority' },
	date: { gridArea: 'date' },
}

const style = {
	// top: { 
	// 	backgroundColor: '#236C9C', 
	// 	paddingTop: 8, 
	// 	paddingBottom: 5 
	// },
	// field: { textAlign: 'left', marginBottom: 5 },
	// plus: { fontSize: '1.25em', color: '#68c615' },
	// add: 	{ 
	// 	border: '1px solid lightgrey', 
	// 	backgroundColor: 'white', 	
	// 	color: 'green'
	// },
};



// +++++++++   +++++++++ 

export const TodoForm = (props) => {
	let _task, _rank, _date; 
	let _currentDate = normalizeDate(new Date()); // formatted date

	const handleSubmit = (event) => {
		event.preventDefault();
		props.createTodo ({ 
			date: _date.value, 
			task: _task.value, 
			rank: _rank.value,
		 	owner: props.owner 
		});
		_task.value = '';
		_task.focus();
	};

	return (
		<div className = 'TodoForm' style = { gridStyle } >

			<div id = 'task' style = { placement.task } >
				task
		 	</div>

			<div id = 'action' style = { placement.action } >
				action
		 	</div>

			<div id = 'priority' style = { placement.priority } >
				priority
		 	</div>

			<div id = 'date' style = { placement.date } >
				date
		 	</div>


			<Form onSubmit = { handleSubmit } >
				<Row style = { style.top }  >

					<Col 
						className = 'task' 
						style = { style.field }
					> 
						<FormControl 
							inputRef = { (input) => { _task = input; } } 
							type = 'text'  
							placeholder ='Enter a NEW task here...' 
							required 
						/>
					</Col>

					<Col 
						className = 'addBtn' 
						
					>
						<Button 
							className = { 'btn btn-sm' } 
							type = 'submit' 
							value = 'Add'
							style = { style.add }
						>
							<Glyphicon glyph = 'plus'style = { style.plus }/>
						</Button>
					</Col>

					<Col 
						style = { style.field }
						className = 'rank' 
						
					> 
						<FormControl 
							componentClass = 'select' 
							inputRef = { (value) => { _rank = value; } } 
							defaultValue = 'Med'
						>
							<option value = 'High'>High</option>
							<option value = 'Med'>Med</option>
							<option value = 'Low'>Low</option>
			    	</FormControl>
					</Col>

					<Col 
						style = { style.field }
						className = 'date' 
						
					>
						<FormControl 
							defaultValue = { _currentDate } 
							inputRef = { (input) => { _date = input; } } 
							type = 'date'
							required 
						/> 
					</Col>

				</Row>
			</Form>
		</div>
	);
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