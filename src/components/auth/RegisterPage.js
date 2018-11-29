import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import RegisterForm from './RegisterForm';
import { userSignupRequest } from '../../actions/registerActions';
import { addFlashMessage } from '../../actions/flashActions';

const propTypes = {
	addFlashMessage: PropTypes.func.isRequired,
	classes: PropTypes.instanceOf(Object).isRequired, // from styled-components
	userSignupRequest: PropTypes.func.isRequired,
};

const RegisterPage = (props) => {
	const {
		addFlashMessage,
		authApi,
	  classes,
	  userSignupRequest,
	} = props;
	return (
		<div className={classes.grid}>
			<RegisterForm
				addFlashMessage={addFlashMessage}
				authApi={authApi}
				className={classes.entryForm}
				userSignupRequest={userSignupRequest}
			/>
		</div>
	);
};

const styles = theme => ({
	entryForm: {
		gridArea: 'form',
	},
	grid: {
		display: 'grid',
		gridTemplateAreas: ' form ',
		gridTemplateColumns: '1fr',
		justifyItems: 'center',
		padding: '20px',
	},
});

const mapStateToProps = state => ({
	authApi: state.authApi,
});

RegisterPage.propTypes = propTypes;

export default connect(mapStateToProps, {
	addFlashMessage,
	userSignupRequest,
})(withStyles(styles)(RegisterPage));
