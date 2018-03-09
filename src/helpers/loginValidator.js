/* eslint-env node, mocha */
import validator from 'validator'
import isEmpty from 'lodash/isEmpty'

export default function validateInput(data) {
	
	let errors = { };

	if (validator.isEmpty(data.identifier)) {
		errors.username = 'This field is required';
	}

	if (validator.isEmpty(data.password)) {
		errors.password = 'This field is required';
	}

	return {
		errors,
		isValid: isEmpty(errors)
	}
}