import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FlashMessage from './FlashMessage'

function mapStateToProps(state) {
	return {
		messages: state.flashMessages
	};
}

class FlashMessagesList extends Component {

	render () {
		const messages = this.props.messages.map((message) => 
			<FlashMessage key = { message.id } message = { message } />
		);

		return (
			<div> { messages } </div>
		)
	}
}

FlashMessagesList.propTypes = {
	messages: PropTypes.array.isRequired
}

export default connect(
	mapStateToProps,
// Implement map dispatch to props
)(FlashMessagesList)
