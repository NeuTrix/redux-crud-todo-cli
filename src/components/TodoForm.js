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

const style = {
	top: { 
		backgroundColor: '#236C9C', 
		paddingTop: 8, 
		paddingBottom: 5 
	},
	field: { textAlign: 'left', marginBottom: 5 },
	plus: { fontSize: '1.25em', color: '#68c615' },
	add: 	{ 
		border: '1px solid lightgrey', 
		backgroundColor: 'white', 	
		color: 'green'
	},
};

const space = { 
	xs: { form: 12, addBtn: 2, rank: 4, date: 6 }, 
	sm: { form: 11, addBtn: 1, rank: 6, date: 6 },
	md: { form: 8, addBtn: 1, rank: 1, date: 2 } 
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
		<Grid className = 'TodoForm'>
			<Form onSubmit = { handleSubmit } >
				<Row style = { style.top }  >

					<Col 
						className = 'task' 
						style = { style.field }
						xs = { space.xs.form }
						sm = { space.sm.form }
						md = { space.md.form } 
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
						xs = { space.xs.addBtn } 
						sm = { space.sm.addBtn } 
						md = { space.md.addBtn } 
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
						xs = { space.xs.rank }
						sm = { space.sm.rank }
						md = { space.md.rank }
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
						xs = { space.xs.date }
						sm = { space.sm.date }
						md = { space.md.date }
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
		</Grid>
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