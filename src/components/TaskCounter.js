import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Glyphicon, Grid, Row,  } from 'react-bootstrap';

const TaskCounter = (props) => {

	const styleRow = {
		color: 'steelblue',
		outline: '1px solid lightgrey',
		padding: 10,
		borderRadius: 10
	};

	const spacing = {
		xs: { refr: 2, title: 5, badge: 2 },
		sm: { refr: 2, title: 1, badge: 1 },
		md: { refr: 2, title: 1, badge: 1 }
	};

	const styleCount = {
		backgroundColor: 'black',
		border: '2px solid navy',
		borderRadius: 10,
		color: 'lime',
		fontSize: '1.5em',
		textAlign: 'center',
	}

	const onClick = (e) => {
		e.preventDefault()
		props.readTodos()
	};

	return ( 
		<Grid>
			<Row style = { styleRow } >

				<Col
					xs = { spacing.xs.refr } 
					sm = { spacing.sm.refr } 
					md = { spacing.md.refr } 
				>
					<Button
						onClick = { onClick }
					>
						<Glyphicon 
							glyph = 'refresh'
							style = {{ color: 'steelblue', fontSize: '1em' }}
						/>  
					</Button>
				</Col>

				<Col
					xs = { spacing.xs.title } 
					sm = { spacing.sm.title } 
					md = { spacing.md.title } 
					style = {{ paddingTop: 7 }}
				>
					Todos Count:   
				</Col>
				
				<Col
					style =  { styleCount }
					xs = { spacing.xs.badge } 
					sm = { spacing.sm.badge } 
					md = { spacing.md.badge } 

				>
					<span > 
						{ props.todos.length }
					</span>

				</Col>
			</Row>
		</Grid>
	);

};

TaskCounter.propTypes = {
	readTodos: PropTypes.func.isRequired,
	todos: PropTypes.array.isRequired
};

TaskCounter.defaultProps = {
	readTodos: f => f,
	todos: [1,2,3,4,5]
};

export default TaskCounter;