import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const propTypes = {
	classes: PropTypes.instanceOf(Object).isRequired,
	todos: PropTypes.instanceOf(Array).isRequired,
};

const TaskCounter = (props) => {
	// todos rep the total num of items in current todolist
	const { classes, todos } = props;
	const counter = (
		<span className={classes.counter}>
			{ todos && todos.length }
		</span>
	);

	return (
		<div>
			<Typography variant="h4">
				{'Todos:'}
				{console.log(props)}
				{counter}
			</Typography>
		</div>
	);
};

const styles = theme => ({
	counter: {
		color: theme.palette.primary.main,
		gridArea: 'count',
		justifyContent: 'left',
		paddingLeft: 10,
	},
});

TaskCounter.propTypes = propTypes;

export default withStyles(styles)(TaskCounter);
