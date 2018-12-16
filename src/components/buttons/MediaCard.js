import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const propTypes = {
	classes: PropTypes.instanceOf(Object).isRequired,
	height: PropTypes.string,
	imageUrl: PropTypes.string,
	label: PropTypes.string,
	width: PropTypes.string,
};

const defaultProps = {
	height: '105px',
	imageUrl: '/#',
	label: 'placeholder',
	width: '100px',
};

function MediaCard(props) {
	const { classes, label, height, imageUrl, width } = props;
	return (
		<Card className={classes.card}>
			<CardActionArea className={classes.actionArea}>
				<CardMedia
					className={classes.media}
					image={imageUrl}
					style={{width:width, height: height}}
					title="Contemplative Reptile"
				/>
				<CardContent className={classes.cardContent}>
					<Typography
						className={classes.titles}
						gutterBottom
						variant="h6"
						component="h2"
					>
						{label}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

const styles = theme => ({
	actionArea: {
		display: 'flex',
		flexWrap: 'wrap',
		placeContent: 'center',
	},

	card: {
		maxWidth: 150,
		paddingTop: 15,
		color:'white',
	},

	cardContent: {
		background: theme.palette.primary.main,
		color: 'white',
		display: 'flex',
		placeContent: 'center',
		width: '100%',
	},

	media: {
		marginBottom: 5,
		placeSelf: 'center',
	},

	titles: {
		color: 'white',
	}
});
MediaCard.propTypes = propTypes;
MediaCard.defaultProps = defaultProps;

export default withStyles(styles)(MediaCard);
