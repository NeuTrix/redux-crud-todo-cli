import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import logo from '../../assets/logo-white.png';

const propTypes = {
	classes: PropTypes.instanceOf(Object).isRequired,
};

function BrandLogo(props) {
	const { classes } = props;
	return (
		<CardMedia
			alt="brand logo"
			className={`brandLogo ${classes.root}`}
			component="img"
			image={logo}
		/>
	);
}

const styles = {
	root: {
		maxWidth: '75px',
	},
};

BrandLogo.propTypes = propTypes;

export default withStyles(styles)(BrandLogo);
