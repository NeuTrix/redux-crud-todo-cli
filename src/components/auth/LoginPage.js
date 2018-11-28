// connects to redux store and passes props to the LoginForm ...
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LoginForm from './LoginForm';
import { addFlashMessage } from '../../actions/flashActions';
import { userLoginRequest } from '../../actions/loginActions';

const LoginPage = (props) => {
	const {
		addFlashMessage,
		authApi,
		classes,
		userLoginRequest,
	} = props;
	return (
		<div className={classes.grid}>
			<LoginForm
				style={{ gridArea: 'form' }}
				userLoginRequest={userLoginRequest}
				addFlashMessage={addFlashMessage}
				authApi={authApi}
			/>
		</div>
	);
};
// ===== Props
const mapStateToProps = state => ({ authApi: state.authApi });

LoginPage.propTypes = {
	addFlashMessage: PropTypes.func.isRequired,
	authApi: PropTypes.instanceOf(Object).isRequired,
	classes: PropTypes.instanceOf(Object).isRequired,
	userLoginRequest: PropTypes.func.isRequired,
};

const styles = {
	grid: {
		justifyItems: 'center',
		padding: '20px',
	},
};

export default connect(mapStateToProps, { addFlashMessage, userLoginRequest })(withStyles(styles)(LoginPage));
