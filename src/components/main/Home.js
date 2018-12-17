import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
// @material-ui
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import cssLogo from '../../assets/mediaCardLogos/resized_images/css_logo.png';
import htmlLogo from '../../assets/mediaCardLogos/resized_images/html_logo.png';
import expressLogo from '../../assets/mediaCardLogos/resized_images/exp.png';
import jsLogo from '../../assets/mediaCardLogos/resized_images/js_logo.png';
import MediaCard from '../buttons/MediaCard';
import mongoLogo from '../../assets/mediaCardLogos/resized_images/mongo_logo.png';
import nodeLogo from '../../assets/mediaCardLogos/resized_images/node_logo.png';
import reactLogo from '../../assets/mediaCardLogos/resized_images/react_logo.png';
import reduxLogo from '../../assets/mediaCardLogos/resized_images/redux_logo.png';

const propTypes = {
	authorized: PropTypes.bool.isRequired,
	classes: PropTypes.instanceOf(Object).isRequired,
};

const Home = ({ authorized, classes }) => {
	const loginButton = (
		<NavLink to="/login">
			<Button
				className={classes.button}
				color="primary"
				component="button"
				variant="contained"
			>
				{'Login'}
			</Button>
		</NavLink>
	);

	const registerButton = (
		<NavLink to="/register">
			<Button
				className={classes.button}
				color="primary"
				component="button"
				type="submit"
				variant="contained"
			>
				{'Register'}
			</Button>
		</NavLink>
	);

	return (
		<div className={classes.grid}>

			<Typography
				className={classes.mainTitle}
				variant="h4"
			>
				{'Welcome to Done'}
			</Typography>

			<Typography
				className={classes.subTitle}
				variant="h6"
			>
				{'a full-stack React CRUD app'}
			</Typography>

			<div className={classes.tilesDisplay}>
				<div className={classes.tiles}>
					<MediaCard imageUrl={mongoLogo} label="MongoDB" />
				</div>
				<div className={classes.tiles}>
					<MediaCard imageUrl={nodeLogo} label="Node" />
				</div>
				<div className={classes.tiles}>
					<MediaCard
						imageUrl={expressLogo}
						width="150%"
						label="express"
					/>
				</div>
				<div className={classes.tiles}>
					<MediaCard imageUrl={reactLogo} label="React" />
				</div>
				<div className={classes.tiles}>
					<MediaCard imageUrl={reduxLogo} label="Redux" />
				</div>
				<div className={classes.tiles}>
					<MediaCard imageUrl={htmlLogo} label="HTML5" />
				</div>
				<div className={classes.tiles}>
					<MediaCard imageUrl={cssLogo} width="75px" label="CSS3" />
				</div>
				<div className={classes.tiles}>
					<MediaCard imageUrl={jsLogo} width="100px" label="JavaScript" />
				</div>
			</div>

			<div className={classes.buttonDisplay}>
				<div>{ !authorized && loginButton }</div>
				<div>{ !authorized && registerButton }</div>
			</div>

		</div>
	);
};

const styles = () => ({
	// login and register buttons
	button: {
		color: 'white',
		width: 100,
		margin: 20,
	},

	buttonDisplay: {
		// background: 'lime',
		display: 'flex',
		gridArea: 'buttonDisplay',
		justifyContent: 'center',
		paddingTop: 25,
		width: 'inherit',
	},
	// The media card display section
	tilesDisplay: {
		// background: 'orangered',
		display: 'flex',
		flexWrap: 'wrap',
		placeContent: 'center',
		gridArea: 'tilesDisplay',
		marginTop: 25,
	},

	grid: {
		display: 'grid',
		gridTemplateAreas: `
			"mainTitle"
			"subTitle"
			"tilesDisplay"
			"buttonDisplay"
		`,
		placeItems: 'center',
		maxWidth: 800,
	},

	login: {
		gridArea: 'login',
	},

	mainTitle: {
		gridArea: 'mainTitle',
	},

	subTitle: {
		gridArea: 'subTitle',
	},

	tiles: {
		// border: '3px solid purple',
		float: 'left',
		margin: 10,
		minWidth: 150,
	},

});

Home.propTypes = propTypes;

export default withStyles(styles)(Home);
