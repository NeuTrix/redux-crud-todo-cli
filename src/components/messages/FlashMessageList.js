import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FlashMessage from './FlashMessage';
import { deleteFlashMessage } from '../../actions/flashActions';

const propTypes = {
	deleteFlashMessage: PropTypes.func.isRequired,
	messages: PropTypes.instanceOf(Array).isRequired,
};

function FlashMessagesList(props) {
	const { deleteFlashMessage, messages } = props;
	const messageArray = messages.map(msg => (
		<FlashMessage
			key={msg._id}
			message={msg}
			deleteFlashMessage={deleteFlashMessage}
		/>
	));

	return (
		<div>
			{ messageArray.reverse() }
		</div>
	);
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
