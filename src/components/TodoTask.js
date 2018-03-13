import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { Col, Button, Form, FormControl, Row } from 'react-bootstrap';
import shortid from 'shortid'

class TodoTask extends Component {

	constructor (props) {
		super(props);

		this.state = {
			item: this.props.item,
			task: this.props.item.task,
			_id: this.props.item._id,
			defStyle: this.props.style,
			isComplete: this.props.item.completed,
			isEditing: false,
			editStyle: { backgroundColor: 'aliceBlue', color: 'navy'}
		};

		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillReceiveProps (newProps) {
		this.setState({ defStyle: newProps.style, isComplete: newProps.item.completed });
	}

	handleClick(e) {
		e.preventDefault()

	}

	handleChange(e){
		e.preventDefault()
		// console.log(`====> Editing: ${e.target.value}!`)
		this.setState({ task: e.target.value })
	}

	handleSubmit(e){
		const { _id, task} = this.state
		console.log( _id, task)
		this.props.editTodo( _id, {task: task})
		alert('edited')
	}

	handleBlur(e){
		e.preventDefault()
	}
	// handleClick (e)  {

	// 	e.preventDefault();
	// 	let { isComplete, isEditing, editStyle, defStyle } = this.state

	// 	if (isComplete) {
	// 		alert(`Current completed status is "${isComplete}".\nPlease uncheck "completed" before continuing to edit`);
	// 		this.setState({ defStyle: this.props.style });
	// 	} else {
	// 		this.setState({ isEditing: true, defStyle: editStyle  });
	// 		e.target.setSelectionRange(0, e.target.value.length);
	// 	}
	// };

	// handleChange (e)  {
	// 	e.preventDefault();
	// 	console.log(`====> Editing: ${e.target.value}!`)
	// 	this.setState({ task: e.target.value})
	// 	this.props.editTodo(this.props.item._id, { task: this.state.task });
	// 	// let newt = e.target.value
	// };

	//  handleBlur (e)  {
	// 	e.preventDefault();
	//  	let { task } = this.state
	// 	// this.setState({ defStyle: this.props.style, isEditing: false });
	// };

// +++++++++   +++++++++ 


	render () {

// +++++++++ Styling  
	const space = { 
		xs: { form: 10, btn: 2 }, 
	};

		return (

			<div>
			<Row>
						{`The state task: ${this.state.task}`}
						{`_id: ${this.state._id}`}
					<Form onSubmit = { this.handleSubmit } >

				<Col xs = { space.xs.form } >
					<FormControl 
						className = 'task' 
						name = 'task'
						defaultValue = { this.props.item.task }
						required
						style = { this.state.style }
						type = 'text'  
						onClick = { this.handleClick }
						onChange = { this.handleChange }
						onBlur =  { this.handleBlur }
					/> 
				</Col>
				<Col xs = { space.xs.btn } >
						<Button type = 'submit' bsStyle = 'primary' >
		          Edit
		        </Button> 
				</Col>
					</Form>
			</Row>
			</div>
		);
	}
}

TodoTask.propTypes = {
	editTodo: PropTypes.func.isRequired,
	item: PropTypes.object.isRequired,
	style: PropTypes.object.isRequired,
};

TodoTask.defaultProps = {
	editTodo: f => f,
	item: {
		task: 'default from TodoTask.js',
		completed: false
	},
	style: {},
};

export default TodoTask;