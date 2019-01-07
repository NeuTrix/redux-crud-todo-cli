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
		setTimeout(() => {
			this.setState({ show: false });
		}, 100);
		setTimeout(() => {
			this.props.deleteFlashMessage(this.props.message._id);
		}, 2000);
	}

	render() {
		const { classes, message } = this.props;
		const { show } = this.state;
		setTimeout(() => {
			this.closeMessage();
		}, 7000);

		return (
			<div>
			<Fade
				in={show}
				timeout={{ enter: 500, exit: 750 }}
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
			</Fade>
			</div>
			
		);
	}
}

const styles = theme => ({
	grid: {
		display: 'inline-flex',
		minHeight: theme.spacing.unit * 9,
		marginTop: theme.spacing.unit,
		opacity: 0.9,
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
		[`&:hover`]: {
			background: theme.palette.grey[200],
			color: theme.palette.grey[700],
		}
	},

	info: {
		background: 'aliceblue',
		border: '2px solid',
		borderRadius: theme.shape.borderRadius,
		color: 'navy',
		display: 'inherit',
		padding: theme.spacing.unit,
		width: '100%',
	},

	success: {
		background: 'greenyellow',
		border: '2px solid',
		borderRadius: theme.shape.borderRadius,
		color: 'green',
		display: 'inherit',
		padding: theme.spacing.unit,
		width: '100%',
	},

	warning: {
		background: 'lightyellow',
		border: '2px solid',
		borderRadius: theme.shape.borderRadius,
		color: 'darkgoldenrod',
		display: 'inherit',
		padding: theme.spacing.unit,
		width: '100%',
	},

});
// &:hover {
// 	backgroundColor: whitesmoke,
// 	color: darkgrey,
// 	border: 1px solid black,
// 	transition: 5s,

// 	animation: fade-out 5s,
// 	@keyframes fade-out {
// 		from {opacity: 1.0,}
// 		to {opacity: 0.4,}
// 	}
// },

// success: {

// }

// ${({ type }) => (type === 'success' ? `
// 		background: greenyellow ;
// 		color: ${colors._mintgreen} ;
// 		borderColor: ${colors._mintgreen} ;
// 	` : type === 'error' ? `
// 		color: red;
// 		borderColor: red;
// 		background: ${colors._pinkrose} ;
// 	` : type === 'info' ? `
// 		color: ${colors._deepblue} ;
// 		borderColor: ${colors._deepblue} ;
// 		background: aliceblue;
// 	` : type === 'warning' ? `
// 		color: darkgoldenrod;
// 		borderColor: darkgoldenrod;
// 		background: lightgoldenrodyellow;
// 	` : 'color: grey')
// 	},

// delete: {
// 	border: 'none',
// 	marginRight: theme.spacing.unit,
// 	display: 'inherit',
// 	fontSize: '1.25em',
// 	gridArea: 'delete',
// 	height: 'auto',
// 	placeContent: 'center',
// 	width: 'auto',
// },

FlashMessage.propTypes = propTypes;

export default withStyles(styles)(FlashMessage);
