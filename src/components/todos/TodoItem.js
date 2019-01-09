import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
//  custom
import CheckComplete from '../buttons/CheckComplete';
import DatePicker from './DatePicker';
import DeleteButton from '../buttons/DeleteButton';
import Rank from './Rank';
import TaskEntry from './TaskEntry';

const propTypes = {
	classes: PropTypes.instanceOf(Object).isRequired,
	deleteTodo: PropTypes.func.isRequired,
	editTodo: PropTypes.func.isRequired,
	item: PropTypes.instanceOf(Object).isRequired,
};
// currently need to prevent `undefined` errors on `item`
const defaultProps = {
	deleteTodo: f => f,
	editTodo: f => f,
	item: {
		_id: 'placeholder',
		date: '1963-12-14',
	},
};

class TodoItem extends Component {

	constructor(props) {
		super(props);
		const { item } = this.props;
		console.log('*****', item);
		this.state = {
			_id: item._id || '',
			completed: item.completed,
			date: item.date.slice(0, 10) || '',
			rank: item.rank || '',
			task: item.task || '',
		};

		this.handleBlur = this.handleBlur.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleBlur(e) {
		const { editTodo, item } = this.props;
		e.preventDefault();
		editTodo(item._id, this.state);
	}

	handleChange(e) {
		e.preventDefault();
		this.setState({ [e.target.name]: e.target.value });
	}

	handleEdit(e) {
		e.preventDefault();
		e.target.setSelectionRange(0, e.target.value.length);
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSubmit(e) {
		const { editTodo, item } = this.props;
		e.preventDefault();
		editTodo(item._id, this.state);
	}

	render() {
		const {
			_id, completed, date, rank, task,
		} = this.state;
		const {
			classes, deleteTodo, editTodo, item,
		} = this.props;

		return (
			<FormControl
				className={classes.grid}
				component="form"
				onSubmit={this.handleSubmit}
			>
				<TaskEntry
					className={classes.task}
					disabled={completed}
					label="edit task"
					value={task}
					onBlur={this.handleBlur}
					onChange={this.handleChange}
					onFocus={this.handleEdit}
				/>

				<CheckComplete
					_id={item._id}
					className={classes.checkBox}
					completed={completed}
					editTodo={editTodo}
					name="complete"
					>

				<Rank
					className={classes.rank}
					disabled={completed}
					value={rank}
					onBlur={this.handleBlur}
					onChange={this.handleChange}
				/>

				<DatePicker
					className={classes.datePicker}
					disabled={completed}
					value={date}
					onBlur={this.handleBlur}
					onChange={this.handleChange}
				/>

				<DeleteButton
					// className={classes.delete}
					style={{ gridArea: 'delete' }}
					task={task}
					_id={_id}
					deleteTodo={deleteTodo}
				/>
			</FormControl>
		);
	}
}

const styles = theme => ({
	checkBox: {
		display: 'inline-grid',
		gridArea: 'check',
		placeContent: 'center',
	},

	datePicker: {
		background: 'white',
		gridArea: 'date',
	},

	grid: {
		backgroundColor: theme.palette.primary.light,
		border: '2px solid',
		borderColor: theme.palette.primary.main,
		borderRadius: 5,
		display: 'inline-grid',
		gridGap: '5px',
		gridTemplateAreas: `
			" task task check"
			" rank date delete "
		`,
		gridTemplateColumns: '2fr 4fr 1fr',
		padding: '10px',
		width: '100%',
	},

	[theme.breakpoints.up('xs')]: {
		gridGap: '5px',
		gridTemplateAreas: `
			" check task rank date delete " 
		`,
		gridTemplateColumns: '1fr 8fr 2fr 3fr 1fr',
	},

	rank: {
		background: 'white',
		gridArea: 'rank',
	},

	task: {
		background: 'white',
		gridArea: 'task',
	},
});

TodoItem.propTypes = propTypes;
TodoItem.defaultProps = defaultProps;

export default withStyles(styles)(TodoItem);
