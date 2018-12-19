import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const propTypes = {
	handleChange: PropTypes.func.isRequired,
	rank: PropTypes.string.isRequired,
};

const Rank = (props) => {
	const { handleChange, rank } = props;

	return (
		<TextField
			{...props} // allow props to pass to wrapped component
			fullWidth
			id="new_item_priority"
			label="set rank"
			margin="dense"
			name="rank"
			select
			value={rank}
			variant="outlined"
			onChange={handleChange}
		>
			<option value="High">High</option>
			<option value="Med">Med</option>
			<option value="Low">Low</option>
		</TextField>
	);
};

Rank.propTypes = propTypes;

export default Rank;
