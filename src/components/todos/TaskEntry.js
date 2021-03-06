import React from 'react';
import TextField from '@material-ui/core/TextField';

const TaskEntry = props => (
	<TextField
		{...props}
		fullWidth
		margin="dense"
		name="task"
		type="text"
		variant="outlined"
	/>
);

export default TaskEntry;
