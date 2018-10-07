import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { colors, media } from '../../helpers/cssConstants';
import styled from 'styled-components';
import validateInput from '../../helpers/loginValidator';
// custom
import { Link } from  'react-router-dom';
import Spinner from '../buttons/Spinner';
import TextFieldGroup from './TextFieldGroup';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

// +++++++++  CSS  +++++++++ 
const baseColor = colors._mintgreen; 

const Grid = styled.form `
	grid-template-areas: 
		"title"
		"email"
		"pword"
		"submit"
		"link"
	;
	grid-row-gap: 15px;

	border: 1px solid ${ baseColor };
	border-radius: 5px;
	color: ${ baseColor };
	display: grid;
	padding: 20px;
	width: 300px;

	@media (${media._large}) {
		width: 500px;
	}
`;
const Title = styled.h1 `
	grid-area: title;
`;
const  Email = styled(TextField) `
	grid-area: email;
`;
const  Pword = styled(TextField) `
	grid-area: pword;
`;
const  Submit = styled(Button) `
	grid-area: submit;
`;
const RegLink = styled(Link) `
	grid-area: link;
	padding-top: 25px;
	place-self: center; 
`;
// custom component styling
const stylesInput = {
	style: {
		background: colors._white,
	}
};

const styles = theme => ({
	button: {
		margin: theme.spacing.unit,
		color: '#fafafa'
	},

	input: {
		display: 'none',
	},
});

// +++++++++  COMPONENT  +++++++++ 
class Loginform extends Component {

	constructor (props, context) {
		super(props, context);
		this.state ={
			identifier: '',
			password: '',
			errors: { },
			isLoading: this.props.authApi.loginIsPosting,
		};

		this.onChange =this.onChange.bind(this);
		this.onSubmit =this.onSubmit.bind(this);
	}

	onChange(e) {
		e.preventDefault();
		this.setState({ [e.target.name]: e.target.value });
	}

	isValid() {
		const { errors, isValid } =validateInput(this.state);
		if(!isValid) {
			this.setState({ errors });
		}
		return isValid;
	}

	onSubmit(e) {
		e.preventDefault();

		if (this.isValid()) {
			this.setState({ errors: { }, isLoading: true }); // reset state
			this.props.userLoginRequest(this.state)
				.then((res) => {
					this.props.addFlashMessage({
						type: 'success',
						text: `Hi ${ res.data.username }! You're Logged In.`
					});
					this.context.router.history.push('/todos');
					return res;
				})
				.catch((err, res) =>{
					// console.log(err)
					this.setState({errors: err, isLoading: false});
					this.props.addFlashMessage({
						type: 'error',
						text: 'Invalid username, id or password. Try again.'
					});
				});
		}
	}

	render () {
		const { errors, identifier, password, isLoading } =this.state; 

		return (
			<Grid 
				className={ 'LoginTest'  } 
				onSubmit={ this.onSubmit } 
			>
				<Title className='Title ctr engr under' > 
					{ !isLoading ? 'Login' : <Spinner color ='greenyellow' /> }
				</Title>

				<Email
					InputLabelProps={ stylesInput }
					className='email'
					errors={ errors.identifier }
					label='Username | Email' 
					margin='normal'
					name='identifier'
					onChange={ this.onChange }
					placeholder='enter username or email'
					required
					type='email'
					value={ identifier }
					variant='outlined'
				/>

				<Pword
					InputLabelProps={ stylesInput }
					className='password'
					errors={ errors.password }
					label='Password' 
					margin='normal'
					name='password'
					onChange={ this.onChange }
					placeholder='enter password'
					required
					type='password'
					value={ password }
					variant='outlined'
				/>
				
				<RegLink to='/register' className='regLink' >
					Click here for a new account
				</RegLink>	 

				<Submit 
					className={ this.props.classes.button}
					color='primary' 
					disabled={isLoading}
					name='Log in' 
					size='small'
					type='submit' 
					variant="contained" 
				>
					Go
				</Submit>

			</Grid>
		);
	}
}

Loginform.propTypes = {
	addFlashMessage: PropTypes.func.isRequired,
	authApi: PropTypes.object.isRequired,
	className: PropTypes.string.isRequired, // from styled-components
	currUser: PropTypes.object.isRequired,
	userLoginRequest: PropTypes.func.isRequired,
};

Loginform.defaultProps = {
	addFlashMessage: f => f,
	authApi: { loginIsPosting: false},
	className: '',
	currUser: { },
	userLoginRequest: f => f,
};

Loginform.contextTypes = {
	router: PropTypes.object.isRequired,
};

// export default Loginform;
export default withStyles(styles)(Loginform);