import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
//  custom
import CheckComplete from '../buttons/CheckComplete';
import DatePicker from './DatePicker';
import DeleteButton from '../buttons/DeleteButton';
import Rank	from './Rank';
import TaskEntry from './TaskEntry';
// import { media } from '../../helpers/cssConstants';

const propTypes = {
	classes: PropTypes.instanceOf(Object).isRequired,
	deleteTodo: PropTypes.func.isRequired,
	editTodo: PropTypes.func.isRequired,
	item: PropTypes.object.isRequired,
};

const defaultProps = {
	deleteTodo: f => alert("default function triggered"),
	editTodo: f => alert("default function triggered"),
	item: {date: '2020-11-04'},
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
		const { classes } = this.props

		return (
			<FormControl 
				className= {classes.grid} 
				onSubmit= { this.handleSubmit } 
			>
				<TaskEntry
					className={classes.task}
					disabled= { this.state.completed }
					label="edit task"
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

				<Rank
					className={classes.rank}
					value= { this.state.rank }
					onBlur= { this.handleBlur }
					onChange= { this.handleChange }
			 	/> 

				<DatePicker 
					className={classes.datePicker}
					onBlur= { this.handleBlur }
					onChange= { this.handleChange }
					defaultValue= { this.state.date }
				/>

				<DeleteButton
					// className={classes.delete}
					style={{ gridArea:'delete'}}
					task={ task }
					_id={ _id }
					deleteTodo={ this.props.deleteTodo }
				/> 
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
		borderRadius: 5,
		display: 'grid',
		gridTemplateAreas: `
			" check task 	task " 
			" rank	date 	delete "
		`,
		gridTemplateColumns: '1fr 4fr 1fr',
		gridGap: '5px',
		padding: '10px',
	},

	/* iPad mini screen mode */
	[theme.breakpoints.up('xs')]: {
		gridGap: '5px',
		gridTemplateAreas:`
			" check task rank date delete " 
		`,
		gridTemplateColumns: '1fr 8fr 2fr 3fr 1fr',
	},

	checkBox: {
		gridArea: 'check',
		fontSize: '2em',
	},

	datePicker: {
		gridArea: 'date',
		background: 'white'
	},
	
	rank: {
		gridArea: 'rank',
		background: 'white'
	},

	task: {
		gridArea: 'task',
		background: 'white'
		// style for completed state
		// 	${ ({ isComplete }) => isComplete && `
		// color: lightgrey,
		// text - decoration: line - through,
		// background - color: whitesmoke,
		// `}
	},
	
});

TodoItem.propTypes = propTypes;
TodoItem.defaultProps = defaultProps;

export default withStyles(styles)(TodoItem);
