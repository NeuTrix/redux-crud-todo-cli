import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';

const propTypes = {
	classes: PropTypes.instanceOf(Object).isRequired,
};

class ProgressBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			completed: 0,
		};
		this.progress = this.progress.bind(this);
	}

	componentDidMount() {
		this.timer = setInterval(this.progress, 500);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	progress() {
		const { completed } = this.state;
		if (completed === 100) {
			this.setState({ completed: 0 });
		} else {
			const diff = Math.random() * 10;
			this.setState({ completed: Math.min(completed + diff, 100) });
		}
	}

	render() {
		const { classes } = this.props;
		const { completed } = this.state;
		return (
			<div className={classes.root}>
				<LinearProgress className={classes.bar} variant="determinate" value={completed} />
			</div>
		);
	}
}

const styles = {
	bar: { height: 25 },
	root: { flexGrow: 1 },
};

ProgressBar.propTypes = propTypes;

export default withStyles(styles)(ProgressBar);
