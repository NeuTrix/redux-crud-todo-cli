import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FlashMessage from './FlashMessage';
import { deleteFlashMessage } from '../../actions/flashActions';

const propTypes = {
	deleteFlashMessage: PropTypes.func.isRequired,
	messages: PropTypes.instanceOf(Array).isRequired,
};

class FlashMessagesList extends Component {

	render() {
		const messages = this.props.messages.map(message => (
			<FlashMessage
				key={message._id}
				message={message}
				deleteFlashMessage={this.props.deleteFlashMessage}
			/>
		));

		return (
			<div>
				{ messages.reverse() }
			</div>
		);
	}
}

FlashMessagesList.propTypes = propTypes;

function mapStateToProps(state) {
	return {
		messages: state.flashMessages,
	};
}

export default connect(mapStateToProps, {
	deleteFlashMessage,
})(FlashMessagesList);
