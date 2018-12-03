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
	imageUrl: PropTypes.instanceOf(Object),
	label: PropTypes.string,
};

const defaultProps = {
	label: 'placeholder',
	imageUrl: '/#',
};

function MediaCard(props) {
	const { classes, label, imageUrl } = props;
	return (
		<Card className={classes.card}>
			<CardActionArea className={classes.actionArea}>
				<CardMedia
					className={classes.media}
					image={imageUrl}
					title="Contemplative Reptile"
				/>
				<CardContent className={classes.cardContent}>
					<Typography gutterBottom variant="h5" component="h2">
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
	},

	cardContent: {
		background: theme.palette.secondary.main,
		color: 'white',
		display: 'flex',
		placeContent: 'center',
		width: '100%',
	},

	media: {
		height: 100,
		marginBottom: 10,
		placeSelf: 'center',
		width: 100,
	},
});
MediaCard.propTypes = propTypes;
MediaCard.defaultProps = defaultProps;

export default withStyles(styles)(MediaCard);
