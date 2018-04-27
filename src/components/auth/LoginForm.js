import React, { Component } from 'react';
import PropTypes from 'prop-types';
import validateInput from '../../helpers/loginValidator';
import TextFieldGroup from './TextFieldGroup';
import BasicButton from '../buttons/BasicButton';

// +++++++++  CSS  +++++++++ 

const style = {
	display: 'grid',
	gridTemplate: `
		"title"
		"form"
		"form"
		"submit" `,
	gridRowGap: '5px',
	padding: '0px 15px 0px 15px',
	color: 'darkgreen'
}

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
    
		const { errors, identifier, password } = this.state;

		return (
			<form 
				id = 'loginForm'
				className = 'boxClr' 
				style = { style } 
				onSubmit = { this.onSubmit } 
			>
				<h1 
					className = 'engr' 
					style = {{ gridArea: 'title' }} 
				> 
					Log In 
				</h1>

				<TextFieldGroup 
					style = {{ gridArea: 'form' }} 
					errors = { errors.identifier }
					label = 'Username / Email' 
					name = 'identifier'
					onChange = { this.onChange }
					placeholder = 'enter a username -or- email'
					type = 'text'
					value = { identifier }
				/>
       
				<TextFieldGroup 
					style = {{ gridArea: 'form' }} 
					errors = { errors.password }
					label = 'Password' 
					name = 'password'
					onChange = { this.onChange }
					placeholder = 'enter your password'
					type = 'password'
					value = { password }
				/>
        <div
					style = {{ gridArea: 'submit', justifySelf: 'center' }}
        >
					<BasicButton 
						className = 'ctr'
						area = 'submit'
						type = 'submit' 
						color = 'darkgreen'
						bgColor = 'palegreen'
						name = 'Log in!' 
						disable = { this.state.isLoading.toString()} 
					/>
        </div>
			</form>
		);
	}
}

Loginform.propTypes = {
	addFlashMessage: PropTypes.func.isRequired,
	currUser: PropTypes.object.isRequired,
	userLoginRequest: PropTypes.func.isRequired,
};

Loginform.defaultProps = {
	addFlashMessage: f => f,
	currUser: { },
	userLoginRequest: f => f,
};

Loginform.contextTypes = {
	router: PropTypes.object.isRequired,
};

export default Loginform;