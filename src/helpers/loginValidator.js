/* eslint-env node, mocha */
import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
	// create an error object
	let errors = { };
	
	// verify if an identifier is set in the data (state)
	if (validator.isEmpty(data.identifier)) {
		// if not, then add message to errors object
		errors.identifier = 'This field is required';
	}
	// verify if a password is set in the data (state)
	if (validator.isEmpty(data.password)) {
		errors.password = 'This field is required';
	}

	return {
		// this error object
		errors,
		// boolean to check for presence of errors
		isValid: isEmpty(errors)
	};
}
