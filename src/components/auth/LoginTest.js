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
import { withStyles } from '@material-ui/core/styles';

// +++++++++  CSS  +++++++++ 
const baseColor = colors._mintgreen; 

const Grid = styled.form `
	display: grid;
	grid-template-areas: 
		"title"
		"email"
		"pword"
		"submit"
		"link"
	;

	grid-row-gap: 20px;
	color: ${ baseColor };
	padding: 20px;
	border: 1px solid ${ baseColor };
	width: 300px;

	@media (${media._large}) {
		width: 500px;
	}
`;
const Title = styled.div `
	gride-area: title;
`;
const  Email = styled(TextField) `
	gride-area: email;
	border: 1px solid orange;
`;
const  Pword =styled(TextFieldGroup) `
	gride-area: pword;
`;
const  Submit =styled.button`
	gride-area: submit;
	font-weight: bold;
	font-size: 1.0em;
	height: 35px;
	width: 90px;
	border: 4px solid ${baseColor};
	border-radius: 4px;
	background: greenyellow;
	color: ${baseColor}
	`;
	
const RegLink =styled(Link) `
	gride-area: link;
	color: blue
	place-content: center;
	display: inline-grid;
`;
// custom component styling
const stylesInput = {
	style: {
		// color: colors._iceblue,
		background: colors._white,
	}
};
const styles = {
	style: {
		color: colors._iceblue,
		background: 'yellow',
		color: 'lime',
		border: 'orange',
	}
};


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
					<h1> { !isLoading ? 'Login' : <Spinner color ='greenyellow' /> } </h1>
				</Title>

				<TextField
					InputLabelProps={ stylesInput }
					// InputProps={ styles }
					// style = { styles }
					autoComplete='email'
					className='Email'
					error={ errors.identifier }
					// helperText='helping or NOt?'
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

				
       { /*
				<Pword 
					className='Pword'
					errors={ errors.password }
					label='Password' 
					name='password'
					onChange={ this.onChange }
					placeholder='enter your password'
					type='password'
					value={ password }
				/>
				
				<Submit 
					className ='Submit'
					type='submit' 
					name='Log in' 
					disabled={isLoading}
				> Log in </Submit> 
			*/}

				<RegLink to='/register' className='RegLink' >
					Click here to sign up
				</RegLink>	 
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

export default Loginform;