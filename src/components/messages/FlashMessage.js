import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const propTypes = {
	deleteFlashMessage: PropTypes.func.isRequired,
	message: PropTypes.instanceOf(Object).isRequired,
};

class FlashMessage extends Component {

	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
		this.closeMessage = this.closeMessage.bind(this);
	}

	closeMessage() {
		return this.props.deleteFlashMessage(this.props.message._id);
	}

	onClick(e) {
		e.preventDefault();
		setTimeout(this.closeMessage(), 750);
	}

	render() {
		const { classes, message } = this.props;
		setTimeout(this.closeMessage, 1000000);

		return (
			< div className = {
				classes[message.type],
				classes.grid
			} >
					<Typography
						className={classes[message.type]} 
						
						variant="body2"
					>
						<span className={classes.delete}  onClick={this.onClick} >
							{'X'}
						</span>
						{message.text}
					</Typography>
			</div>
		);
	}
}

const styles = theme => ({
	grid: {
		display: 'inline-flex',
		height: theme.spacing.unit * 9,
		marginTop: theme.spacing.unit,
		opacity: 0.9,
		width: theme.spacing.unit * 27,
	},

	delete: {
		marginRight: 10,
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
		background: 'lime',
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
	// animation: fadein 1s,
	// @keyframes fadein {
	// 	from {opacity: 0,}
	// 	to {opacity: 1,}
	// }

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
