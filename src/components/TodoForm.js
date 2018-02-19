// ... component used to create new Todo items
import React from 'react';
import PropTypes from 'prop-types';
import TodoTitleBar from './TodoTitleBar';
import normalizeDate from '../myFunctions/normalizeDate';

import { 
	Col, 
	Button, 
	Form, 
	FormControl, 
	Grid, 
	Row
} from 'react-bootstrap';

// ========= Component

const TodoForm = (props) => {

	let _currentDate = normalizeDate(new Date()); // formatted date
	let _task, // todo task
			_rank, // todo priority
			_date; // todo due date

	const handleSubmit = (event) => {
		event.preventDefault();
		props.addTodo({
			date: _date.value,
			task: _task.value, 
			rank: _rank.value, 
		});
		_task.value = '';
		_task.focus();
	};

	// ========= Styling  

	// control spacing of elements
	const spacing = { 
		xs: { form: 12, rank: 3, date: 5, addBtn: 2, resetBtn: 2 }, 
		sm: { form: 6, rank: 2, date: 2, addBtn: 1, resetBtn: 1 } 
	};

	const styleTop = {
		backgroundColor: 'lightblue',
		borderRadius: 5,
		padding:10,
		// paddingTop:10,
		// paddingBottom:10,
		marginBottom: 20,
	};

	const styleButtons = {
		// width: '4em'
	};

	const styleTitle = {
		textAlign: 'left'
	};

	// ========= 

	return (
		<Grid className = 'TodoForm'>

			<Form onSubmit = { handleSubmit }>

				<Row>	
					<Col xsHidden = { true } smHidden = { false }>
						<TodoTitleBar/>
					</Col>
				</Row>

				<Row style = { styleTop }>
					<Col 
						className = 'task' 
						xs = { spacing.xs.form }
						sm = { spacing.sm.form }
					> 
						<FormControl 
							inputRef = { (input) => { _task = input;} } 
							type = 'text'  
							maxLength = { 40 } 
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
							defaultValue = 'M'
							inputRef = { (value) => { _rank = value; } } 
						>
							<option value = 'H'>H</option>
							<option value = 'M'>M</option>
							<option value = 'L'>L</option>

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
							style = { styleButtons }
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
							style = { styleButtons }
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

// ========= Props  

TodoForm.propTypes = {
	addTodo: PropTypes.func.isRequired,
	_task: PropTypes.string.isRequired,
	_rank: PropTypes.string.isRequired,
	_date: PropTypes.string.isRequired
};

TodoForm.defaultProps = {
	addTodo: f => f,
	_task: '',
	_rank: '',
	_date: '2020-12-31'
};

export default TodoForm;