import React, { Component } from 'react';
import PropTypes from 'prop-types';
// material-ui
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
// custom
import DatePicker from './DatePicker';
import Rank from './Rank';
import TaskEntry from './TaskEntry';
import normalizeDate from '../../helpers/normalizeDate';

const propTypes = {
	classes: PropTypes.instanceOf(Object).isRequired,
	createTodo: PropTypes.func.isRequired,
	owner: PropTypes.string.isRequired, // id of the current list owner
};

class TodoForm extends Component {

	constructor(props) {
		super(props);
		const { owner } = this.props; // lint requires deconstruction
		this.state = {
			date: normalizeDate(new Date()),
			owner, // assign owner to state for createTodo function
			rank: 'Med',
			task: '',
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(e) {
		const { createTodo } = this.props;
		e.preventDefault();
		createTodo(this.state);
		this.setState({ task: '' });
	}

	handleChange(e) {
		e.preventDefault();
		this.setState({ [e.target.name]: e.target.value });
	}

	render() {
		const { classes } = this.props;
		const { date, rank, task } = this.state;

		return (
			<FormControl
				className={classes.grid}
				component="form"
				onSubmit={this.handleSubmit}
			>
				<TaskEntry
					style={{ gridArea: 'task' }}
					required
					value={task}
					onChange={this.handleChange}
				/>
				<Rank
					style={{ gridArea: 'rank' }}
					value={rank}
					onChange={this.handleChange}
				/>
				<DatePicker
					style={{ gridArea: 'date' }}
					value={date}
					onChange={this.handleChange}
				/>
				<Button
					className={classes.button}
					component="button"
					color="secondary"
					type="submit"
					variant="contained"
				>
					{'Add'}
				</Button>
			</FormControl>
		);
	}
}

const styles = theme => ({
	button: {
		gridArea: 'button',
		height: '80%',
		marginTop: 5, // adjust height against date, rank labels
	},

	grid: {
		/* mobile view */
		border: '1px solid',
		borderColor: theme.palette.secondary.main,
		borderRadius: 5,
		display: 'inline-grid',
		gridColumnGap: '10px',
		gridTemplateAreas: `
			" task task task "
			" rank date button "
		`,
		gridTemplateColumns: '2fr 4fr 1fr',
		marginBottom: 20,
		padding: 10,
		placeItems: 'center',
	},
});

TodoForm.propTypes = propTypes;

export default withStyles(styles)(TodoForm);
