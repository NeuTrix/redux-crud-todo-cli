import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
//  custom
import normalizeDate from '../../helpers/normalizeDate';
import { colors, media } from '../../helpers/cssConstants';


// +++++++++ CSS  +++++++++ 

const Grid = styled.form `
	/* mobile view */
	display: grid;
	grid-template-areas:
		" glyph task  task  task "
		" ...	 	rank 	date 	add " 
	;
	grid-template-columns: 1fr 3fr 4fr 1fr;
	grid-gap: 10px;

	background-color: aliceblue;
	padding: 10px;
	margin-bottom: 20px;

	& * {
		font-size: 1em;
		&:hover {
			color: lime;
		}
	}

	/* iPad and large view */
	@media (${media._medium}) {
		grid-template-areas: 
			" ...  	...   ...  	...   ...  "
			" glyph 	task  rank  date 	add  "
			" ...  	...   ...  	...   ...  "
		;
		grid-template-columns: 1fr 8fr 2fr 3fr 1fr;
	}
`;

const Add = styled.button `
	grid-area: add;
	color: #00cc00;
	background: none;
  border: none;
	font-size: 2em;
	`;

const DatePick = styled.input `
	grid-area: date;
	text-indent: 10px;
`;

const Rank = styled.select `
	grid-area: rank;
`;

const Task = styled.input `
	grid-area: task;
	color: steelblue;
  text-indent: 10px;
`;

const Glyph = styled.i `
	grid-area: glyph;
	color: ${colors._iceblue} ;
	font-size: 1.5em;
`;


// +++++++++ COMPONENT +++++++++ 

class TodoForm extends Component {

	constructor (props) {
		super(props);
		this.state = {
			date: normalizeDate(new Date()) ,
			task: '', 
			rank: 'Med',
		 	owner: this.props.owner ,
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleSubmit(e) {
		e.preventDefault ();
		this.props.createTodo (this.state);
		this.setState ({ task: ''})
	};

	handleChange(e) {
		e.preventDefault();
		this.setState ({ [ e.target.name ]: e.target.value })
	}

	render () {

		return (
			<Grid 
				className= { `TodoForm ${ this.props.className } 
				boxClr engrBox` } 
				onSubmit= { this.handleSubmit } 
			>
				<Glyph className = 'ctr engr fa fa-tasks fa-lg'/>

				<Task 
					id= 'new_item_task'
					type= 'text'
					name= 'task'
					value= { this.state.task }
					onChange= { this.handleChange }
					placeholder= 'Enter a new task here'
					autoFocus
					required
				/> 

				<Rank
					className= 'mat'
					id= 'new_item_priority' 
					name= 'rank'
					type= 'select'
					value= { this.state.rank }
					onChange= { this.handleChange }
			 	> 
					<option value= 'High'> High	</option>
					<option value= 'Med'>	Med		</option>
					<option value= 'Low'>	Low		</option>
					
				</Rank>

				<DatePick 
					className= 'mat'
					id= 'new_item_date'
					name= 'date' 
					type= 'date'
					onChange= { this.handleChange }
					value= { this.state.date }
				/>

				<Add 
					className= 'ctr engr fa fa-plus fa-2x'
					id= 'new_item_submit'
					type= 'submit' 
				> 
				</Add> 

			</Grid>
		)
	}
};

// +++++++++ PROPS +++++++++ 

TodoForm.propTypes = {
	createTodo: PropTypes.func.isRequired,
	owner: PropTypes.string.isRequired
};

TodoForm.defaultProps = {
	createTodo: f => f,
	owner: 'Default from APP.js'
};

export default TodoForm;