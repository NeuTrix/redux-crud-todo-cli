import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Grid, Row } from 'react-bootstrap';
import TodoItem from '../components/TodoItem';
import shortid from 'shortid'

class TodoList extends Component {
	
	constructor (props) {
		super(props);
		this.state = { 
			todoArray: this.props.todoArray			
		};
	}

// +++++++++   +++++++++ 

	componentDidMount () {
	
	}

	componentWillReceiveProps (newProps) {
		this.setState({
			todoArray: newProps.todoArray			
		});
	}

	render() {
		
		let _todoArray = this.state.todoArray;
		let todos = _todoArray.map(item => {
			return <TodoItem key = { shortid.generate() } item = { item } />;
		});

		return (
			<Grid  >
				<Row className = 'todoItems' >
					
					<Col lg = { 12 } >
						{ todos.reverse() } 
					</Col>
				</Row>
			</Grid>
		);
	}
} 

TodoList.propTypes = {
	todoArray: PropTypes.array.isRequired,
};

TodoList.defaultProps = { 
	todoArray: [],
};

export default TodoList;
