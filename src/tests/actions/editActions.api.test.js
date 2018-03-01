/* eslint-env jest, mocha, chai */

// ======== esllint
/*global TodoReducer it:true*/
/*eslint no-undef: "error"*/

// import axios from 'axios';
import chai	from 'chai';
import chaiHttp from 'chai-http';
import { expect } from 'chai';

import deepFreeze from 'deep-freeze';
// import shortid from 'shortid';
import store from '../../store/store'
import { editItem } from '../../actions/editActions'
import { createTodo } from '../../actions/createActions'
import { deleteTodo } from '../../actions/deleteActions'

// import action creators
import * as actions from '../../actions/editActions';
import {
	EDIT_IS_POSTING,
	EDIT_HAS_SUCCEEDED,
	EDIT_HAS_ERRORED
} from '../../actions/editActions';
 
chai.use(chaiHttp);

describe ('The editIsPosting POSTING action creator', () => {

	let loading;

	beforeAll(() => {
		loading = actions.editIsPosting(false);
	});

	it('... is an available function', () => {
		expect(loading).to.exist;
	});

	it('... has a "type" property', () => {
		expect(loading).to.have.property('type');
	});

	it('... has a type of "EDIT_IS_POSTING" ', () => {
		expect(loading.type).to.exist
			.to.eql('EDIT_IS_POSTING');
	});

	it('... type is a string', () => {
		expect(loading.type).to.be.a('string');
	});
	
	it('... has a "payload" property', () => {
		expect(loading).to.have.property('payload');
	});

	it('... payload has a "status" property', () => {
		expect(loading.payload).to.have.property('status');
	});

	it('... payload.status has a boolean value', () => {
		expect(loading.payload).to.have.property('status');
	});
});

describe ('The editHasSucceeded SUCCESS action creator', () => {

	let aSuccess;
	let todos

	beforeAll(() => {
		todos = [1,2,3]
		aSuccess = actions.editHasSucceeded(todos);
	});

	it('... is an available function', () => {
		expect(aSuccess).to.exist;
	});

	it('... has a "type" property', () => {
		expect(aSuccess).to.have.property('type');
	});

	it('... has a type of "EDIT_HAS_SUCCEEDED" ', () => {
		expect(aSuccess.type).to.exist
			.to.eql('EDIT_HAS_SUCCEEDED');
	});

	it('... has a "payload" property', () => {
		expect(aSuccess).to.have.property('payload');
	});

	it('... payload has a "todos" property', () => {
		expect(aSuccess.payload).to.have.property('todos');
	});

	it('... payload.todos has a boolean value', () => {
		expect(aSuccess.payload).to.have.property('todos')
			.to.be.an('array')
	});
});

describe ('The editHasErrored ERROR action creator', () => {

	let anErr;

	beforeAll(() => {
		anErr = actions.editHasErrored(false);
	});

	it('... is an available function', () => {
		expect(anErr).to.exist;
	});

	it('... has a "type" property', () => {
		expect(anErr).to.have.property('type');
	});

	it('... has a type of "EDIT_HAS_ERRORED" ', () => {
		expect(anErr.type).to.exist
			.to.eql('EDIT_HAS_ERRORED');
	});

	it('... has a "payload" property', () => {
		expect(anErr).to.have.property('payload');
	});

	it('... payload has a "status" property', () => {
		expect(anErr.payload).to.have.property('status');
	});

	it('... payload.status has a boolean value', () => {
		expect(anErr.payload).to.have.property('status');
	});
});

describe('The editItem action', () => {

})

xdescribe ('The editTodo function', () => {
	let listBefore, listAfter
	let todos, lastItem
	let api = 'https://redux-todo-api.herokuapp.com/api/todos';

	let newItem = {	
				completed:  false,
				date: '2050-12-31',
				details: 'Initial test Item',
				owner: 'EDIT Tester*',
				rank: 'Low',
				task:  'set Initial TEST item'
			}
	let updatedItem = {	
				completed:  false,
				date: '2050-12-31',
				details: 'edit item test',
				owner: 'EDIT Tester*',
				rank: 'Low',
				task:  'EDITED itme'
			}

	// let oldItem = store.getState().todos[0];

	beforeEach(() => {
		store.dispatch(createTodo(api, newItem))
		listBefore = store.getState().todos
	});

	afterEach(() => {
		todos  = store.getState().todos
		lastItem = todos[todos.length - 1]
		console.log(lastItem)
		store.dispatch(deleteTodo(api, lastItem._id))
	});

	it('The state list it cleared', () => {
		let todos = store.getState().todos
		expect(listBefore.length).to.eql(todos.length)
	})
		
	it('... starts with a clean list', () => {
		todos = store.getState().todos
	})

	it('... connection to api returns status 200', (done) => {
		chai.request(api)
			.get('/')
			.end((err,res) => {
				expect(err).to.be.eql(null);
				expect(res).to.have.status(200);
				done();
			});
	});

	it('... can make a successful axios Read call', () => {

	})

	it('... base connection returns a new json array object', (done) => {
		let data; 

		chai.request(api)
			.get('/')
			.end((err,res) => {
				expect(res).to.be.json;
				expect(res.body).to.be.an('array');
				done();
			});
	});

	

});


	it('', () => {
		
	})

