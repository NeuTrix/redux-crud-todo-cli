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
		<Typography variant="h4">
			{'Todos:'}
			{counter}
		</Typography>
	);
};

const styles = theme => ({
	counter: {
		color: theme.palette.primary.main,
		justifyContent: 'left',
		paddingLeft: 10,
	},
});

TaskCounter.propTypes = propTypes;

export default withStyles(styles)(TaskCounter);
