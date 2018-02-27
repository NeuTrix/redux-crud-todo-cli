/* eslint-env jest, mocha, chai */

// ======== esllint
/*global TodoReducer it:true*/
/*eslint no-undef: "error"*/

import axios from 'axios';
import chai	from 'chai';
import chaiHttp from 'chai-http';
import { expect } from 'chai';

import deepFreeze from 'deep-freeze';
import shortid from 'shortid';
import store from '../../store/store';

// import action creators
import { 
	todosIsLoading,
	todosHasErrored,
	todosHasFetched,
	startState
} from '../../actions/apiActions';

chai.use(chaiHttp);

describe('The apiActions LOADING action creator', () => {

	let loading;

	beforeAll(() => {
		loading = todosIsLoading(false);
	});

	it('... is an available function', () => {
		expect(loading).to.exist;
	});

	it('... has a "type" property', () => {
		expect(loading).to.have.property('type');
	});

	it('... has a type of "TODOS_IS_LOADING" ', () => {
		expect(loading.type).to.exist
			.to.eql('TODOS_IS_LOADING');
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

describe ('The apiActions ERROR action creator', () => {

	let anErr;

	beforeAll(() => {
		anErr = todosHasErrored(false);
	});

	it('... is an available function', () => {
		expect(anErr).to.exist;
	});

	it('... has a "type" property', () => {
		expect(anErr).to.have.property('type');
	});

	it('... has a type of "TODOS_HAS_ERRORED" ', () => {
		expect(anErr.type).to.exist
			.to.eql('TODOS_HAS_ERRORED');
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

describe ('The apiActions SUCCESS action creator', () => {

	let hasData;
	let url = 'http://localhost:3003/api/todos';
	let testState = [
		{ _id: shortid.generate(), date: 	'2020-01-01', completed: false, task:'Get some Milk', rank: 'High' },
		{ _id: shortid.generate(), date: 	'2020-01-01', completed: false, task:'Kiss my daughter', rank: 'Med' },
		{ _id: shortid.generate(), date: 	'2020-01-01', completed: false, task:'Celebrate life!', rank: 'Low' },
	];

	beforeAll(() => {
		hasData = todosHasFetched(testState);
	});

	it('... is an available function', () => {
		expect(hasData).to.exist;
	});

	it('... has a "type" property', () => {
		expect(hasData).to.have.property('type');
	});

	it('... has a type of "TODOS_HAS_FETCHED" ', () => {
		expect(hasData.type).to.exist
			.to.eql('TODOS_HAS_FETCHED');
	});

	it('... has a "payload" property', () => {
		expect(hasData).to.have.property('payload');
	});

	it('... payload has a "todos" property', () => {
		expect(hasData.payload).to.have.property('todos');
	});

	it('... payload.todos is an array', () => {
		expect(hasData.payload.todos).to.be.an('array');
	});
});

describe('The get todos INITIAL STATE  function', () => {

	let api = 'https://redux-todo-api.herokuapp.com/api/todos';

	it('... connection to api returns status 200', (done) => {
		chai.request(api)
			.get('/')
			.end((err,res) => {
				expect(err).to.be.eql(null);
				expect(res).to.have.status(200);
				done();
			});
	});

	it.only('... can make a successful axios Read call', (done) => {

		axios.get(api)
			.then((res) => {
				let data = res.data
				expect(res.status).to.eql(400)
				expect(data).to.be.an('array')
			done()
		})
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

	it('.. the function returns an array object', () => {
		let dispatch = store.dispatch;
		let data = startState(api);
		let test = store.dispatch(data);
	});

});



