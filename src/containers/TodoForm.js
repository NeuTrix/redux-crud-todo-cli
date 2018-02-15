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

	const styleTop = {
		backgroundColor: 'lightblue',
		borderRadius: 5,
		padding:10,
		marginBottom: 20,
	};

	const spacing = [1, 1, 2, 7, 1] // control spacing of elements

	return (
		<Grid className = 'TodoForm'>

			<Form onSubmit = { handleSubmit }>

				<Row className = 'AddTodoTitle'>	
					<h3> Add a new Todo here: </h3>
				</Row>

				<Row>	
					<Col xsHidden = 'true' smHidden = 'true'>
						<TodoTitleBar/>
					</Col>
				</Row>

				<Row style= { styleTop }>

					<Col className ='reset' sm = { spacing[0] } > 
						<Button 
							className = { 'btn btn-warning btn-sm' } 
							type = 'reset'> 
								Reset 
						</Button> 
					</Col>

					<Col className ='rank' sm = { spacing[1] } > 
						<FormControl 
							bsSize = 'sm'
							defaultValue = 'M'
							componentClass = 'select' 
							inputRef = { (value) => { _rank = value } } >

							<option value = 'H'>H</option>
							<option value = 'M'>M</option>
							<option value = 'L'>L</option>

			      </FormControl>
					</Col>

					<Col className ='date'	sm = { spacing[2] } >
						<FormControl 
							inputRef = { (input) => { _date = input } } 
							type = 'date'
							defaultValue = { _currentDate } 
							bsSize = 'sm'
							required /> 
					</Col>

					<Col className ='task' sm = { spacing[3] } > 
						<FormControl 
							inputRef = { (input) => { _task = input;} } 
							type = 'text'  
							placeholder ='enter a new task here...' 
							size = { 55 } 
							maxLength = { 48 } 
							required />
					</Col>
			
					<Col className = 'addBtn' sm = { spacing[4] } > 
						<Button 
							className = { 'btn btn-success btn-sm' } 
							type = 'submit' 
							value = 'Add' > 
								Add 
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