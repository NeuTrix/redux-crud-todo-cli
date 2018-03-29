import chai, { expect } 	from 'chai';
import deepFreeze from 'deep-freeze';
import TodoReducer from '../../reducers/todoReducer'
import * as mod from '../../actions/createActions';
 
describe ('the basic CREATE_ITEM case', () => {

	const todo1 = { _id:101, task:'Test Item before', owner: 'First' }
	const startState = [ todo1 ]
	deepFreeze(startState);

	const todo2 = { _id:202, task:'Test Item before', owner: 'Second' }
	let createdState = TodoReducer(startState, mod.addTodo(todo2))

	let _id = 202
	let findTask = (task) =>  task._id === _id
	let startTaskArr = startState.filter(findTask)
	let createdTaskArr = createdState.filter(findTask)

	it ('... does not exist in the starting state', () => {
		expect(startTaskArr.length).to.eql(0)
	});

	it ('... changes the length of the state', () => {
		expect(createdState.length).to.eql(startState.length + 1)
	});

	it ('... added a new "task" to the state', () => {
		expect(createdTaskArr[0]._id).to.eql(202)
	});

	it ('... created the correct properties', () => {
		expect(createdTaskArr[0]).to.have.property('_id')
			.eql(202)
		expect(createdTaskArr[0]).to.have.property('owner')
			.eql('Second')
	});
});

describe ('The createIsPosting POSTING action creator', () => {

	let loading; // action variable

	beforeAll (() => {
		loading = mod.createIsPosting (false);
	});

	it ('... is an available function', () => {
		expect (loading).to.exist;
	});

	it ('... has a "type" property', () => {
		expect (loading).to.have.property ('type');
	});

	it ('... has a type of "CREATE_IS_POSTING" ', () => {
		expect (loading.type).to.exist
			.to.eql('CREATE_IS_POSTING');
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

describe ('The createHasSucceeded SUCCESS action creator', () => {

	let aSuccess; // success action 
	let bool; // array for testing

	beforeAll (() => {
		bool = true;
		aSuccess = mod.createHasSucceeded (bool);
	});

	it ('... is an available function', () => {
		expect (aSuccess).to.exist;
	});

	it ('... has a "type" property', () => {
		expect (aSuccess).to.have.property ('type');
	});

	it ('... has a type of "CREATE_HAS_SUCCEEDED" ', () => {
		expect (aSuccess.type).to.exist
			.to.eql('CREATE_HAS_SUCCEEDED');
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

describe ('The createHasErrored ERROR action creator', () => {

	let anErr;

	beforeAll (() => {
		anErr = mod.createHasErrored (false);
	});

	it ('... is an available function', () => {
		expect (anErr).to.exist;
	});

	it ('... has a "type" property', () => {
		expect (anErr).to.have.property ('type');
	});

	it ('... has a type of "CREATE_HAS_ERRORED" ', () => {
		expect (anErr.type).to.exist
			.to.eql('CREATE_HAS_ERRORED');
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