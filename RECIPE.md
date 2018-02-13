# Making a store connection

## Connect the store
`import { connect } from 'react-redux';`

## Map State to Props

## Map Dispatch to Props

```javascript
const mapStateToProps = (state) => {
	return {
		todos: state.todos,
		hasErrored: state.todosHasErrored,
		isLoading: state.todosIsLoading
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		// setData:(url) => dispatch(startState(url))
		// setData: (url) => {
		// 	dispatch(startState(url));
		// }
	};
};
```

## export the connection an Mapping
`export default connect(mapStateToProps, mapDispatchToProps)(TodoList);`