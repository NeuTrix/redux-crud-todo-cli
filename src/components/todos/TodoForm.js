import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input  from '@material-ui/core/Input';
import normalizeDate from '../../helpers/normalizeDate';
// import { colors, media } from '../../helpers/cssConstants';

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
				<i className={classes.glyph} />

				<Input
					className={classes.task}
					value={task}
					fullWidth
					id="new_item_task"
					name="task"
					placeholder="Enter a new task here"
					required
					type="text"
					onChange={this.handleChange}
				/>

				<select
					className={classes.rank}
					id="new_item_priority"
					name="rank"
					type="select"
					defaultValue={rank}
					onBlur={this.handleChange}
				>
					<option value="High">High</option>
					<option value="Med">Med</option>
					<option value="Low">Low</option>

				</select>

				<input
					className={classes.datePick}
					id="new_item_date"
					name="date"
					type="date"
					defaultValue={date}
					onChange={this.handleChange}
				/>

				<Button
					className={classes.add}
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

const styles = {
	grid: {
		/* mobile view */
		backgroundColor: 'aliceblue',
		display: 'grid',
		gridGap: 10,
		gridTemplateAreas: `
			" task task task "
			" rank date add " 
		`,
		gridTemplateColumns: '3fr 3fr 2fr',
		gridRowGap: 200,
		gridColumnGap: 20,
		marginBottom: 20,
		placeContents: 'center',
		padding: 10,
		// & * {
		// font-size: 1em,
		// &:hover {
		// color: steelblue,
		// }
	},

	/* iPad and large view */
	// @media (${media._medium}) {
	// gridTemplateAreas:
	// " glyph task  rank  date add  "
	// ,
	// gridTemplateColumns: 1fr 8fr 2fr 3fr 1fr,
	// },

	add: {
		// background: 'none',
		// border: 'none',
		// color: '#00cc00',
		// fontSize: '2em',
		gridArea: 'add',
		maxWidth: 50,
	},

	datePick: {
		gridArea: 'date',
		textIndent: 10,
	},

	glyph: {
		color: 'aliceblue',
		fontSize: '1.5em',
		gridArea: 'glyph',
	},

	rank: {
		gridArea: 'rank',
	},

	task: {
		gridArea: 'task',
		marginBottom: 15,
		textIndent: 10,
		// &: hover {
		// color: 'steelblue'
		// }
	},

};

TodoForm.propTypes = propTypes;

export default withStyles(styles)(TodoForm);
