// ... used to create new Todo items
import React from 'react';
import PropTypes from 'prop-types';
import TodoTitleBar from './TodoTitleBar';
import normalizeDate from '../myFunctions/normalizeDate';
import { Col, Button, Form, FormControl, Grid, Row } from 'react-bootstrap';

const TodoForm = (props) => {
	let _currentDate = normalizeDate(new Date()); // formatted date
	let _task, // todo task
			_rank, // todo priority
			_date; // todo due date

	const handleSubmit = (event) => {
		event.preventDefault();
		props.createTodo (
			props.api,
			{ date: _date.value, task: _task.value, rank: _rank.value }
		);
		_task.value = '';
		_task.focus();
	};

	// +++++++++ Styling  
	const spacing = { 
		xs: { form: 12, rank: 3, date: 5, addBtn: 2, resetBtn: 2 }, 
		sm: { form: 6, rank: 2, date: 2, addBtn: 1, resetBtn: 1 } 
	};

	const styleTop = {
		backgroundColor: 'lightblue',
		padding:10,
		marginBottom: 10,
	};
	// +++++++++ 

	return (
	<Grid className = 'TodoForm' style = { {marginTop: 100}} >

			<Col 
				xsHidden = { true } 
				smHidden = { false }
			>
				<TodoTitleBar/>
			</Col>

			<Form onSubmit = { handleSubmit } >
				<Row style = { styleTop }>
					<Col 
						className = 'task' 
						xs = { spacing.xs.form }
						sm = { spacing.sm.form }
					> 
						<FormControl 
							inputRef = { (input) => { _task = input;} } 
							type = 'text'  
							maxLength = { 55 } 
							style = { { marginBottom: 10 } }
							placeholder ='Enter a NEW task here...' 
							required 
						/>
					</Col>

					<Col 
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

					<Col 
						className = 'addBtn' 
						xs = { spacing.xs.addBtn }
						sm = { spacing.sm.addBtn }
					>
						<Button 
							className = { 'btn btn-success btn-sm' } 
							type = 'submit' 
							value = 'Add'
						>
							ADD
						</Button>
					</Col>

					<Col 
						className = 'resetBtn' 
						xs = { spacing.xs.resetBtn }
						sm = { spacing.sm.resetBtn }
					> 
						<Button 
							className = { 'btn btn-warning btn-sm' } 
							type = 'reset'
						>
							CLR 
						</Button> 
					</Col>
				</Row>
			</Form>
		</Grid>
	);
};

TodoForm.propTypes = {
	addTodo: PropTypes.func.isRequired,
	api: PropTypes.string.isRequired,
	createTodo: PropTypes.func.isRequired,
	_date: PropTypes.string.isRequired,
	_rank: PropTypes.string.isRequired,
	_task: PropTypes.string.isRequired
};

TodoForm.defaultProps = {
	addTodo: f => f,
 	api: 'https://redux-todo-api.herokuapp.com/api/todos',
	createTodo: f => f,
	_date: '2020-12-31',
	_rank: '',
	_task: ''
};

export default TodoForm;