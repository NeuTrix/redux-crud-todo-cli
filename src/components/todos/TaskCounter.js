import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// +++++++++  CSS  +++++++++

const Grid = styled.div`
	 	display: grid;
	 	grid-template-areas: " title count ";
		grid-template-columns: auto;
		
		& * {
			font-size: 1.35em
		}
 `;

const Title = styled.div`
 	grid-area: title;
 `;

const Count = styled.div`
 	grid-area: count;
 	justify-content: left;
 	color: #ffcc66;
 	padding-left: 10px;
 `;

// +++++++++  COMPONENT +++++++++

const TaskCounter = props => (

	<Grid className={`TaskCounter ${props.className} ctr mat engrBox paper`}>

		<Title className="ctr engr">
			<h3> Todos Count: </h3>
		</Title>

		<Count className="ctr engr">
			<h2>
				{' '}
				{ props.todos.length }
				{' '}
			</h2>
		</Count>

	</Grid>
);

// +++++++++ PROPS +++++++++

TaskCounter.propTypes = {
	todos: PropTypes.array.isRequired,
};

TaskCounter.defaultProps = {
	todos: [],
};

export default TaskCounter;
