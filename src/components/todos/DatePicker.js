import React from 'react';
// import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const DatePicker = (props) => {

	return (
		<TextField
			{...props}
			fullWidth
			label="set due date"
			margin="dense"
			name="date"
			type="date"
			variant="outlined"
		/>
	);
};

// DatePicker.propTypes = propTypes;

export default DatePicker;
