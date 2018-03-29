import chai, { expect } 	from 'chai';
import deepFreeze from 'deep-freeze';
import TodoReducer from '../../reducers/todoReducer'
import * as mod from '../../actions/readActions';
 
describe ('the basic READ_ITEM case', () => {

	const startState = [ ]
	deepFreeze(startState);

	const todo1 = { _id:101, task:'Test Item before', owner: 'First' }
	const todo2 = { _id:202, task:'Test Item before', owner: 'Second' }
	const newState = [ todo1, todo2 ]

	let readState=TodoReducer(startState, mod.readSavedTodos(newState))

	it ('... changes the length of the state', () => {
		expect(readState.length).to.eql(startState.length + 2)
	});

});

describe ('The todosIsLoading action creator', () => {

	let loading; // action variable

	beforeAll (() => {
		loading = mod.todosIsLoading (false);
	});

	it ('... is an available function', () => {
		expect (loading).to.exist;
	});

	it ('... has a "type" property', () => {
		expect (loading).to.have.property ('type');
	});

	it ('... has a type of "TODOS_IS_LOADING" ', () => {
		expect (loading.type).to.exist
			.to.eql('TODOS_IS_LOADING');
	});

	it ('... type is a string', () => {
		expect (loading.type).to.be.a('string');
	});
	
	it ('... has a "payload" property', () => {
		expect (loading).to.have.property ('payload');
	});

	it ('... payload has a "status" property', () => {
		expect (loading.payload).to.have.property ('status');
	});

	it ('... payload.status has a boolean value', () => {
		expect (loading.payload).to.have.property ('status');
	});
});

describe ('The todosHasFetched SUCCESS action creator', () => {

	let aSuccess; // success action 
	let bool; // array for testing

	beforeAll (() => {
		bool = true;
		aSuccess = mod.todosHasFetched (bool);
	});

	it ('... is an available function', () => {
		expect (aSuccess).to.exist;
	});

	it ('... has a "type" property', () => {
		expect (aSuccess).to.have.property ('type');
	});

	it ('... has a type of "TODOS_HAS_FETCHED" ', () => {
		expect (aSuccess.type).to.exist
			.to.eql('TODOS_HAS_FETCHED');
	});

	it ('... has a "payload" property', () => {
		expect (aSuccess).to.have.property ('payload');
	});

	it ('... payload has a "status" property', () => {
		expect (aSuccess.payload).to.have.property ('status');
	});

	it ('... payload.status has a boolean value', () => {
		expect (aSuccess.payload).to.have.property ('status')
			.to.be.an('boolean');
	});
});

describe ('The todosHasErrored ERROR action creator', () => {

	let anErr;

	beforeAll (() => {
		anErr = mod.todosHasErrored (false);
	});

	it ('... is an available function', () => {
		expect (anErr).to.exist;
	});

	it ('... has a "type" property', () => {
		expect (anErr).to.have.property ('type');
	});

	it ('... has a type of "TODOS_HAS_ERRORED" ', () => {
		expect (anErr.type).to.exist
			.to.eql('TODOS_HAS_ERRORED');
	});

	it ('... has a "payload" property', () => {
		expect (anErr).to.have.property ('payload');
	});

	it ('... payload has a "status" property', () => {
		expect (anErr.payload).to.have.property ('status');
	});

	it ('... payload.status has a boolean value', () => {
		expect (anErr.payload).to.have.property ('status');
	});
});

/* eslint-env jest, mocha, chai */
/*global TodoReducer it:true*/
/*eslint no-undef: "error"*/