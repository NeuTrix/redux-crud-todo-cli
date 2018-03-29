import chai, { expect } 	from 'chai';
import deepFreeze from 'deep-freeze';
import TodoReducer from '../../reducers/todoReducer';
import * as mod from '../../actions/editActions';
 
describe ('the basic EDIT_ITEM case', () => {

	const todo1 = { _id:101, task:'Test Item before', owner: 'First' };
	const todo2 = { _id:202, task:'Test Item before', owner: 'Second' };
	const startState = [ todo1, todo2 ];
	deepFreeze(startState);

	let _id = 101, edit = { task: 'GOT EDITED!' };
	let editedState = TodoReducer(startState, mod.editItem(_id, edit));

	let findTask = (task) =>  task._id === _id;
	let startTask = startState.filter(findTask)[0];
	let editedTask = editedState.filter(findTask)[0];

	it ('... doesn\'t change the length of the state', () => {
		expect(editedState.length).to.eql(startState.length);
	});

	it ('... changed the "task" value of the target item', () => {
		expect(editedTask.task).not.to.eql(startTask.task);
		expect(editedTask.task).to.eql('GOT EDITED!');
	});

	it ('... retained it\'s other properties', () => {
		expect(editedTask).to.have.property('_id')
			.eql(101);
		expect(editedTask).to.have.property('owner')
			.eql('First');
	});
});

describe ('The editIsPosting POSTING action creator', () => {

	let loading; // action variable

	beforeAll (() => {
		loading = mod.editIsPosting (false);
	});

	it ('... is an available function', () => {
		expect (loading).to.exist;
	});

	it ('... has a "type" property', () => {
		expect (loading).to.have.property ('type');
	});

	it ('... has a type of "EDIT_IS_POSTING" ', () => {
		expect (loading.type).to.exist
			.to.eql('EDIT_IS_POSTING');
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

describe ('The editHasSucceeded SUCCESS action creator', () => {

	let aSuccess; // success action 
	let bool; // array for testing

	beforeAll (() => {
		bool = true;
		aSuccess = mod.editHasSucceeded (bool);
	});

	it ('... is an available function', () => {
		expect (aSuccess).to.exist;
	});

	it ('... has a "type" property', () => {
		expect (aSuccess).to.have.property ('type');
	});

	it ('... has a type of "EDIT_HAS_SUCCEEDED" ', () => {
		expect (aSuccess.type).to.exist
			.to.eql('EDIT_HAS_SUCCEEDED');
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

describe ('The editHasErrored ERROR action creator', () => {

	let anErr;

	beforeAll (() => {
		anErr = mod.editHasErrored (false);
	});

	it ('... is an available function', () => {
		expect (anErr).to.exist;
	});

	it ('... has a "type" property', () => {
		expect (anErr).to.have.property ('type');
	});

	it ('... has a type of "EDIT_HAS_ERRORED" ', () => {
		expect (anErr.type).to.exist
			.to.eql('EDIT_HAS_ERRORED');
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



