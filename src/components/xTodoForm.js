// ... used to create new Todo items
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoTitleBar from './TodoTitleBar';
import normalizeDate from '../helpers/normalizeDate';
import { connect } from 'react-redux';
import { createTodo } from '../actions/createActions';


import { Col, Button,  Form, FormControl, Grid, Row } from 'react-bootstrap';

// +++++++++ Styling  
const spacing = { 
	xs: { form: 12, rank: 3, date: 4, addBtn: 2, resetBtn: 2 }, 
	sm: { form: 4, rank: 2, date: 3, addBtn: 1, resetBtn: 1 } 
};

const styleTop = {
	backgroundColor: 'lightblue',
	padding: 5,
	marginBottom: 10,
};

const styleField = { margin: 3 }

// +++++++++   +++++++++ 

class TodoForm extends Component {

	constructor(props) {
		super(props)

// +++++++++ Ref  +++++++++ 

		this.state = {
			current: normalizeDate(new Date()), // formatted date, 
			date: '', // todo due date
			rank: '', // todo priority
			task: '', // todo task
		};

			this.onChange = this.onChange.bind(this);
			this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		console.log(
			`setting the state as: 
			${e.target.name} : ${e.target.value } `
		)
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit(e) {
		e.preventDefault();
		console.log('submitting the todo')
		this.props.createTodo (this.state);
		// +++++++++ Ref  +++++++++ 
		// is this need to reset the state after submit?
		this.setState({ date: '', task: '', rank: '' })
	}

	render() {
			// deconstruct state variables
			const { current, date, taks, rank } = this.state

			return (
				<Grid className = 'TodoForm'>
		
					<Col 
						xsHidden = { true } 
						smHidden = { false }
					>
						<TodoTitleBar/>
					</Col>
		
					<Form onSubmit = { this.onSubmit } >

						<Row style = { styleTop }  >
							<Col 
								style = { styleField }
								xs = { spacing.xs.form }
								sm = { spacing.sm.form }
							> 
								<FormControl 
									onChange = { this.onChange }
									className = 'task' 
									name = 'task'
									type = 'text'  
									maxLength = { 55 } 
									placeholder ='Enter a NEW task here...' 
									required 
								/>
							</Col>
		
							<Col 
								style = { styleField }
								xs = { spacing.xs.rank }
								sm = { spacing.sm.rank }
							> 
								<FormControl 
									onChange = { this.onChange }
									className = 'rank' 
									name = 'rank'
									componentClass = 'select' 
									bsSize = 'sm'
									defaultValue = 'Med'
								>
									<option value = 'High'>High</option>
									<option value = 'Med'>Med</option>
									<option value = 'Low'>Low</option>
		
					    	</FormControl>
							</Col>
		
							<Col 
								style = { styleField }
								xs = { spacing.xs.date }
								sm = { spacing.sm.date }
							>
								<FormControl 
									onChange = { this.onChange }
									className = 'date' 
									name = 'date'
									type = 'date'
									defaultValue = { current } 
									bsSize = 'sm'
									required 
								/> 
							</Col>
		
							<Col 
								style = { styleField }
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
								style = { styleField }
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
		}
};

TodoForm.propTypes = {
	createTodo: PropTypes.func.isRequired,
	// _date: PropTypes.string.isRequired,
	// _rank: PropTypes.string.isRequired,
	// _task: PropTypes.string.isRequired
};

TodoForm.defaultProps = {
	createTodo: f => f,
	// _date: '2020-12-31',
	// _rank: '',
	// _task: 'Default- not connected'
};

export default connect(null, { createTodo })(TodoForm);