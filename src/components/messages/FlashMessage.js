import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// +++++++++  CSS  +++++++++ 




// +++++++++  COMPONENT  +++++++++ 
class FlashMessage extends Component {

	constructor (props) {
		super(props);
		this.onClick = this.onClick.bind(this);
		this.closeMessage = this.closeMessage.bind(this);
	}

	closeMessage() {
		return this.props.deleteFlashMessage(this.props.message._id);
	}

	onClick (e) {
		e.preventDefault();
		this.props.deleteFlashMessage(this.props.message._id);
	}

	render () {
		
		setTimeout(this.closeMessage, 7000);

		const { type, text } = this.props.message;

		return (
    	<div className = { classnames('alert', {
    		'alert-success': type === 'success',
    		'alert-warning': type === 'warning',
    		'alert-info': type === 'info',
    		'alert-danger': type === 'error'
    	}) } >
    		<button 
	    		className = 'close'
	    		onClick = { this.onClick } 
    		>
    			<span>&times;</span>
  			</button>

				{ text }
    	</div>
		);
	}
}

FlashMessage.propTypes = {
	message: PropTypes.object.isRequired,
	deleteFlashMessage: PropTypes.func.isRequired
};

FlashMessage.defaultProps = {
	deleteFlashMessage: f => f
};

export default FlashMessage;

