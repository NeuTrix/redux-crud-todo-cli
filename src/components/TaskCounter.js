import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Glyphicon, Grid, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';

const styleRow = {
	color: 'steelblue',
	backgroundColor: 'aliceblue',
	opacity: 0.8,
	padding: 10,
};

const styleCount = {
	backgroundColor: '#0E3656',
	border: '2px solid navy',
	color: 'lime',
	fontSize: '1.5em',
	textAlign: 'center',
};

const spacing = {
	xs: { refr: 2, title: 5, badge: 2 },
	sm: { refr: 1, title: 2, badge: 1 },
	md: { refr: 1, title: 2, badge: 1 }
};

// +++++++++   +++++++++ 

const TaskCounter = (props) => {

	const onClick = (e) => {
		e.preventDefault();
		props.fetchTodos();
	};

	const tooltipRefresh = (
		<Tooltip  id = 'tooltipRefresh' >
			Refresh Todos list
		</Tooltip>
	)

	return ( 
		<Grid >
			<Row style = { styleRow } >

				<OverlayTrigger
					placement = 'bottom'
					overlay = { tooltipRefresh }
				>
					<Col
						xs = { spacing.xs.refr } 
						sm = { spacing.sm.refr } 
						md = { spacing.md.refr } 
					>
						<Button onClick = { onClick } >
							<Glyphicon 
								glyph = 'refresh'
								style = {{ color: '#286D9A', fontSize: '1em' }}
							/>  
						</Button>
					</Col>
				</OverlayTrigger>
				<Col
					xs = { spacing.xs.title } 
					sm = { spacing.sm.title } 
					md = { spacing.md.title } 
					style = {{ paddingTop: 7, color: '#286D9A' }}
				>
					Todos Count:   
				</Col>
				<Col
					style =  { styleCount }
					xs = { spacing.xs.badge } 
					sm = { spacing.sm.badge } 
					md = { spacing.md.badge } 
				>
					<span > { props.todos.length } </span>
				</Col>
			</Row>
		</Grid>
	);
};

// +++++++++   +++++++++ 
	
TaskCounter.propTypes = {
	fetchTodos: PropTypes.func.isRequired,
	todos: PropTypes.array.isRequired
};

TaskCounter.defaultProps = {
	fetchTodos: f => f,
	todos: [1,2,3,4,5]
};

export default TaskCounter;