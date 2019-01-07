import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Fade from '@material-ui/core/Fade';

const propTypes = {
	classes: PropTypes.instanceOf(Object).isRequired,
	deleteFlashMessage: PropTypes.func.isRequired,
	message: PropTypes.instanceOf(Object).isRequired,
};

class FlashMessage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			show: true,
		};
		this.onClick = this.onClick.bind(this);
		this.closeMessage = this.closeMessage.bind(this);
	}

	onClick(e) {
		e.preventDefault();
		this.closeMessage();
	}

	closeMessage() {
		const { deleteFlashMessage, message } = this.props;
		this.setState({ show: false });
		setTimeout(() => {
			deleteFlashMessage(message._id);
		}, 1000);
	}

	render() {
		const { classes, message } = this.props;
		const { show } = this.state;
		setTimeout(() => {
			this.closeMessage();
		}, 7000);

		return (
			<div>
				<Slide
					in={show}
					direction="right"
					timeout={{ enter: 500, exit: 500 }}
				>
					<div className={classes.grid}>
						<Typography
							className={classes[message.type]}
							variant="body2"
						>
							<CloseIcon className={classes.closeIcon} onClick={this.onClick} />
							{message.text}
						</Typography>
					</div>
				</Slide>
			</div>
		);
	}
}

const styles = theme => ({
	grid: {
		display: 'inline-flex',
		marginTop: theme.spacing.unit,
		minHeight: theme.spacing.unit * 9,
		opacity: 0.95,
		width: theme.spacing.unit * 27,
	},

	closeIcon: {
		marginRight: theme.spacing.unit,
	},

	// Message type styling
	error: {
		background: 'pink',
		border: '2px solid',
		borderRadius: theme.shape.borderRadius,
		color: 'maroon',
		display: 'inherit',
		padding: theme.spacing.unit,
		width: '100%',
		['&:hover']: {
			background: theme.palette.grey[200],
			color: theme.palette.grey[700],
		},
	},

	info: {
		background: 'aliceblue',
		border: '2px solid',
		borderRadius: theme.shape.borderRadius,
		color: 'navy',
		display: 'inherit',
		padding: theme.spacing.unit,
		width: '100%',
		['&:hover']: {
			background: theme.palette.grey[200],
			color: theme.palette.grey[700],
		},
	},

	success: {
		background: 'greenyellow',
		border: '2px solid',
		borderRadius: theme.shape.borderRadius,
		color: 'green',
		display: 'inherit',
		padding: theme.spacing.unit,
		width: '100%',
		['&:hover']: {
			background: theme.palette.grey[200],
			color: theme.palette.grey[700],
		},
	},

	warning: {
		background: 'lightyellow',
		border: '2px solid',
		borderRadius: theme.shape.borderRadius,
		color: 'darkgoldenrod',
		display: 'inherit',
		padding: theme.spacing.unit,
		width: '100%',
		['&:hover']: {
			background: theme.palette.grey[200],
			color: theme.palette.grey[700],
		},
	},
});

FlashMessage.propTypes = propTypes;

export default withStyles(styles)(FlashMessage);
