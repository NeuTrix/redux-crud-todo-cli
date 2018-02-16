import React from 'react';
import PropTypes from 'prop-types';
import TodoTitleBar from './TodoTitleBar';
import normalizeDate from '../myFunctions/normalizeDate';

import { 
	Grid, 
	Row, 
	Col, 
	Button, 
	Form, 
	FormControl 
} from 'react-bootstrap';

// ========= Component

const TodoForm = (props) => {

	let _currentDate = normalizeDate(new Date());
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
		_task.value = ''; // reset the fields
		_task.focus();
	};

// ========= Styling ========= 

	// control spacing of elements
	const spacing = { 
		xs: {form: 12, rank: 4, date: 5, addBtn: 1, resetBtn: 1}, 
		sm: {form: 5, rank: 2, date: 2, addBtn: 1, resetBtn: 1} 
	}

	const styleTop = {
		backgroundColor: 'lightblue',
		borderRadius: 5,
		paddingTop:10,
		paddingBottom:10,
		marginBottom: 20,
	};

	const styleButtons = {
		width: 60,
		marginRight: 10
		// visibleXsBlock: true
	}

	const styleTitle = {
		textAlign: 'left'
	}

// ========= 
	return (
		<Grid className = 'TodoForm'>

			<Form onSubmit = { handleSubmit }>

				<Row> 
					<Col
						className = 'AddTodoTitle'
						style = { styleTitle}
						xsHidden = { true }
					>	
						<h3> Add a new Todo here: </h3>
					</Col>
				</Row>

				<Row>	
					<Col xsHidden = { true }>
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
							placeholder ='Enter a NEW task here...' 
							size = { 55 } 
							maxLength = { 48 } 
							required />
					</Col>

					<Col 
						className = 'rank' 
						xs = { spacing.xs.rank }
						sm = { spacing.sm.rank }
					> 

						<FormControl 
							bsSize = 'sm'
							defaultValue = 'Med'
							componentClass = 'select' 
							inputRef = { (value) => { _rank = value } } >

							<option value = 'H'>H</option>
							<option value = 'M'>M</option>
							<option value = 'L'>L</option>

			      </FormControl>
					</Col>

					<Col 
						className = 'date' 
						xs = { spacing.xs.date }
						xsPull = { 1 }
						sm = { spacing.sm.date }
						smPush = { 3 }
					>

						<FormControl 
							inputRef = { (input) => { _date = input } } 
							type = 'date'
							defaultValue = { _currentDate } 
							bsSize = 'sm'
							required /> 
					</Col>

				<Col 
						className = 'addBtn' 
						xs = { spacing.xs.addBtn }
						xsPull = { 2 }
						sm = { spacing.sm.addBtn }
						smPull = { 2 }
					>
						<Button 
							style = { styleButtons }
							className = { 'btn btn-success btn-sm' } 
							type = 'submit' 
							value = 'Add'
						> 
								Add +
						</Button>
					</Col>

					<Col 
						className = 'resetBtn' 
						xs = { spacing.xs.resetBtn }
						xsPull = { 1 }
						sm = { spacing.sm.resetBtn }
						smPull = { 2 }
					> 
						<Button 
							style = { styleButtons }
							className = { 'btn btn-warning btn-sm' } 
							type = 'reset'
						> 
								Reset 
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