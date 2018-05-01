import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { colors } from '../../helpers/cssConstants'

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
		const { type, text } = this.props.message;
		
		const style = {
				display: 'grid',
				gridTemplateArea: `"msg btn"`,
				gridTemplateColumns: '9fr 1fr',

				border: '1px solid grey',
				borderRadius: 5,

				background: 
				type === 'success' ? 'palegreen' : 
				type === 'warning' ? 'peach' :
				type === 'info' ? 'aliceblue' :
				type === 'error' ? 'pink' : 'lightgrey',
		}
		
		setTimeout(this.closeMessage, 7000);

		return (
    	<div className = 'paper' style= { style }  >
				<div className= 'ctr msg' > 
					{ text } 
				</div>
    		<button  className= 'close btn' onClick= { this.onClick } >
    			<span>&times;</span>
  			</button>
    	</div>
		);
	}
}

FlashMessage.propTypes = {
	message: PropTypes.object.isRequired,
	deleteFlashMessage: PropTypes.func.isRequired
};

FlashMessage.defaultProps = {
	deleteFlashMessage: f => alert('Default fn: deleteFlashMessage')
};

export default FlashMessage;

