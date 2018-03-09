import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Button, Col } from 'react-bootstrap';

class FlashMessage extends Component {

	constructor (props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	onClick (e) {
		e.preventDefault();
		this.props.deleteFlashMessage(this.props.message.id)
	}

	render () {

		const { id, type, text } = this.props.message;
    return (
    	<Col className = { classnames('alert', {
    		'alert-success': type === 'success',
    		'alert-danger': type === 'error'
    	}) } >
    		<Button 
	    		className = 'close'
	    		onClick = { this.onClick } 
    		>
    			<span>&times;</span>
  			</Button>

        { text }
    	</Col>
    );
	}
};

FlashMessage.propTypes = {
	message: PropTypes.object.isRequired,
	deleteFlashMessage: PropTypes.func.isRequired
};

FlashMessage.defaultProps = {
	deleteFlashMessage: f => f
}

export default FlashMessage;

