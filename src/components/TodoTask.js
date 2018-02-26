import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';

// ========= Stlyling


const isEditingStyle = {
	backgroundColor: 'lime', 
	color: 'blue' 
}


// ========= Component

class TodoTask extends Component {

	constructor (props) {
		super(props)

		this.state = {
			item: this.props.item,
			// isCompleted: this.props.item.completed,
			isEditing: false,
/*			style: this.props.item.completed ?
						isCompletedStyle :
						defaultStyle,


*/			
		style : {backgroundColor: 'yellow'},
		task:"State is working"
		}
			this.handleClick = this.handleClick.bind(this)

	}

	/*componentDidMount() {
		if(this.props.item.completed) {
		 this.setState({ style: isCompletedStyle })
		} 
		 this.setState({ style: defaultStyle })
	}*/

	shouldComponentUpdate (nextProps) {
		// console.log("***THIS***",this.props.item)
		// console.log("***TASK***",nextProps.item)
		if (this.props.item !== nextProps.item) {
			return true
		} 
			return false
	}


 handleClick(event) {
			event.preventDefault();
				this.setState({ isEditing: true })
				this.setState ({ style: isEditingStyle });

			// if (this.props.item.completed) {
			// 	alert('Item is completed');
			// 	this.setState ({ style: isCompletedStyle }); 
			// }
		}
	render () {
	
		const handleFocus = (event) => {
			event.preventDefault();

			if (!this.props.item.completed) {
				// this.setState({ isCompleted: false })
				event.target.setSelectionRange( 0, event.target.value.length)
				this.setState({ isEditing: true })
				// this.setState({ style: isEditingStyle })
			} 

		};

		

		const handleChange = (event) => {
			event.preventDefault();
			let newTask = event.target.value;
			this.props.updateTask(this.props._id, newTask);
		};

		/*const handleBlur = (event) => {
			event.preventDefault();
			this.props.item.completed?
			  this.setState({ style: isCompletedStyle }) :
				this.setState({ style: defaultStyle })
			this.setState({ isEditing: false })
		};*/

		return (
			<FormControl 
				onFocus = { this.handleClick }

				className= 'task' 
				defaultValue= { this.state.task }
				required
				style = { this.state.style }
				type = 'text'  
			/> 
		) //return
	}; //render
}; //component

// ========= Props 

TodoTask.propTypes = {
	item: PropTypes.object.isRequired,
	updateTask: PropTypes.func.isRequired,
};

TodoTask.defaultProps = {
	item: { },
	updateTask: f => f,
	style: { }
};

export default TodoTask;