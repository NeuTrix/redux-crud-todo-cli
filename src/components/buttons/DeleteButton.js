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

const DeleteButton = (props) => {
	const {
		classes, 
		deleteTodo, 
		_id, 
		task,
	} = props;
	const handleDelete = (e) => {
		e.preventDefault();
		// allow restricted global use of `confirm`
		// eslint-disable-next-line
		let _confirmed = confirm(`Do you want to delete the task : \n\t  "${task}" ?` ) 
		if (_confirmed) {
			deleteTodo(_id);
		}
	};

	return (
		<Button
			{...props}
			className={classes.root}
			component="button"
			name="delete"
			variant="contained"
			onClick={handleDelete}
		>
			{'Del'}
		</Button>
	);
};

const styles = {
	root: {
		background: 'pink',
		color: 'maroon',
		height: '75%',
		marginTop: 10,
	},
};

DeleteButton.propTypes = propTypes;

export default withStyles(styles)(DeleteButton);
