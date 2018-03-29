import chai, { expect } 	from 'chai';
import deepFreeze from 'deep-freeze';
import TodoReducer from '../../reducers/todoReducer'
import * as mod from '../../actions/deleteActions';
 
describe ('the basic DELETE_ITEM case', () => {

	const todo1 = { _id:101, task:'Test Item before', owner: 'First' }
	const todo2 = { _id:202, task:'Test Item before', owner: 'Second' }
	const startState = [ todo1, todo2 ]
	deepFreeze(startState);

	let _id = 202
	let deletedState = TodoReducer(startState, mod.removeTodo(_id))

	let findTask = (task) =>  task._id === _id
	let startTaskArr = startState.filter(findTask)
	let deletedTaskArr = deletedState.filter(findTask)

	it ('... exists in the starting state', () => {
		expect(startTaskArr[0]._id).to.eql(202)
	});

	it ('... changes the length of the state', () => {
		expect(deletedState.length).to.eql(startState.length - 1)
	});

	it ('... deleted the  "task" from the state', () => {
		expect(deletedTaskArr[0]).to.eql(undefined)
	});
});

describe ('The deleteIsPosting POSTING action creator', () => {

	let loading; // action variable

	beforeAll (() => {
		loading = mod.deleteIsPosting (false);
	});

	it ('... is an available function', () => {
		expect (loading).to.exist;
	});

	it ('... has a "type" property', () => {
		expect (loading).to.have.property ('type');
	});

	it ('... has a type of "DELETE_IS_POSTING" ', () => {
		expect (loading.type).to.exist
			.to.eql('DELETE_IS_POSTING');
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

describe ('The deleteHasSucceeded SUCCESS action creator', () => {

	let aSuccess; // success action 
	let bool; // array for testing

	beforeAll (() => {
		bool = true;
		aSuccess = mod.deleteHasSucceeded (bool);
	});

	it ('... is an available function', () => {
		expect (aSuccess).to.exist;
	});

	it ('... has a "type" property', () => {
		expect (aSuccess).to.have.property ('type');
	});

	it ('... has a type of "DELETE_HAS_SUCCEEDED" ', () => {
		expect (aSuccess.type).to.exist
			.to.eql('DELETE_HAS_SUCCEEDED');
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

describe ('The deleteHasErrored ERROR action creator', () => {

	let anErr;

	beforeAll (() => {
		anErr = mod.deleteHasErrored (false);
	});

	it ('... is an available function', () => {
		expect (anErr).to.exist;
	});

	it ('... has a "type" property', () => {
		expect (anErr).to.have.property ('type');
	});

	it ('... has a type of "DELETE_HAS_ERRORED" ', () => {
		expect (anErr.type).to.exist
			.to.eql('DELETE_HAS_ERRORED');
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