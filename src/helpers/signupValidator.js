/* eslint-env node, mocha */
let validator = require('validator');
let isEmpty = require('lodash/isEmpty')

function validateInput(data) {
	let errors = { };

	if (validator.isEmpty(data.username)) {
		errors.username = 'This field is required';
	}

	if (validator.isEmpty(data.email)) {
		errors.email = 'This field is required';
	}
	
	if (
			!validator.isEmpty(data.email) &&
			!validator.isEmail(data.email)
		) {
		errors.email = 'Your email Format is invalid';
	}
	
	if (validator.isEmpty(data.emailConfirm)) {
		errors.emailConfirm = 'This field is required';
	}

	if (!validator.equals(data.email, data.emailConfirm)) {
		errors.emailConfirm = 'Emails do not match'
	}
	
	if (validator.isEmpty(data.password)) {
		errors.password = 'This field is required';
	}

	if (validator.isEmpty(data.passwordConfirm)) {
		errors.passwordConfirm = 'This field is required';
	}

	if (!validator.equals(data.password, data.passwordConfirm)) {
		errors.passwordConfirm = 'Passwords do not match'
	}

	return {
		errors,
		isValid: isEmpty(errors)
	}
}
 module.exports = validateInput