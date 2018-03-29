import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import DeleteBtn from '../components/DeleteBtn';
import { Col, Form, FormControl, Row } from 'react-bootstrap';

const space = { 
	xs: { form: 10, delt: 1 }, 
	sm: { form: 10, delt: 1 }, 
	md: { form: 11, delt: 1 }, 
	lg: { form: 11, delt: 1 }, 
};

// +++++++++   +++++++++ 

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

		this.handleBlur = this.handleBlur.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleFocus = this.handleFocus.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillReceiveProps (newProps) {
		this.setState({ defStyle: newProps.style, isComplete: newProps.item.completed });
	}

	handleClick(e) {
		e.preventDefault()
		let { isComplete, editStyle } = this.state

		if (isComplete) {
			alert(`completed is: "${isComplete}".\nPlease uncheck "completed" before continuing to edit`);
			this.setState({ defStyle: this.props.style });
		} else {
			this.setState({ isEditing: true, defStyle: editStyle  });
		}
	}

	handleChange(e){
		e.preventDefault()
		this.setState({ task: e.target.value })
	}

	handleSubmit(e){
		e.preventDefault()
		const { _id, task} = this.state
		this.props.editTodo( _id, {task: task})
	}

	handleFocus(e){
		e.preventDefault()
			e.target.setSelectionRange(0, e.target.value.length);
	}

	handleBlur(e){
		e.preventDefault()
		const { _id, task} = this.state
		this.props.editTodo( _id, {task: task})
	}
	
	render () {
		
		return (
			<div>
				<Row style = {{ marginBottom: 4 }} >
					<Form onSubmit = { this.handleSubmit } >
						<Col 
							xs = { space.xs.form } 
							sm = { space.sm.form } 
							md = { space.md.form } 
							lg = { space.lg.form } 
						>
							<FormControl 
								className = 'task' 
								name = 'task'
								defaultValue = { this.props.item.task }
								required
								style = { this.state.defStyle }
								type = 'text'  
								onClick = { this.handleClick }
								onChange = { this.handleChange }
								onFocus =  { this.handleFocus }
								onBlur = { this.handleBlur}
							/> 
						</Col>
						<Col 
							className = 'delete'
							xs = { space.xs.delt } 
							sm = { space.sm.delt } 
							md = { space.md.delt } 
							lg = { space.lg.delt }
						>
							<DeleteBtn 
								task = { this.props.item.task } 
								_id = { this.props.item._id }
								deleteTodo = { this.props.deleteTodo } 
							/>
						</Col>
					</Form>
				</Row>
			</div>
		);
	}
}

// +++++++++   +++++++++ 

TodoTask.propTypes = {
	deleteTodo: PropTypes.func.isRequired,
	item: PropTypes.object.isRequired,
	style: PropTypes.object.isRequired,
};

TodoTask.defaultProps = {
	deleteTodo: f => f,
	item: {
		task: 'default from TodoTask.js',
		completed: false
	},
	style: {},
};

export default TodoTask;