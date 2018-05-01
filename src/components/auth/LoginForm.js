import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from  'react-router-dom';
// custom
import validateInput from '../../helpers/loginValidator';
import TextFieldGroup from './TextFieldGroup';
import BasicButton from '../buttons/BasicButton';
import { colors } from '../../helpers/cssConstants'

// +++++++++  CSS  +++++++++ 

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
	color: ${ colors._mintgreen};
	padding: 20px;
	border: 1px solid darkgreen;
`;

const Title = styled.div `
	gride-area: title;
`;

const  Email = styled(TextFieldGroup) `
	gride-area: email;
`;

const  Pword = styled(TextFieldGroup) `
	gride-area: pword;
`;

const  Submit = styled(BasicButton) `
	gride-area: submit;
`;

const RegLink = styled(Link) `
	gride-area: link;
`;

// +++++++++  COMPONENT  +++++++++ 

class Loginform extends Component {

	constructor (props, context) {

		super(props, context);
		this.state = {
			identifier: '',
			password: '',
			errors: { },
			isLoading: false,
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		e.preventDefault();
		this.setState({ [e.target.name]: e.target.value });
	}

	isValid() {
		const { errors, isValid } = validateInput(this.state);
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
						text: `Welcome ${ res.data.username }! You have successfully Logged In.`
					});
					this.context.router.history.push('/todos');
				},
				(err) => { this.setState({errors: err.response.data.errors, isLoading: false});
				});
		}
	}

	render () {
    
		const { errors, identifier, password, isLoading } = this.state; 

		return (
			<Grid 
				className= { `Loginform ${this.props.className} paper` } 
				onSubmit= { this.onSubmit } 
			>
				<Title className= 'ctr engr under' > 
					<h2> Log In </h2>  
				</Title>

				<Email 
					errors= { errors.identifier }
					label= 'Username / Email' 
					name= 'identifier'
					onChange= { this.onChange }
					placeholder= 'enter a username -or- email'
					type= 'text'
					value= { identifier }
				/>
       
				<Pword 
					errors= { errors.password }
					label= 'Password' 
					name= 'password'
					onChange= { this.onChange }
					placeholder= 'enter your password'
					type= 'password'
					value= { password }
				/>
				
				<Submit 
					type= 'submit' 
					name= 'Log in' 
					disable= {isLoading.toString()} 
				/> 

				<RegLink to= '/register'>
					Click here to register a new account
				</RegLink>	

				</Grid>
		);
	}
}

Loginform.propTypes = {
	addFlashMessage: PropTypes.func.isRequired,
	className: PropTypes.string.isRequired, // from styled-components
	currUser: PropTypes.object.isRequired,
	userLoginRequest: PropTypes.func.isRequired,
};

Loginform.defaultProps = {
	className: '',
	addFlashMessage: f => f,
	currUser: { },
	userLoginRequest: f => f,
};

Loginform.contextTypes = {
	router: PropTypes.object.isRequired,
};

export default Loginform;