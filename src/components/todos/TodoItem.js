//  vendor
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//  custom
import './TodoItem.grid.css';
import CheckComplete from '../buttons/CheckComplete';
import DeleteBtn from '../buttons/DeleteBtn';

// +++++++++ CSS +++++++++ 

const style= {
	backgroundColor: 'aliceblue',
	border: '2px solid lightsteelblue',
	padding: 10,
}

// +++++++++ COMPONENT +++++++++ 

class TodoItem extends Component {

	constructor (props) {
		super(props);
		this.state = {
			completed: this.props.item.completed,
			date: (this.props.item.date.slice(0,10) :''),
			rank: this.props.item.rank,
			task: this.props.item.task, 
			_id: this.props.item._id,
		}

		const isComplete = this.state.completed 

		this.style = {
			gridArea: 'task',
			border: '3px solid #bbbbbb',
			padding: 5,
			backgroundColor: isComplete ?'whitesmoke' : 'white',
			textDecoration: isComplete ?'line-through': 'none',
			color: isComplete ? '#bbbbbb': 'grey',
		}

		this.handleBlur 	= this.handleBlur.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleEdit 	= this.handleEdit.bind(this)
		this.handleSubmit= this.handleSubmit.bind(this)
	}

	handleBlur(e) {
		e.preventDefault();
		this.props.editTodo(this.props.item._id, this.state)
	}

	handleChange(e) {
		e.preventDefault();
		this.setState ({ [ e.target.name ]: e.target.value })
	}

	handleEdit(e) {
		e.preventDefault();
		if (this.state.completed) {
			alert('Please uncheck `completed` before editing')
		} 
			e.target.setSelectionRange(0, e.target.value.length);
	}

	handleSubmit(e) {
		e.preventDefault ();
		this.props.editTodo (this.props.item._id, this.state);
	};

	render () {
		const { task, _id } = this.state

		return (
			<form 
				className= 'TodoItem_wrapper engrBox boxClr paper' 
				style= { style } 
				onSubmit= { this.handleSubmit } 
			>
				<input 
					className= 'task'
					name= 'task'
					style= { this.style}
					type= 'text'
					defaultValue= { this.state.task }
					onBlur= { this.handleBlur }
					onChange= { this.handleChange }
					onFocus= { this.handleEdit }
				/>

				<CheckComplete
					className= 'done'
					name= 'complete'
					_id= { this.props.item._id }
					completed= { this.state.completed }
					editTodo= { this.props.editTodo }
					style= {{ gridArea: 'done' }}
				/>

				<select
					className= 'rank mat'
					name= 'rank'
					style= {{ gridArea: 'priority'}} 
					type= 'select'
					defaultValue= { this.state.rank }
					onBlur= { this.handleBlur }
					onChange= { this.handleChange }
			 	> 
					<option value= 'High'> High	</option>
					<option value= 'Med'>	Med		</option>
					<option value= 'Low'>	Low		</option>
				</select>

				<input 
					className= 'date mat'
					name= 'date' 
					style= {{ gridArea: 'date' }} 
					type= 'date'
					onBlur= { this.handleBlur }
					onChange= { this.handleChange }
					defaultValue= { this.state.date }
				/>

				<DeleteBtn 
					className= 'delete'
					name= 'delete'
					type= 'button'
					task= { task }
					_id = { _id }
					deleteTodo= { this.props.deleteTodo }
				/> 

			</form>
		)
	}
};

// +++++++++ PROPS +++++++++ 

TodoItem.propTypes= {
	deleteTodo: PropTypes.func.isRequired,
	editTodo: PropTypes.func.isRequired,
	item: PropTypes.object.isRequired,
};

TodoItem.defaultProps= {
	deleteTodo: f => alert("default function triggered"),
	editTodo: f => alert("default function triggered"),
	item: { date: '2020-11-04'},
};

export default TodoItem;