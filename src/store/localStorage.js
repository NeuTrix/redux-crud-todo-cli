// create function to LOAD the state from localStorage

export const loadState = () => {
	try {
		const serializedState = localStorage.getItem('appState');
		if(serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch(err) {
		return undefined;
	}
};

// create function to SAVE the state to localStorage

export const saveState = (state) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem('appState', serializedState);
	} catch(err) {
		// Ignore write errors.
		// console.log(err);
	} 
};