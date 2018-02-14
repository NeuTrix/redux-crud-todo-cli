import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col, Button, Form, FormControl } from 'react-bootstrap';

import TodoTitleBar from './TodoTitleBar';
import CalendarBtn from './CalendarBtn';

import normalizeDate from '../myFunctions/normalizeDate'

// ========= ========= ========= 
const TodoForm = (props) => {

	let _currentDate = normalizeDate(new Date())
	let _task, 
			_rank, 
			_date 

	const handleSubmit = (event) => {
		event.preventDefault();
		props.addTodo({
			date: _date.value,
			task: _task.value, 
			rank: _rank.value, 
		});
	
		// reset the fields
		_task.value ='';
		_task.focus();
	};

	const styleTop ={
		backgroundColor: 'lightblue',
		borderRadius: 5,
		padding:10,
		marginBottom: 20,
	};

	return (
		<Grid className= 'TodoForm'>

			<Form onSubmit={ handleSubmit }>

				<Row className= 'AddTodoTitle'>	
					<h3>
						Add a new Todo here:
					</h3>
				</Row>

				<Row>	
					<TodoTitleBar/>
				</Row>

				<Row style= { styleTop }>

					<Col sm = { 1 } > 
						<p> ===> </p>
					</Col>

					<Col className='rank' sm = { 1 } > 
						<select  
							type= 'select'
							ref= { (value) => _rank = value }
							defaultValue='Med'>

							<option value='High'>High</option>
							<option value='Med' >Med</option>
							<option value='Low'>Low</option> 
						</select>
					</Col>

					<Col className='date'	sm = { 2 } >
						<FormControl 
							inputRef= { (input) => {_date = input} } 
							type = 'date'
							defaultValue = { _currentDate } 
							bsSize = 'sm'
							required /> 
					</Col>

					<Col className='task' sm = { 6 } > 
						<FormControl 
							ref= { (input) => { _task = input} } 
							type = 'text'  
							placeholder='enter a new task here...' 
							size={ 55 } 
							maxLength= {48} 
							required />
					</Col>
			
					<Col className='addBtn' sm = { 1 } > 
							<Button 
								className= { 'btn btn-success btn-sm' } 
								type= 'submit' 
								value= 'Add' > 
									Add Todo
							</Button>
					</Col>

					<Col className='reset' sm = { 1 } > 
							<Button 
								className= { 'btn btn-warning btn-sm' } 
								type = 'reset'> 
									Reset 
							</Button> 
					</Col>

				</Row>
			</Form>
		</Grid>
	);
};

// ========= ========= ========= 

TodoForm.propTypes = {
	addTodo: PropTypes.func.isRequired,
	_task: PropTypes.string.isRequired,
	_rank: PropTypes.string.isRequired,
	_date: PropTypes.string.isRequired,
};

TodoForm.defaultProps = {
	addTodo: f=>f,
	_task: '',
	_rank: '',
	_date: '2020-12-31'
};

// ========= ========= ========= 

export default TodoForm;