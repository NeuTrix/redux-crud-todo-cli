import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Material-ui
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CheckedIcon from '@material-ui/icons/CheckBoxTwoTone';
import UnCheckedIcon from '@material-ui/icons/CheckBoxOutlineBlank';

const propTypes = {
	_id: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired,
	editTodo: PropTypes.func.isRequired,
};

class CheckComplete extends Component {

	constructor(props) {
		super(props);
		this.state = { completed: this.props.completed };
		this.handleToggle = this.handleToggle.bind(this);
	}

	handleToggle(e) {
		e.preventDefault();
		this.props.editTodo(
			this.props._id,
			{ completed: !this.state.completed },
		);
	}

	render() {
		const { classes } = this.props;
		const checked = (
			<CheckedIcon color="secondary" fontSize="large" />
		);

		const unchecked = (
			<UnCheckedIcon color="secondary" fontSize="large" />
		);

		return (
			<Button
				className={classes.button}
				component="button"
				name="checked"
				onClick={this.handleToggle}
			>
				{ this.state.completed ? checked : unchecked }
			</Button>
		);
	}
}

const styles = theme => ({
	button: {
		height: '75%',
		marginTop: theme.spacing.unit + 2,
	},
});

CheckComplete.propTypes = propTypes;

export default withStyles(styles)(CheckComplete);
