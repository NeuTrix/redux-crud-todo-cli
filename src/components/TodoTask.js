import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row, FormGroup, FormControl } from 'react-bootstrap';
import CheckComplete from './CheckComplete'

// ========= 

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


class TodoTask extends Component {

	constructor (props) {
		super(props)

		this.state = {
			isEditing: false,
			isCompleted: this.propgas.item.completed,
			_task: this.props.item.task,
			_id: this.props.item._id,
			_style: defaultStyle
		}
	}

	componentWillMount(){
		if (this.state.isCompleted) {
				 this.setState( {_style: isCompletedStyle })
				} 
	}

	render () {

	
	// ========= Functions

	const handleTaskEdit = (event) => {
		event.preventDefault();
		let newTask = event.target.value;
		this.props.updateTask(this.state._id, newTask);
	};

	const handleFocus = (event) => {
		event.preventDefault();
		this.setState({ isEditing: true })
		this.setState({ _style: isEditingStyle })
		let taskBox = event.target
			taskBox.setSelectionRange( 0, taskBox.value.length)
	};

	const handleBlur = (event) => {
		event.preventDefault();
		this.setState({ isEditing: false })
		this.setState({ _style: defaultStyle })
	};


	const spacing = { 
			xs: { check: 1, task: 10 },
			sm: { check: 1, task: 10 },
		};
/*
	const handleClick = (event) => {
		event.preventDefault();
		let taskBox = event.target
		console.log(taskBox)*/
		
		// 
		// if(props.item.completed) {
		// 		alert('To Edit, uncheck task completed');
		// 	}
		// };

				// onBlur = { onBlurStyle } 
				// onClick = { handleClick } 
				// onChange = { handleTaskEdit }


		return (
			<FormGroup>
				<Row>
					<Col 
						xs = { spacing.xs.check } 
						sm = { spacing.sm.check } 
					>
						<CheckComplete
								_id = { this.state._id }
								_completed = { this.state.isCompleted}
							/>
					</Col>
					
					<Col 
						xs = { spacing.xs.task } 
						sm = { spacing.sm.task } 
					>

						<FormControl 
							onFocus = { handleFocus }
							onChange = { handleTaskEdit }
							onBlur =  { handleBlur }

							className= 'task' 
							defaultValue= { this.state._task }
							required
							style = { this.state._style }
							type = 'text'  
						/> 
					</Col>
				</Row>
			</FormGroup>
		)
	}

}; 


// ========= Props 

TodoTask.propTypes = {
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
		updateTask: f => f,
		toggleComplete: f => f
};

export default TodoTask;