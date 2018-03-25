// ... used to create new Todo items
import React from 'react';
import PropTypes from 'prop-types';
import normalizeDate from '../helpers/normalizeDate';
import { 
	Button, 
	Clearfix,
	Col, 
	Form, 
	FormControl, 
	Glyphicon,
	Grid, 
	Row 
} from 'react-bootstrap';

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
		xs: { pen: 1, form: 10, addBtn: 1, rank: 6, date: 6,  }, 
		sm: { pen: 1, form: 10, addBtn: 1, rank: 6, date: 6,  } ,
		md: { pen: 1, form: 6, addBtn: 1, rank: 2, date: 2,  } 
	};

	const styleTop = {
		backgroundColor: 'lightblue',
		padding: 5,
		marginBottom: 10,
	};

	const styleField = {
		textAlign: 'left',
		marginTop: 3,
		marginBottom: 5,
	}

	// +++++++++ 

	return (
		<Grid className = 'TodoForm'>
			<h1>
				Do the things...
			</h1>

			<Form onSubmit = { handleSubmit } >

				<Row style = { styleTop }  >

				<Col
					xs = { spacing.xs.pen }
					sm = { spacing.sm.pen }
					xsHidden = 'true'
						
					md = { spacing.md.pen } 
					style = {{
						textAlign: 'right', 
					}}
				>
				<Glyphicon 
					glyph = 'pencil' 
					style = {{ 
						color: 'steelblue', 
						fontSize: '1.5em',  
						paddingTop: 5
					}} />
					
					</Col>

					<Col 
						style = { styleField }
						className = 'task' 
						xs = { spacing.xs.form }
						sm = { spacing.sm.form }
						md = { spacing.md.form } 
					> 
						
						<FormControl 
							inputRef = { (input) => { _task = input;} } 
							type = 'text'  
							maxLength = { 55 } 
							placeholder ='Enter a NEW task here...' 
							required 
						/>
					</Col>
					<Clearfix visibleSmBlock />
					<Col 
						style = { styleField }
						className = 'addBtn' 
						xs = { spacing.xs.addBtn } 
						sm = { spacing.sm.addBtn } 
						md = { spacing.md.addBtn } 
					>
						<Button 
							className = { 'btn btn-sm' } 
							type = 'submit' 
							value = 'Add'
							style = { { 
								border: '1px solid grey', 
								backgroundColor: 'whitesmoke', 
								color: 'green',
							} }
						>
							<Glyphicon 
								glyph = 'plus'
								style = { {  fontSize: '1.35em' } }
							 />
						</Button>

					</Col>

					<Col 
						style = { styleField }
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
						style = { styleField }
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