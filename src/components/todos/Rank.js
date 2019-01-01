import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const propTypes = {
	value: PropTypes.string.isRequired,
};

const Rank = (props) => {
	const { classes, value } = props;

	return (
		<TextField
			{...props} // allow props to pass to wrapped component
			InputLabelProps={{
				className: classes.label,
			}}
			SelectProps={{
				MenuProps: {
						MenuListProps:
								{
							className: classes.menulist,
						},
				},
			}}
			fullWidth
			id="new_item_priority"
			label="rank"
			margin="dense"
			name="rank"
			select
			value={value}
			variant="outlined"
		>
			<option value="High">High</option>
			<option value="Med">Med</option>
			<option value="Low">Low</option>
		</TextField>
	);
};

const styles = {
	label: {
		color: 'orangered',
	},
	menulist: {
		background: 'lime',
		color: 'orangered',
	},
};

Rank.propTypes = propTypes;

export default withStyles(styles)(Rank);
