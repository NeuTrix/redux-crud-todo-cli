import React from 'react';
import PropTypes from 'prop-types';

// +++++++++  CSS  +++++++++ 

const style = {
	
	grid: {
		display: 'grid',
		gridTemplateAreas: ` "refresh title count" `,
		gridTemplateColumns: '1fr 6fr 2fr ',
	}
 };

// +++++++++  COMPONENT +++++++++ 

const TaskCounter = (props) => {

	const onClick = (e) => {
		e.preventDefault();
		props.fetchTodos();
	};

	return ( 
		<div 
			id = 'todosCount' 
			className = 'ctr mat engrBox'  
			style = { style.grid }
		>
			<button 
				onClick = { onClick } 
				style = {{ 
					gridArea: 'refresh', 
					background: 'none', 
					border: 'none',
				}}
			>
				<i className = 'ctr engr fa fa-refresh fa-lg'/>  
			</button>

			<div className = 'ctr engr' style = {{ gridArea: 'title'}} >
				<h3> Todos Count:    </h3>
			</div>

			<span 
				className = 'ctr engr' 
				style = {{ 
					gridArea: 'count', 
					color: 'orange', 
					justifySelf: 'left',
					aligneSelf: 'centerd',
				}}
			> 
				<h2> { props.todos.length } </h2>
			</span>

		</div>
	);
};

// +++++++++ PROPS +++++++++ 
	
TaskCounter.propTypes = {
	fetchTodos: PropTypes.func.isRequired,
	todos: PropTypes.array.isRequired
};

TaskCounter.defaultProps = {
	fetchTodos: f => f,
	todos: [1,2,3,4,5]
};

export default TaskCounter;