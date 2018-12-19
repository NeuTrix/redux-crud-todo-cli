import React from 'react';
// import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const TaskEntry = props => (
	<TextField
		{...props}
		fullWidth
		label="enter new task"
		margin="dense"
		name="task"
		type="text"
		variant="outlined"
	/>
);

// TaskEntry.propTypes = propTypes;

export default TaskEntry;
