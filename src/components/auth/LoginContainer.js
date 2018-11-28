import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import Button from '@material-ui/core/Button';
// import FormControl from '@material-ui/core/FormControl';
// import TextField from '@material-ui/core/TextField';
// import Typography from '@material-ui/core/Typography';
// import { withStyles } from '@material-ui/core/styles';
// import ProgressBar from '../buttons/ProgressBar';
import validateInput from '../../helpers/loginValidator';
import { connect } from 'react-redux';
import { addFlashMessage } from '../../actions/flashActions';
import { userLoginRequest } from '../../actions/loginActions';

const propTypes = {
	addFlashMessage: PropTypes.func.isRequired,
	authApi: PropTypes.instanceOf(Object).isRequired,
	classes: PropTypes.instanceOf(Object).isRequired,
	userLoginRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	authApi: state.authApi,
});

const contextTypes = {
	router: PropTypes.instanceOf(Object).isRequired,
};

class LoginContainer extends Component {
	constructor(props, context) {
		super(props, context);
		const { authApi } = this.props;
		this.state = {
			errors: { },
			identifier: '',
			isLoading: authApi.loginIsPosting,
			password: '',
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		e.preventDefault();
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit(e) {
		const { router } = this.context;
		const { addFlashMessage, userLoginRequest } = this.props;

		e.preventDefault();

		if (this.isValid()) {
			// reset state if no errors
			this.setState({ errors: { }, isLoading: true });
			// pass the state forward for a login ...
			userLoginRequest(this.state)
				.then((res) => {
					addFlashMessage({
						text: `Hi ${res.data.username}! You're Logged In.`,
						type: 'success',
					});
					router.history.push('/todos');
					return res;
				})
				.catch((err) => {
					this.setState({ errors: err, isLoading: false });
					addFlashMessage({
						text: 'Invalid username, id or password. Try again.',
						type: 'error',
					});
				});
		}
	}

	isValid() {
		// collect the return objects from #validateInput
		const { errors, isValid } = validateInput(this.state);
		if (!isValid) {
			this.setState({ errors });
		}
		return isValid; // a boolean value from #validateInput
	}

	render() {
		const { classes } = this.props;
		const {
			errors,
			identifier,
			password,
			isLoading,
		} = this.state;

		return (
			<div>
				{'Hello'}
			</div>
		);
	}
}

// const styles = theme => ({
// 	button: {
// 		color: '#fafafa',
// 		gridArea: 'button',
// 		marginTop: theme.spacing.unit * 2,
// 		placeSelf: 'center',
// 		width: 100,
// 	},
// 	email: { gridArea: 'email' },
// 	grid: {
// 		border: `1px solid ${theme.palette.primary.main}`,
// 		borderRadius: 5,
// 		display: 'grid',
// 		gridRowGap: theme.spacing.unit * 4,
// 		gridTemplateAreas: ` 
// 			'loginTitle'
// 			'email'
// 			'password'
// 			'button'
// 			'regLink'
// 		`,
// 		padding: 20,
// 		width: 300,
// 		[theme.breakpoints.up('lg')]: {
// 			width: 500,
// 		},
// 	},
// 	input: { display: 'none' },
// 	loginTitle: { gridArea: 'loginTitle' },
// 	password: { gridArea: 'password' },
// 	regLink: {
// 		gridArea: 'regLink',
// 		paddingTop: 25,
// 		placeSelf: 'center',
// 	},
// });

LoginContainer.propTypes = propTypes;
LoginContainer.contextTypes = contextTypes;

// export default (LoginContainer);
// export default withStyles(styles)(LoginContainer);
export default connect(mapStateToProps, { addFlashMessage, userLoginRequest })(LoginContainer);