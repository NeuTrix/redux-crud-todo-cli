import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const propTypes = {
	_id: PropTypes.string.isRequired,
	classes: PropTypes.instanceOf(Object).isRequired,
	deleteTodo: PropTypes.func.isRequired,
	task: PropTypes.string.isRequired,
};

// const defaultProps = {
// 	_id: 'default',
// 	deleteTodo: f => alert('default fn. Check deleteTodo props.'),
// 	task: 'default',
// };

const DeleteButton = (props) => {
	const { classes } = props;
	const handleDelete = (e) => {
		e.preventDefault();
		// allow restricted global use of `confirm`
		// eslint-disable-next-line
		let _confirmed = confirm(`Do you want to delete the task : \n\t  "${props.task}" ?` ) 
		if (_confirmed) {
			props.deleteTodo(props._id);
		}
	};

	return (
		<Button
			{...props}
			className={classes.button}
			// color="primary"
			component="button"
			name="delete"
			type="submit"
			variant="contained"
			onClick={handleDelete}
		>
			{'Del'}
		</Button>
	);
};

const styles = {
	button: {
		background: 'pink',
		color: 'maroon',
		height: '80%',
		marginTop: 5,
	},
};

DeleteButton.propTypes = propTypes;
// DeleteButton.defaultProps = defaultProps;

export default withStyles(styles)(DeleteButton);
