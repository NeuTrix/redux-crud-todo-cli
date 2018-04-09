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
	OverlayTrigger,
	Tooltip, 
	Row 
} from 'react-bootstrap';

const style = {
	top: { backgroundColor: '#236C9C', padding: 10 },
	field: { textAlign: 'left', marginBottom: 5 },
	plus: { fontSize: '1.35em' },
	add: { border: '1px solid lightgrey', backgroundColor: 'white', color: 'green'},
	pen: { textAlign: 'right', color: 'whitesmoke', paddingTop: 8},
};

const spacing = { 
	xs: { pen: 1, form: 10, addBtn: 2, rank: 4, date: 6 }, 
	sm: { pen: 1, form: 10, addBtn: 1, rank: 6, date: 6 },
	md: { pen: 1, form: 6, addBtn: 1, rank: 2, date: 2 } 
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

	const tooltipAdd = (
		<Tooltip id = 'tooltipAdd' >
			Add a new todo task
		</Tooltip>
	) 

	return (
		<Grid className = 'TodoForm'>
			<Form onSubmit = { handleSubmit } >
				<Row style = { style.top }  >
					<Col
						xs = { spacing.xs.pen } xsHidden = { true }
						sm = { spacing.sm.pen }
						md = { spacing.md.pen } 
						style = { style.pen } 
					>
						<Glyphicon glyph = 'pencil' />
					</Col>

					<Col 
						className = 'task' 
						style = { style.field }
						xs = { spacing.xs.form }
						sm = { spacing.sm.form }
						md = { spacing.md.form } 
					> 
						<FormControl 
							inputRef = { (input) => { _task = input;} } 
							type = 'text'  
							placeholder ='Enter a NEW task here...' 
							required 
						/>
					</Col>
					<Col 
						className = 'addBtn' 
						xs = { spacing.xs.addBtn } 
						sm = { spacing.sm.addBtn } 
						md = { spacing.md.addBtn } 
					>
						<OverlayTrigger 
							placement = 'bottom' 
							overlay = {tooltipAdd }  
						>
							<Button 
								className = { 'btn btn-sm' } 
								type = 'submit' 
								value = 'Add'
								style = { style.add }
							>
								<Glyphicon glyph = 'plus'style = { style.glyph }/>
							</Button>
						</OverlayTrigger>
					</Col>

					<Col 
						style = { style.field }
						className = 'rank' 
						xs = { spacing.xs.rank }
						sm = { spacing.sm.rank }
						md = { spacing.md.rank }
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
						xs = { spacing.xs.date }
						sm = { spacing.sm.date }
						md = { spacing.md.date }
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