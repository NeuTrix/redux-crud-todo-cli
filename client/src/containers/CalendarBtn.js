import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

// ========= Functions ========= 

// ========= Component ========= 

class CalendarBtn extends Component {

	render () {

		const handleChangeDate = (event) => {
		event.preventDefault();
		alert("Howdy")
		// this.props.updateDate(item.id, _date.value);
	};

		return (
			<Col >
				<input 
					type = 'date'  
					onBlur= { this.props.handleChangeDate }
					defaultValue = { this.props.storedDate } 
					required
				/>
			</Col >
		);
	}
}; //end Container

//============================================================

CalendarBtn.propTypes = {
	updateDate: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	storedDate: PropTypes.string.isRequired
};

CalendarBtn.defaultProps = {
	id: 'pending',
	handleChangeDate: f => f,
	storedDate: '2017-12-31'
};

//============================================================
export default CalendarBtn;