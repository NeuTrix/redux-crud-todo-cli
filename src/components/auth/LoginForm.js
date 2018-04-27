import React, { Component } from 'react';
import PropTypes from 'prop-types';
import validateInput from '../../helpers/loginValidator';
import TextFieldGroup from './TextFieldGroup';
import BasicButton from '../buttons/BasicButton';

const style = {
	grid: {
		display: 'grid',
		gridArea: `
			"title"
			"form"
			"submit" `,
		gridRowGap: '10px',

		border: 'none',
	},

	form: {
		gridArea: 'form',
		padding: 15,
	},

	title: { 
		gridArea: 'title', 
		fontSize: '3em',
		padding: 20,	 
	}

}

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
			<div className = 'box' style = { style.grid }>
				<div style = { style.title } > Log In 
				</div>
						
				<form  onSubmit = { this.onSubmit } >

					{ errors.form && 
	          <div className= 'alert alert-danger' > 
	          	{errors.form}
	          </div>
					}

					<TextFieldGroup 
					style = { style.form } 
						errors = { errors.identifier }
						label = 'Username / Email' 
						name = 'identifier'
						onChange = { this.onChange }
						placeholder = 'enter a username -or- email'
						type = 'text'
						value = { identifier }
					/>
         
					<TextFieldGroup 
						errors = { errors.password }
						label = 'Password' 
						name = 'password'
						onChange = { this.onChange }
						placeholder = 'enter your password'
						type = 'password'
						value = { password }
					/>
          
					<BasicButton 
						type = 'submit' 
						color = 'green'
						bgColor = 'lime'
						name = 'Log in!' 
						disable = { isLoading.toString()} 
					/>
				</form>

			</div> 
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