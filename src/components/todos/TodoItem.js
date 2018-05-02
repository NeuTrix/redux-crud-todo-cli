import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//  custom
import CheckComplete from '../buttons/CheckComplete';
import DeleteBtn from '../buttons/DeleteBtn';
import { colors, media } from '../../helpers/cssConstants';

// +++++++++ CSS +++++++++ 

const Grid = styled.form `
	/* mobile mode */

	display: grid;
	grid-template-areas:
		" check 	task 		task 		task " 
		" ... 		rank 		date 		dele	" 
	;

	grid-template-columns: 1fr 3fr 4fr 1fr;
	grid-gap: 10px;

	background-color: aliceblue;
	border: 2px solid lightsteelblue;
	padding: 10px;

	/* iPad mini screen mode */

	@media (${media._large}) {
		grid-template-areas:
		" check 	task 	rank 	date 	dele " 
		;

		grid-template-columns: 1fr 8fr 2fr 3fr 1fr;
		grid-gap: 10px;
	}
`;

const Checked = styled(CheckComplete) `
	grid-area: check;
`;

const DatePick = styled.input `
	grid-area: date;
	text-indent: 10px;
`;
const Delete = styled(DeleteBtn) `
	grid-area: dele;
`;

const Rank = styled.select `
	grid-area: rank;
`;

const Task = styled.input `
	grid-area: task;
  text-indent: 10px;

  ${ ({ isComplete }) => isComplete && `
  	color: lightgrey;
  	text-decoration: line-through;
  	background-color: whitesmoke;
  `}
`;

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
		const { className } = this.props

		return (
			<Grid 
				className= {`TodoItem ${className} engrBox boxClr paper`} 
				onSubmit= { this.handleSubmit } 
			>
				<Task 
					isComplete= { this.state.completed }
					className= '_task'
					name= 'task'
					type= 'text'
					defaultValue= { this.state.task }
					onBlur= { this.handleBlur }
					onChange= { this.handleChange }
					onFocus= { this.handleEdit }
				/>

				<Checked
					className= '_checked'
					style = {this.checkStyle}
					name= 'complete'
					_id= { this.props.item._id }
					completed= { this.state.completed }
					editTodo= { this.props.editTodo }
				/>

				<Rank
					className= '_rank mat'
					name= 'rank'
					type= 'select'
					defaultValue= { this.state.rank }
					onBlur= { this.handleBlur }
					onChange= { this.handleChange }
			 	> 
					<option value= 'High'> High	</option>
					<option value= 'Med'>	Med		</option>
					<option value= 'Low'>	Low		</option>
				</Rank>

				<DatePick 
					className= '_date mat'
					name= 'date' 
					type= 'date'
					onBlur= { this.handleBlur }
					onChange= { this.handleChange }
					defaultValue= { this.state.date }
				/>

				<Delete
					className= '_delete'
					name= 'delete'
					type= 'button'
					task= { task }
					_id = { _id }
					deleteTodo= { this.props.deleteTodo }
				/> 

			</Grid>
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