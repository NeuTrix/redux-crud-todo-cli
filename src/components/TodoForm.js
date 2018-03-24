// ... used to create new Todo items
import React from 'react';
import PropTypes from 'prop-types';
import TodoTitleBar from './TodoTitleBar';
import normalizeDate from '../helpers/normalizeDate';
import { Col, Button, Form, FormControl, Grid, Row } from 'react-bootstrap';

// +++++++++ refactor +++++++++ 

const TodoForm = (props) => {

	let _currentDate = normalizeDate(new Date()); // formatted date
	let _task, // todo task
		_rank, // todo priority
		_date; // todo due date

	const handleSubmit = (event) => {
		event.preventDefault();
		props.createTodo (
			{ 
					date: _date.value, 
					task: _task.value, 
					rank: _rank.value,
				 	owner: props.owner 
				})

		_task.value = '';
		_task.focus();
	};

	// +++++++++ Styling  

	const spacing = { 
		xs: { form: 10, addBtn: 1, rank: 5, date: 6,  }, 
		sm: { form: 4, addBtn: 1, rank: 2, date: 3,  } 
	};

	const styleTop = {
		backgroundColor: 'lightblue',
		padding: 5,
		marginBottom: 10,
	};

	const styleField = {
		margin: 3
	}

	// +++++++++ 

	return (
		<Grid className = 'TodoForm'>

			<Col 
				xsHidden = { true } 
				smHidden = { false }
			>
				<TodoTitleBar/>
			</Col>

			<Form onSubmit = { handleSubmit } >

				<Row style = { styleTop }  >

					<Col 
						style = { styleField }
						className = 'task' 
						xs = { spacing.xs.form }
						sm = { spacing.sm.form }
					> 
						<FormControl 
							inputRef = { (input) => { _task = input;} } 
							type = 'text'  
							maxLength = { 55 } 
							placeholder ='Enter a NEW task here...' 
							required 
						/>
					</Col>

					<Col 
						style = { styleField }
						className = 'addBtn' 
						xs = { spacing.xs.addBtn }
						sm = { spacing.sm.addBtn }
						xsPull = { 1 }
					>
						<Button 
							className = { 'btn btn-sm' } 
							type = 'submit' 
							value = 'Add'
							style = { { 
								border: '1px solid grey', 
								backgroundColor: 'whitesmoke' 
							} }
						>
							<span style = { { color: 'green', fontSize: '1.5em ' } } >
								&#x0002B;
							</span> 
						</Button>

					</Col>

					<Col 
						style = { styleField }
						className = 'rank' 
						xs = { spacing.xs.rank }
						sm = { spacing.sm.rank }
					> 
						<FormControl 
							componentClass = 'select' 
							bsSize = 'sm'
							defaultValue = 'Med'
							inputRef = { (value) => { _rank = value; } } 
						>
							<option value = 'High'>High</option>
							<option value = 'Med'>Med</option>
							<option value = 'Low'>Low</option>

			    	</FormControl>
					</Col>

					<Col 
						style = { styleField }
						className = 'date' 
						xs = { spacing.xs.date }
						sm = { spacing.sm.date }
					>
						<FormControl 
							inputRef = { (input) => { _date = input; } } 
							type = 'date'
							defaultValue = { _currentDate } 
							bsSize = 'sm'
							required 
						/> 
					</Col>

				</Row>
			</Form>
		</Grid>
	);
};
	

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
	owner: "Default from APP.js"
};

export default TodoForm;