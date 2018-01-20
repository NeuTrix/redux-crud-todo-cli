/* eslint-env mocha, chai */

// should split this into a reducer test suite
// import React from 'react';

// ======== esllint
/*global TodoReducer xdescribe:true*/
/*global TodoReducer it:true*/
/*eslint no-undef: "error"*/

import deepFreeze from 'deep-freeze';
import { expect } from 'chai';
import store from '../../store/store';
import todos from '../../reducers/todoReducer';

import { 
	addTodo, 
	updateTodo,
	removeTodo, 
	toggleTodo,
	updateRank, 
	updateDate,
} from '../../actions/todoActions';

// ====================================

describe('The ADD_TODO function', () => { 

	let listBefore = store.getState().todos;

	let newItem = { 
		_id: "TestID990077",
		date: "2017-12-31",
	  completed: true,
	  details: "Something to try",
	  owner: "Wilbur",
	  rank: "High",
	  task: "Test this component" 
	}

	let listAfter, _task;

	beforeAll(() => {
		store.dispatch(addTodo(newItem));

		listAfter = store.getState().todos;
		_task = listAfter[listAfter.length - 1];

		console.log("Here's the last item in the list... ", _task);

	});

	afterAll(() => {
		listAfter.pop()
	});
	
	it('... is an initial array of 3 items', () => {
		expect(listAfter).to.be.an('array');
		expect(listBefore.length).to.equal(3);
	});

	it('...can ADD another _task to that list', () => {
		expect(listAfter.length).to.equal(listBefore.length + 1);
	});

	// ========= 

	it('... has the expected _id property', () => {
		expect(_task).to.have.property('_id').eql(newItem._id);
	})

	it('... has the expected date property', () => {
		expect(_task).to.have.property('date').eql(newItem.date);
	})

	it('... has the expected completed property', () => {
		expect(_task).to.have.property('completed').eql(newItem.completed);
	})

	it('... has the expected details property', () => {
		expect(_task).to.have.property('details').eql(newItem.details);
	})

	it('... has the expected owner property', () => {
		expect(_task).to.have.property('owner').eql(newItem.owner);
	})

	it('... has the expected rank property', () => {
		expect(_task).to.have.property('rank').eql(newItem.rank);
	})

	it('... has the expected task property', () => {
		expect(_task).to.have.property('task').eql(newItem.task);
	})

});

xdescribe('The REMOVE_TODO function', () => { 

	it('...can REMOVE an item from the list', () => {
		let listBefore = store.getState().todos;
		deepFreeze (listBefore);
		
		expect(listBefore.length).to.equal(4);
		
		let _id = listBefore[1].id;
		
		expect(_id).to.be.a('string');
		
		store.dispatch(removeTodo(_id));
		let listAfter = store.getState().todos;

		expect(listAfter).to.be.an('array');
		expect(listAfter.length).to.equal(listBefore.length-1);
	});
});

xdescribe('The TOGGLE_TODO function', () => {

	it('changes the todo complete status', () => {
		let listB4 = store.getState().todos;
		expect(listB4).to.be.an('array');
		// ensure immutability
		deepFreeze(listB4);

		let _id = listB4[0].id;
		expect(_id).to.be.a('string');
		expect(_id).to.be.equal('0.1HxYz');

		store.dispatch(toggleTodo(_id));

		let listAFT = store.getState().todos;
		expect(listAFT[0].id).to.equal('0.1HxYz');
		let complete = listAFT[0].complete;
		// console.log('*****this is the status:  ', complete, listB4[0].id);

		expect(complete).to.equal(true);
	});
});

xdescribe('The UPDATE_TODO function', () => {
	it('changes the todo content', () => {
		let listB5 = store.getState().todos;
		expect(listB5).to.be.an('array');
		// ensure immutability
		deepFreeze(listB5);

		let _id = listB5[0].id;
		expect(_id).to.be.a('string');
		expect(_id).to.be.equal('0.1HxYz');

		store.dispatch(updateTodo(_id,'Task Updated. Whatever!'));

		let listAFT2 = store.getState().todos;
		expect(listAFT2[0].task).to.equal('Task Updated. Whatever!');
	});
});

xdescribe('The UPDATE_RANK function', () => {
	it('changes the rank content', () => {
		let listB5 = store.getState().todos;
		expect(listB5).to.be.an('array');
		// ensure immutability
		deepFreeze(listB5);

		let _id = listB5[0].id;
		expect(_id).to.be.a('string');
		expect(_id).to.be.equal('0.1HxYz');

		store.dispatch(updateRank(_id,'Highest'));

		let listAFT2 = store.getState().todos;
		expect(listAFT2[0].rank).to.equal('Highest');

	});
});

xdescribe('The UPDATE_DATE function', () => {
	it('changes the DATE content', () => {
		let listB5 = store.getState().todos;
		expect(listB5).to.be.an('array');
		// ensure immutability
		deepFreeze(listB5);

		let _id = listB5[0].id;
		expect(_id).to.be.a('string');
		expect(_id).to.be.equal('0.1HxYz');

		store.dispatch(updateDate(_id,'Jan 25th'));

		let listAFT2 = store.getState().todos;
		expect(listAFT2[0].date).to.equal('Jan 25th');

	});
});

