import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
//  custom
import CheckComplete from '../buttons/CheckComplete';
import DeleteBtn from '../buttons/DeleteBtn';
import TaskEntry from './TaskEntry';
import { media } from '../../helpers/cssConstants';

const propTypes = {
	classes: PropTypes.instanceOf(Object).isRequired,
	deleteTodo: PropTypes.func.isRequired,
	editTodo: PropTypes.func.isRequired,
	item: PropTypes.object.isRequired,
};

const defaultProps = {
	deleteTodo: f => alert("default function triggered"),
	editTodo: f => alert("default function triggered"),
	item: {
		date: '2020-11-04'
	}
};

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
		this.handleSubmit = this.handleSubmit.bind(this)
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
		e.target.setSelectionRange(0, e.target.value.length);
	}

	handleSubmit(e) {
		e.preventDefault ();
		this.props.editTodo (this.props.item._id, this.state);
	};

	render () {
		const { task, _id } = this.state
		const { className, classes } = this.props

		return (
			<FormControl 
				className= {classes.grid} 
				onSubmit= { this.handleSubmit } 
			>
				<TaskEntry
					className={classes.task}
					disabled= { this.state.completed }
					value= { this.state.task }
					onBlur= { this.handleBlur }
					onChange= { this.handleChange }
					onFocus= { this.handleEdit }
				/>

				{/* <CheckComplete
					className={classes.checkBox}
					style = {this.checkStyle}
					name= 'complete'
					_id= { this.props.item._id }
					completed= { this.state.completed }
					editTodo= { this.props.editTodo }
				/> */}

				{/* <Rank
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
				</Rank> */}

				{/* <DatePick 
					className= '_date mat'
					name= 'date' 
					type= 'date'
					onBlur= { this.handleBlur }
					onChange= { this.handleChange }
					defaultValue= { this.state.date }
				/> */}

				{/* <Delete
					className= '_delete'
					name= 'delete'
					type= 'button'
					task= { task }
					_id = { _id }
					deleteTodo= { this.props.deleteTodo }
					/>  */}
			</FormControl>
		)
	}
};

const styles = theme => ({
	grid: {
		/* mobile mode */
		backgroundColor: 'aliceblue',
		border: '2px solid',
		borderColor: theme.palette.primary.main,
		display: 'inline-grid',
		gridTemplateAreas: `
			" check task 	task 	task " 
			" 	.		rank 	date 	dele "
		`,
		gridTemplateColumns: '1fr 3fr 4fr 1fr',
		gridGap: '5px',
		padding: '10px',
	},

	/* iPad mini screen mode */
	[theme.breakpoints.up('xs')]: {
		gridGap: '5px',
		gridTemplateAreas:`
			" check task rank date dele " 
		`,
		gridTemplateColumns: '1fr 8fr 2fr 3fr 1fr',
	},

	checkBox: {
		gridArea: 'check',
		fontSize: '2em',
	},

	task: {
		gridArea: 'task',
		background: 'white'
		// style for completed state
	},

	
	// const DatePick = styled.input `
	// 	grid-area: date,
	// 	text-indent: 10px,
	// `,
	// const Delete = styled(DeleteBtn)
	// `
	// 	grid-area: dele,
	// 	font-size: 2em,
	// `,
	
	// const Rank = styled.select `
	// 	grid-area: rank,
	// `,
	

	
	// 	${ ({ isComplete }) => isComplete && `
	// color: lightgrey,
	// text - decoration: line - through,
	// background - color: whitesmoke,
	// `}
});

TodoItem.propTypes = propTypes;
TodoItem.defaultProps = defaultProps;

export default withStyles(styles)(TodoItem);

