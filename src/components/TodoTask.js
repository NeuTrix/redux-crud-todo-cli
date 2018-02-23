import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row, FormGroup, FormControl } from 'react-bootstrap';
import CheckComplete from './CheckComplete'

// ========= Stlyling

const defaultStyle = {
	backgroundColor: 'white', 
	color: 'black' 
}

const isEditingStyle = {
	backgroundColor: 'mintCream', 
	color: 'blue' 
}

const isCompletedStyle = {
		marginBottom: 10,
		backgroundColor: 'whitesmoke', 
		color: 'lightgrey',
		textDecoration: 'line-through' 
}

// ========= Component

class TodoTask extends Component {

	constructor (props) {
		super(props)

		this.state = {
			isEditing: false,
			isCompleted: this.props.item.completed,
			_style: defaultStyle
		}
	}

	componentWillMount(){
		if (this.state.isCompleted) {
		 this.setState({_style: isCompletedStyle })
		} 
	}

	render () {
	
		const handleFocus = (event) => {
			event.preventDefault();
			event.target.setSelectionRange( 0, event.target.value.length)
			this.setState({ _style: isEditingStyle })
			this.setState({ isEditing: true })
		};

		const handleClick = (event) => {
			let _comp = this.state.isCompleted 
			_comp ?
				alert(`Task completed is currentl: ${_comp}. Please uncheck completed box before editing`) :
				this.setState ({ _style: isCompletedStyle })
		}

		const handleChange = (event) => {
			event.preventDefault();
			let newTask = event.target.value;
			this.props.updateTask(this.props._id, newTask);
		};

		const handleBlur = (event) => {
			event.preventDefault();
			this.state.isCompleted ?
			  this.setState({ _style: isCompletedStyle }) :
				this.setState({ _style: defaultStyle })
			this.setState({ isEditing: false })
		};

		const spacing = { 
				xs: { check: 1, task: 10 },
				sm: { check: 1, task: 10 },
			};

		return (
			<FormGroup>
				<Row>
					<Col 
						xs = { spacing.xs.check } 
						sm = { spacing.sm.check } 
					>
						<CheckComplete
								_id = { this.props._id }
								_completed = { this.state.isCompleted}
								toggleComplete = { this.props.toggleComplete }
							/>
					</Col>
					
					<Col 
						xs = { spacing.xs.task } 
						sm = { spacing.sm.task } 
					>

						<FormControl 
							onFocus = { handleFocus }
							onClick = { handleClick }
							onChange = { handleChange }
							onBlur =  { handleBlur }

							className= 'task' 
							defaultValue= { this.props.task }
							required
							style = { this.state._style }
							type = 'text'  
						/> 
					</Col>
				</Row>
			</FormGroup>
		) //return
	}; //render
}; //component

// ========= Props 

TodoTask.propTypes = {
	_id: PropTypes.string.isRequired,
	task: PropTypes.string.isRequired,
	item: PropTypes.object.isRequired,
	updateTask: PropTypes.func.isRequired
};

TodoTask.defaultProps = {
	item: { 
		_id: 'default',
		completed: false,
		details: 'default',
		date: '2018-12-31',
		owner: 'default',
		rank: 'default',
		task: 'default'
	},
	task: 'default',
		updateTask: f => f,
		toggleComplete: f => f
};

export default TodoTask;