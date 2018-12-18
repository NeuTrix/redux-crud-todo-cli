import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import normalizeDate from '../../helpers/normalizeDate';

const propTypes = {
	classes: PropTypes.instanceOf(Object).isRequired,
	createTodo: PropTypes.func.isRequired,
};

class TodoForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			date: normalizeDate(new Date()),
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
				<TextField
					className={classes.task}
					value={task}
					fullWidth
					id="new_item_task"
					label="enter new task"
					margin="dense"
					name="task"
					required
					type="text"
					variant="outlined"
					onChange={this.handleChange}
				/>

				<TextField
					className={classes.rank}
					fullWidth
					id="new_item_priority"
					label="rank"
					margin="dense"
					name="rank"
					select
					variant="outlined"
					value={rank}
					onChange={this.handleChange}
				>
					<option value="High">High</option>
					<option value="Med">Med</option>
					<option value="Low">Low</option>

				</TextField>

				<TextField
					className={classes.datePick}
					id="new_item_date"
					fullWidth
					label="set due date"
					margin="dense"
					name="date"
					type="date"
					value={date}
					variant="outlined"
					onChange={this.handleChange}
				/>

				<Button
					className={classes.button}
					component="button"
					id="new_item_submit"
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
	},

	datePick: {
		flexDirection: 'unset',
		gridArea: 'date',
	},

	glyph: {
		color: 'aliceblue',
		fontSize: '1.5em',
		gridArea: 'glyph',
	},

	grid: {
		/* mobile view */
		border:'1px solid',
		borderColor: theme.palette.secondary.main,
		display: 'inline-grid',
		gridColumnGap: '20px',
		gridTemplateAreas: `
			" task task task "
			" rank date button " 
		`,
		gridTemplateColumns: '3fr 4fr 1fr',
		marginBottom: 20,
		padding: 10,
		placeItems: 'center',
	},

	menu: {
		background: 'orange',
		width: 200,
	},

	rank: {
		gridArea: 'rank',
	},

	task: {
		gridArea: 'task',
		marginBottom: 10,
		textIndent: 10,
	},
});

TodoForm.propTypes = propTypes;

export default withStyles(styles)(TodoForm);
